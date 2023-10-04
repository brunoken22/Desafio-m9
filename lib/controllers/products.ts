import {index} from 'lib/algolia';
import {User} from 'lib/models/user';
type ProductFavorito = {
  id: string;
};
export async function searchProductById(id: string) {
  const product = await index.getObject(id);
  return product;
}

export async function productAllFavoritos(token: string) {
  const user = new User(token);
  await user.pull();
  const results = (await index.getObjects(user.data.favorite)).results;
  const resultsProduct = results.map((item: any) => {
    return {
      name: item.Name,
      price: item['Unit cost'],
      id: item.objectID,
      img: item.Images[0].url,
    };
  });

  return resultsProduct;
}

export async function favoriteProduct(token: string, body: ProductFavorito) {
  const user = new User(token);
  await user.pull();
  let resultFavorite;
  if (user.data.favorite && user.data.favorite.includes(body.id)) {
    const indiceEliminar = user.data.favorite.indexOf(body.id);
    user.data.favorite.splice(indiceEliminar, 1);
    resultFavorite = false;
    await user.push();
    return resultFavorite;
  }
  if (user.data.favorite?.length > 0) {
    user.data.favorite.push(body.id);
    resultFavorite = user.data;
    await user.push();
    return resultFavorite;
  }
  user.data.favorite = [body.id];
  resultFavorite = user.data;
  await user.push();
  return resultFavorite;
}
