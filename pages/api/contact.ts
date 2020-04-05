import { NowRequest, NowResponse } from "@now/node";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (request: NowRequest, response: NowResponse) => {
  if (request.method !== "POST") {
    return response.status(405).end();
  }

  const { email, message, name, phonenumber } = request.body;
  const from = name && email ? `${name} <${email}>` : `${name || email}`;

  const contents = {
    to: "info@sedsngo.org",
    from: "SEDS Contact Form <info@sedsngo.org>",
    replyTo: email,
    subject: `New message from ${from}`,
    text: message,
    html: `
    <div>
      <h3>Details</h3>

      <table>
        <tr>
          <td>Name</td>
          <td>${name}</td>
        </tr>

        <tr>
          <td>Email</td>
          <td>${email}</td>
        </tr>

        ${
          phonenumber &&
          `<tr>
          <td>Phonenumber</td>
          <td>${phonenumber}</td>
        </tr>`
        }
      </table>
    
      <h3>Message</h3>

      <p>${message}</p>
    </div>
  `,
  };

  try {
    await sendgrid.send(contents);

    return response.status(200).end();
  } catch (err) {
    return response.status(500).end();
  }
};
