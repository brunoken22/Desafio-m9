import test from "ava";
import { decode, token } from "lib/jwt";

test("jwt decode/token", (t) => {
   const valor = { id: 123 };
   const newToken = token(valor.id);
   const validarToken: any = decode(newToken);
   delete validarToken.iat;
   t.deepEqual(valor, validarToken);
});
