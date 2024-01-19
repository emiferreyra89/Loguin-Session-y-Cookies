const {body} = require('express-validator');

const validationsForm = [
    body('nombre')
    .notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({min:2, max:30}).withMessage('Debe tener entre 2 y 30 caracteres'),
    body('color')
    .notEmpty().withMessage('Debes elegir un color'),
    body('email')
    .notEmpty().withMessage('Debes ingresar una direccion de correo electronico').bail()
    .isEmail().withMessage('Debe ser un formato valido, por ej: nombre@gmail.com'),
    body('edad')
    .notEmpty().withMessage('Debes ingresar tu edad').bail()
    .isInt({ min: 5, max: 99, allow_leading_zeroes: false }).withMessage('Debes ingresar un nro entero, entre el 5 y el 99 sin comas y ceros (por ej, 10,00)')
]

module.exports = validationsForm;