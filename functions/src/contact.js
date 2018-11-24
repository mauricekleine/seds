const querystring = require("querystring");
const sendgrid = require("@sendgrid/mail");
require("dotenv").config({
  path: ".env"
});

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log({ event, body: event.body });

  const { email, message, name, phonenumber } = querystring.parse(event.body);
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

        ${phonenumber &&
          `<tr>
          <td>Phonenumber</td>
          <td>${phonenumber}</td>
        </tr>`}
      </table>
    
      <h3>Message</h3>

      <p>${message}</p>
    </div>
  `
  };

  try {
    const result = await sendgrid.send(contents);
    console.log(result);
    return { statusCode: 200 };
  } catch (err) {
    console.log(err);
    return { statusCode: 500 };
  }
};
