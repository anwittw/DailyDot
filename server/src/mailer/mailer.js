const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

const sendMail = (filledTemplate) => {
  const Messages = [];
  Messages.push(filledTemplate);

  const request = mailjet
    .post("send", { version: "v3.1" })
    .request(filledTemplate);
  request
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = sendMail;
