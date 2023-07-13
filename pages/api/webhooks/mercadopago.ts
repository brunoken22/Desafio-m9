import { getMerchantOrder } from "lib/mercadopago";
import { Order } from "lib/models/order";
import { User } from "lib/models/user";
import { sendinblueCompra } from "lib/sendinblue";
import { handlerCors } from "../middelware";
export default async function (req, res) {
   // await handlerCors(req, res);

   const { id, topic } = req.query;

   if (topic == "merchant_order") {
      const order = await getMerchantOrder(id);
      if (order.order_status == "paid") {
         const orderId = order.external_reference;
         const newOrder = new Order(orderId);
         await newOrder.pull();
         newOrder.data.status = "closed";
         await newOrder.push();

         if (newOrder.data.status == "closed") {
            console.log(newOrder.data.userId);

            const user = new User(newOrder.data.userId);
            await user.pull();
            console.log(user.data);

            await sendinblueCompra({
               email: user.data.email,
               name: user.data.name,
               order: order.external_reference,
            });
            res.send("todo bien");
         }
      }
   }
}
