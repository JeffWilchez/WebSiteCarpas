import { transporter } from "$lib/utils/email";
import { json } from "@sveltejs/kit";
import { EMAIL_TO } from "$env/static/private"

export const POST = async ({ request }) => {
    const { nombre, telefono, correo, mensaje } = await request.json()

    let mailOptions = {
        from: "Info interesados",
        to: EMAIL_TO,
        subject: 'Correo de interesado',
        text: `Nuevo interes de ${nombre}`,
        html: `<h1>Nombre del cliente: ${nombre} </h1> \n <h1>Telefono del cliente: ${telefono} </h1> \n <h1>Correo del cliente: ${correo} </h1> \n <h1>Mensaje del cliente: ${mensaje} </h1>`
    };

    try {
        await transporter.sendMail(mailOptions);
        return json({ message: 'Correo enviado con éxito' });
    } catch (error) {
        // console.log(error);
        return json({ message: 'Error al enviar el correo', error }, { status: 500 });
    }
};

