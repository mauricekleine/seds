const bodyParser = require("body-parser");
const express = require("express");
const next = require("next");
const sendgrid = require("@sendgrid/mail");

require("dotenv").config({
  path: ".env"
});

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const app = next({ dev });
const dev = process.env.NODE_ENV !== "production";
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post("/api/contact", (req, res) => {
    const { email, message, name, phonenumber } = req.body;
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

    sendgrid
      .send(contents)
      .then(() => {
        res.send();
      })
      .catch(error => {
        res.status(500).send();
      });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
