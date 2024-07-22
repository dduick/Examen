// Implements jwt funcionality
import jwt from 'jsonwebtoken'

// Obtiente la clave secreta JWT desde las variables de entorno
const KEY = process.env.JWT_SECRET_KEY

// Función para firmar (generar) un token JWT
export const jwtSign = (payload) => jwt.sign(payload,KEY)

// Función para verificar (validar) un token JWT
export const jwtVerify = (token) => jwt.verify(token,KEY)