const activateUserTemplate = (token, recipientEmail, recipientName) => {
  return {
    Messages: [
      {
        From: {
          Email: "office@andrewittwer.de",
          Name: "Daily Dot",
        },
        To: [
          {
            Email: recipientEmail,
            Name: recipientName,
          },
        ],
        Subject: "Activate your account and start creating Dots...!",
        TextPart:
          "Follow this link to activate your account: https://www.dailydot.dev/" +
          token,
        HTMLPart:
          "<p>Follow <a href='https://www.dailydot.dev/'" +
          token +
          ">this link</a> to activate your account:</p>",
      },
    ],
  };
};

module.exports = activateUserTemplate;
