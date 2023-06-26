import { createPreference } from "lib/mercadopago";
import { Order } from "lib/models/order";

const products = {
   title: "Casa Bruno",
   price: 50000,
};
export async function createPreferenceControllers(info, productId, token) {
   const order = await Order.create({
      userId: token,
      productId: productId,
      aditionalInfo: info,
      status: "pending",
   });
   const preference = await createPreference({
      items: [
         {
            title: products.title,
            description: "description de prueba",
            picture_url: "http://www.myapp.com/myimage.jpg",
            category_id: "car_electronics",
            quantity: 1,
            currency_id: "ARS",
            unit_price: products.price,
         },
      ],
      back_urls: {
         success: "https://desafio-m8-d396d.web.app",
         pending: "https://desafio-m8-d396d.web.app/login",
      },
      external_reference: order.id,
      notification_url:
         "https://passwordless-sooty.vercel.app/api/webhooks/mercadopago",
   });
   return { url: preference.init_point };
}
