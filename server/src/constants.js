const Constants = {
  __prod__: /*process.env.NODE_ENV */ false,
  __dbUser__: "claus", //process.env.DB_USER,
  __serverPort__: 5000, //process.env.SERVER_PORT,
  __sessionSecret__: "vrjhkhvwj", //process.env.SESSION_SECRET,
  __sessionName__: "qid",
  __cookieMaxAge__: 157680000,
  __clientURL__: "http://localhost:3000",
  __dbUri__: "mongodb://localhost/DailyDot",
  __passwordRequirements__: new RegExp(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,14}$/
  ),
};

module.exports = Constants;
