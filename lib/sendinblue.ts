import SibApiV3Sdk from "sib-api-v3-sdk";
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
   process.env.SENDINBLUE;

export function sendinblue(data) {
   new SibApiV3Sdk.TransactionalEmailsApi()
      .sendTransacEmail({
         subject: "Aqui esta tu codigo de verificación!",
         sender: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         replyTo: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         to: [{ name: data.name, email: data.email }],
         htmlContent: `<h1>Este es tu codigo: ${data.code}</h1>`,
      })
      .then(
         function (data) {
            console.log(data);
         },
         function (error) {
            console.error(error);
         }
      );
}
export function sendinblueCompra(data) {
   new SibApiV3Sdk.TransactionalEmailsApi()
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
}
