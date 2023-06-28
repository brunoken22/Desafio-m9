import SibApiV3Sdk from "sib-api-v3-sdk";
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
   process.env.SENDINBLUE;
const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

export async function sendinblue(data) {
   const email = await tranEmailApi
      .sendTransacEmail({
         subject: "Aqui esta tu codigo de verificación!",
         sender: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         replyTo: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         to: [{ name: data.name, email: data.email }],
         htmlContent: `<h1>Este es tu codigo: ${data.code}</h1>`,
      })
      .then(
         function (data) {
            console.log("ok.", data);
         },
         function (error) {
            console.error("e", error);
         }
      );
   return email;
}

export async function sendinblueCompra(data) {
   const email = await tranEmailApi
      .sendTransacEmail({
         subject: "Gracias por tu compra!",
         sender: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         replyTo: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         to: [{ name: data.name, email: data.email }],
         htmlContent: `<h1>Muchas gracias por tu compra con el Id del order:${data.order} desde el equipo de <strong>Bruno Ken</strong></h1>`,
      })
      .then(
         function (data) {
            console.log(data);
         },
         function (error) {
            console.error(error);
         }
      );
   return email;
}
