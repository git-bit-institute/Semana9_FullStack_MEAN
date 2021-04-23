// Variable donde importamos el jwt
let jwt = require("jwt-simple");
// Importamos libreria para fechas
let moment = require("moment");
// Clave secreta
let secret = "bit21store";

exports.createToken = function (usuario) {
  let payload = {
    _id: usuario._id,
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    edad: usuario.edad,
    correo: usuario.correo,
    iat: moment().unix(),
    //exp: moment.add(30, "days").unix(),
  };
  return jwt.encode(payload, secret);
};
