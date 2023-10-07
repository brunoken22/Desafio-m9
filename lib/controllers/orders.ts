import {createPreference} from 'lib/mercadopago';
import {Order} from 'lib/models/order';
import {searchProductById} from './products';
export async function createPreferenceControllers(info, productId, token) {
  const product = await searchProductById(productId as string);

  const order = await Order.create({
    userId: token,
    productId: productId,
    aditionalInfo: info,
    status: 'pending',
  });
  const preference = await createPreference({
    items: [
      {
        title: product['Name'],
        description: product['Name'],
        picture_url: product['Images'][0].url,
        category_id: 'car_electronics',
        quantity: info.cantidad,
        currency_id: 'ARS',
        unit_price: product['Unit cost'],
      },
    ],
    back_urls: {
      success: 'https://desafio-m10-weld.vercel.app/thanks',
      pending: 'https://desafio-m8-d396d.web.app/login',
    },
    auto_return: 'approved',
    external_reference: order.id,
    notification_url:
      'https://desafio-m9-two.vercel.app/api/webhooks/mercadopago',
  });
  return {
    url: preference.init_point,
    orderId: preference.external_reference,
  };
}

export async function getOrderAll(id: string) {
  const order = await Order.searchOrder(id);
  const data = order.map((e) => {
    return e['_fieldsProto'];
  });

  return data;
}
export async function getOrderId(id: string) {
  const order = new Order(id);
  await order.pull();

  return order.data;
}
