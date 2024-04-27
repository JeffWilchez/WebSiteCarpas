import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'devjeffw@gmail.com',
        pass: 'Wilchez2024*',
    },
});

// transporter.verify(function (error, success) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("Servidor listo para enviar mensajes")
//     };
// });

// Define el tipo de objeto para los datos del formulario
/**
 * @typedef {Object} FormData
 * @property {string} nombre - El nombre del remitente
 * @property {string} telefono - El número de teléfono del remitente
 * @property {string} correo - La dirección de correo del remitente
 * @property {string} mensaje - El mensaje del remitente
 */

/**
 * Función para enviar el correo electrónico
 * @param {FormData} data - Los datos del formulario
 * @returns {Promise<any>} Una promesa que resuelve con la información del envío del correo
 */

async function sendEmail(data) {
    try {
        const mailOptions = {
            from: 'devjeffw@gmail.com',
            to: 'wilches755@gmail.com',
            subjet: 'Prueba',
            html: `
            <h1>Hola prueba</h1>
            <p><strong>Nombre:</strong>${data.nombre}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions)
        console.log('Correo enviado')
        return info
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
}

export default sendEmail