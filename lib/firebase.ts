import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_CONNECTION);

if (!admin.apps.length) {
   admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
   });
}
const firebase = admin.firestore();
export { firebase };
