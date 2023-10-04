import {firebase} from '../firebase';
export type Data = {
  direccion: string;
  email: string;
  name: string;
  telefono: string;
  favorite: string[];
};
const collection = firebase.collection('users');
export class User {
  ref: FirebaseFirestore.DocumentReference;
  data: Data;
  constructor(id?: string) {
    if (id) {
      this.ref = collection.doc(id);
    }
  }

  async pull() {
    const snap = await this.ref.get();
    this.data = snap.data() as Data;
  }

  async push() {
    this.ref.update(this.data);
  }
  async modData() {
    this.ref.set(this.data);
  }
  static async create(data) {
    const newUserSnap = await collection.add(data);
    const newUser = new User(newUserSnap.id);
    newUser.data = data;
    return newUserSnap;
  }

  async findByEmail(email: string) {
    const cleanEmail = email.trim().toLowerCase();
    return cleanEmail;
  }
}
