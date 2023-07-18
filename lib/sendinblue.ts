import SibApiV3Sdk from "sib-api-v3-sdk";
const img = new Image();
img.src = "../image-2.png";
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
   process.env.SENDINBLUE;
const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();
// htmlContent: `<h1>Este es tu codigo: ${data.code}</h1>`,
export async function sendinblue(data) {
   const email = await tranEmailApi
      .sendTransacEmail({
         subject: "Aqui esta tu codigo de verificación!",
         sender: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         replyTo: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         to: [{ name: data.name, email: data.email }],
         htmlContent: `
         <!DOCTYPE html>
         <html
         xmlns:v="urn:schemas-microsoft-com:vml"
         xmlns:o="urn:schemas-microsoft-com:office:office"
         lang="en"
         >
         <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!--[if mso
               ]><xml
               ><o:OfficeDocumentSettings
                  ><o:PixelsPerInch>96</o:PixelsPerInch
                  ><o:AllowPNG /></o:OfficeDocumentSettings></xml
            ><![endif]-->
            <!--[if !mso]><!-->
            <link
               href="https://fonts.googleapis.com/css?family=Montserrat"
               rel="stylesheet"
               type="text/css"
            />
            <!--<![endif]-->
            <style>
               * {
               box-sizing: border-box;
               }

               body {
               margin: 0;
               padding: 0;
               }

               a[x-apple-data-detectors] {
               color: inherit !important;
               text-decoration: inherit !important;
               }

               #MessageViewBody a {
               color: inherit;
               text-decoration: none;
               }

               p {
               line-height: inherit;
               }

               .desktop_hide,
               .desktop_hide table {
               mso-hide: all;
               display: none;
               max-height: 0px;
               overflow: hidden;
               }

               .image_block img + div {
               display: none;
               }

               @media (max-width: 620px) {
               .desktop_hide table.icons-inner {
                  display: inline-block !important;
               }

               .icons-inner {
                  text-align: center;
               }

               .icons-inner td {
                  margin: 0 auto;
               }

               .row-content {
                  width: 100% !important;
               }

               .stack .column {
                  width: 100%;
                  display: block;
               }

               .mobile_hide {
                  max-width: 0;
                  min-height: 0;
                  max-height: 0;
                  font-size: 0;
                  display: none;
                  overflow: hidden;
               }

               .desktop_hide,
               .desktop_hide table {
                  max-height: none !important;
                  display: table !important;
               }

               .row-1 .column-1 .block-1.paragraph_block td.pad > div {
                  font-size: 30px !important;
               }

               .row-2 .column-1 .block-2.paragraph_block td.pad > div {
                  font-size: 28px !important;
               }

               .row-2 .column-1 .block-1.paragraph_block td.pad > div {
                  font-size: 16px !important;
               }

               .row-1 .column-1 .block-2.paragraph_block td.pad > div {
                  font-size: 76px !important;
               }

               .row-2 .column-1 {
                  padding: 25px 20px 30px !important;
               }
               }
            </style>
         </head>

         <body
            style="
               text-size-adjust: none;
               background-color: #0c1312;
               margin: 0;
               padding: 0;
            "
         >
            <table
               class="nl-container"
               width="100%"
               border="0"
               cellpadding="0"
               cellspacing="0"
               role="presentation"
               style="
               mso-table-lspace: 0pt;
               mso-table-rspace: 0pt;
               background-color: #0c1312;
               "
            >
               <tbody>
               <tr>
                  <td>
                     <table
                     class="row row-1"
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                     style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                     >
                     <tbody>
                        <tr>
                           <td>
                           <table
                              class="row-content stack"
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                 mso-table-lspace: 0pt;
                                 mso-table-rspace: 0pt;
                                 color: #000;
                                 width: 600px;
                                 margin: 0 auto;
                              "
                              width="600"
                           >
                              <tbody>
                                 <tr>
                                 <td
                                    class="column column-1"
                                    width="100%"
                                    style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       text-align: left;
                                       font-weight: 400;
                                       padding-bottom: 20px;
                                       padding-top: 5px;
                                       vertical-align: top;
                                       border-top: 0px;
                                       border-right: 0px;
                                       border-bottom: 0px;
                                       border-left: 0px;
                                    "
                                 >
                                    <table
                                       class="paragraph_block block-1"
                                       width="100%"
                                       border="0"
                                       cellpadding="0"
                                       cellspacing="0"
                                       role="presentation"
                                       style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       word-break: break-word;
                                       "
                                    >
                                       <tr>
                                       <td class="pad" style="padding-top: 15px;">
                                          <div
                                             style="
                                             color: #ffffff;
                                             direction: ltr;
                                             font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                             font-size: 29px;
                                             font-weight: 700;
                                             letter-spacing: 0px;
                                             line-height: 120%;
                                             text-align: center;
                                             mso-line-height-alt: 34.8px;
                                             "
                                          >
                                             <p style="margin: 0;">· E-commerce·</p>
                                          </div>
                                       </td>
                                       </tr>
                                    </table>
                                    <table
                                       class="paragraph_block block-2"
                                       width="100%"
                                       border="0"
                                       cellpadding="0"
                                       cellspacing="0"
                                       role="presentation"
                                       style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       word-break: break-word;
                                       "
                                    >
                                       <tr>
                                       <td class="pad">
                                          <div
                                             style="
                                             color: #01dad0;
                                             direction: ltr;
                                             font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                             font-size: 77px;
                                             font-weight: 700;
                                             letter-spacing: 0px;
                                             line-height: 120%;
                                             text-align: center;
                                             mso-line-height-alt: 92.39999999999999px;
                                             "
                                          >
                                             <p style="margin: 0;">Bienvenido</p>
                                          </div>
                                       </td>
                                       </tr>
                                    </table>
                                 </td>
                                 </tr>
                              </tbody>
                           </table>
                           </td>
                        </tr>
                     </tbody>
                     </table>
                     <table
                     class="row row-2"
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                     style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                     >
                     <tbody>
                        <tr>
                           <td>
                           <table
                              class="row-content stack"
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                 mso-table-lspace: 0pt;
                                 mso-table-rspace: 0pt;
                                 color: #000;
                                 background-color: #151719;
                                 width: 600px;
                                 margin: 0 auto;
                              "
                              width="600"
                           >
                              <tbody>
                                 <tr>
                                 <td
                                    class="column column-1"
                                    width="100%"
                                    style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       text-align: left;
                                       font-weight: 400;
                                       padding-bottom: 30px;
                                       padding-top: 25px;
                                       vertical-align: top;
                                       border-top: 0px;
                                       border-right: 0px;
                                       border-bottom: 0px;
                                       border-left: 0px;
                                    "
                                 >
                                    <table
                                       class="paragraph_block block-1"
                                       width="100%"
                                       border="0"
                                       cellpadding="0"
                                       cellspacing="0"
                                       role="presentation"
                                       style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       word-break: break-word;
                                       "
                                    >
                                       <tr>
                                       <td class="pad">
                                          <div
                                             style="
                                             color: #ffffff;
                                             direction: ltr;
                                             font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                             font-size: 18px;
                                             font-weight: 400;
                                             letter-spacing: 0px;
                                             line-height: 120%;
                                             text-align: center;
                                             mso-line-height-alt: 21.599999999999998px;
                                             "
                                          >
                                             <p style="margin: 0;">Este es tu código</p>
                                          </div>
                                       </td>
                                       </tr>
                                    </table>
                                    <table
                                       class="paragraph_block block-2"
                                       width="100%"
                                       border="0"
                                       cellpadding="0"
                                       cellspacing="0"
                                       role="presentation"
                                       style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       word-break: break-word;
                                       "
                                    >
                                       <tr>
                                       <td
                                          class="pad"
                                          style="padding-bottom: 5px; padding-top: 5px;"
                                       >
                                          <div
                                             style="
                                             color: #01dad0;
                                             direction: ltr;
                                             font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                             font-size: 32px;
                                             font-weight: 700;
                                             letter-spacing: 0px;
                                             line-height: 120%;
                                             text-align: center;
                                             mso-line-height-alt: 38.4px;
                                             "
                                          >
                                             <p style="margin: 0;">${data.code}</p>
                                          </div>
                                       </td>
                                       </tr>
                                    </table>
                                    <div
                                       class="spacer_block block-3"
                                       style="
                                       height: 30px;
                                       line-height: 30px;
                                       font-size: 1px;
                                       "
                                    >
                                       &#8202;
                                    </div>
                                 </td>
                                 </tr>
                              </tbody>
                           </table>
                           </td>
                        </tr>
                     </tbody>
                     </table>
                     <table
                     class="row row-3"
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                     style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                     >
                     <tbody>
                        <tr>
                           <td>
                           <table
                              class="row-content stack"
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                 mso-table-lspace: 0pt;
                                 mso-table-rspace: 0pt;
                                 color: #000;
                                 width: 600px;
                                 margin: 0 auto;
                              "
                              width="600"
                           >
                              <tbody>
                                 <tr>
                                 <td
                                    class="column column-1"
                                    width="100%"
                                    style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       text-align: left;
                                       font-weight: 400;
                                       padding-top: 5px;
                                       vertical-align: top;
                                       border-top: 0px;
                                       border-right: 0px;
                                       border-bottom: 0px;
                                       border-left: 0px;
                                    "
                                 >
                                    <div
                                       class="spacer_block block-1"
                                       style="
                                       height: 30px;
                                       line-height: 30px;
                                       font-size: 1px;
                                       "
                                    >
                                       &#8202;
                                    </div>
                                 </td>
                                 </tr>
                              </tbody>
                           </table>
                           </td>
                        </tr>
                     </tbody>
                     </table>
                     <table
                     class="row row-4"
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                     style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                     >
                     <tbody>
                        <tr>
                           <td>
                           <table
                              class="row-content stack"
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                 mso-table-lspace: 0pt;
                                 mso-table-rspace: 0pt;
                                 color: #000;
                                 width: 600px;
                                 margin: 0 auto;
                              "
                              width="600"
                           >
                              <tbody>
                                 <tr>
                                 <td
                                    class="column column-1"
                                    width="100%"
                                    style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       text-align: left;
                                       font-weight: 400;
                                       padding-bottom: 5px;
                                       padding-top: 5px;
                                       vertical-align: top;
                                       border-top: 0px;
                                       border-right: 0px;
                                       border-bottom: 0px;
                                       border-left: 0px;
                                    "
                                 >
                                    <table
                                       class="icons_block block-1"
                                       width="100%"
                                       border="0"
                                       cellpadding="0"
                                       cellspacing="0"
                                       role="presentation"
                                       style="
                                       mso-table-lspace: 0pt;
                                       mso-table-rspace: 0pt;
                                       "
                                    >
                                       <tr>
                                       <td
                                          class="pad"
                                          style="
                                             vertical-align: middle;
                                             color: #9d9d9d;
                                             font-family: inherit;
                                             font-size: 15px;
                                             padding-bottom: 5px;
                                             padding-top: 5px;
                                             text-align: center;
                                          "
                                       >
                                          <table
                                             width="100%"
                                             cellpadding="0"
                                             cellspacing="0"
                                             role="presentation"
                                             style="
                                             mso-table-lspace: 0pt;
                                             mso-table-rspace: 0pt;
                                             "
                                          >
                                             <tr>
                                             <td
                                                class="alignment"
                                                style="
                                                   vertical-align: middle;
                                                   text-align: center;
                                                "
                                             >
                                                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                <!--[if !vml]><!-->
                                                <table
                                                   class="icons-inner"
                                                   style="
                                                   mso-table-lspace: 0pt;
                                                   mso-table-rspace: 0pt;
                                                   display: inline-block;
                                                   margin-right: -4px;
                                                   padding-left: 0px;
                                                   padding-right: 0px;
                                                   "
                                                   cellpadding="0"
                                                   cellspacing="0"
                                                   role="presentation"
                                                >
                                                   <!--<![endif]-->
                                                </table>
                                             </td>
                                             </tr>
                                          </table>
                                       </td>
                                       </tr>
                                    </table>
                                 </td>
                                 </tr>
                              </tbody>
                           </table>
                           </td>
                        </tr>
                     </tbody>
                     </table>
                  </td>
               </tr>
               </tbody>
            </table>
            <!-- End -->
         </body>
         </html>
         `,
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

// htmlContent: `<p>Muchas gracias por tu compra con el Id del order:" ${data.order} " desde el equipo de <strong>Bruno Ken</strong></p>`,
export async function sendinblueCompra(data) {
   const email = await tranEmailApi
      .sendTransacEmail({
         subject: "Gracias por tu compra!",
         sender: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         replyTo: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         to: [{ name: data.name, email: data.email }],
         htmlContent: `
         <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
         <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
         <head>
         
           <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta name="x-apple-disable-message-reformatting">
           <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
           <title></title>
           
             <style type="text/css">
               @media only screen and (min-width: 620px) {
           .u-row {
             width: 600px !important;
           }
           .u-row .u-col {
             vertical-align: top;
           }
         
           .u-row .u-col-100 {
             width: 600px !important;
           }
         
         }
         
         @media (max-width: 620px) {
           .u-row-container {
             max-width: 100% !important;
             padding-left: 0px !important;
             padding-right: 0px !important;
           }
           .u-row .u-col {
             min-width: 320px !important;
             max-width: 100% !important;
             display: block !important;
           }
           .u-row {
             width: 100% !important;
           }
           .u-col {
             width: 100% !important;
           }
           .u-col > div {
             margin: 0 auto;
           }
         }
         body {
           margin: 0;
           padding: 0;
         }
         
         table,
         tr,
         td {
           vertical-align: top;
           border-collapse: collapse;
         }
         
         .ie-container table,
         .mso-container table {
           table-layout: fixed;
         }
         
         * {
           line-height: inherit;
         }
         
         a[x-apple-data-detectors='true'] {
           color: inherit !important;
           text-decoration: none !important;
         }
         
         table, td { color: #000000; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 100% !important; } #u_content_heading_1 .v-font-size { font-size: 32px !important; } #u_content_heading_3 .v-font-size { font-size: 32px !important; } #u_content_heading_4 .v-container-padding-padding { padding: 38px 10px 0px !important; } }
             </style>
           
           
         
         <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
         
         </head>
         
         <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
           <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
           <tbody>
           <tr style="vertical-align: top">
             <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
             <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
             
         
         <div class="u-row-container" style="padding: 0px;background-color: transparent">
           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
             <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
               <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
               
         <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f5f5f6;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
         <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
           <div style="background-color: #f5f5f6;height: 100%;width: 100% !important;">
           <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
           
         <table id="u_content_image_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 10px;font-family:'Open Sans',sans-serif;" align="left">
                 
         <table width="100%" cellpadding="0" cellspacing="0" border="0">
           <tr>
             <td style="padding-right: 0px;padding-left: 0px;" align="center">
               
               <img align="center" border="0" src=${img} alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 80%;max-width: 464px;" width="464" class="v-src-width v-src-max-width"/>
               
             </td>
           </tr>
         </table>
         
               </td>
             </tr>
           </tbody>
         </table>
         
         <table id="u_content_heading_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 0px;font-family:'Open Sans',sans-serif;" align="left">
                 
           <h1 class="v-font-size" style="margin: 0px; color: #f85432; line-height: 120%; text-align: center; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 50px; font-weight: 400;"><div><strong>Gracias por tu compra!</strong></div></h1>
         
               </td>
             </tr>
           </tbody>
         </table>
         
           <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
           </div>
         </div>
         <!--[if (mso)|(IE)]></td><![endif]-->
               <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
             </div>
           </div>
         </div>
         
         
         
         <div class="u-row-container" style="padding: 0px;background-image: url('images/image-1.png');background-repeat: no-repeat;background-position: center top;background-color: transparent">
           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
             <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
               <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-image: url(img);background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
               
         <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
         <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
           <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
           <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
           
         <table id="u_content_heading_3" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 0px;font-family:'Open Sans',sans-serif;" align="left">
                 
           <h1 class="v-font-size" style="margin: 0px; color: #f85432; line-height: 120%; text-align: center; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 35px; font-weight: 400;"><strong>50% De descuento en tu próxima compra</strong></h1>
         
               </td>
             </tr>
           </tbody>
         </table>
         
         <table id="u_content_heading_4" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:33px 10px 0px;font-family:'Open Sans',sans-serif;" align="left">
                            <h1 class="v-font-size" style="margin: 0px; color: #000000; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 22px; font-weight: 400;">Este es tu orden de compra ${data.order}</h1>

         
               </td>
             </tr>
           </tbody>
         </table>
         
           <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
           </div>
         </div>
         <!--[if (mso)|(IE)]></td><![endif]-->
               <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
             </div>
           </div>
         </div>
         
         
             <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
             </td>
           </tr>
           </tbody>
           </table>
           <!--[if mso]></div><![endif]-->
           <!--[if IE]></div><![endif]-->
         </body>
         
         </html>
                           `,
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
