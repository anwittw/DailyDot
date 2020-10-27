const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const {
  __prod__,
  __dbUser__,
  __serverPort__,
  __sessionSecret__,
  __sessionName__,
  __cookieMaxAge__,
  __clientURL__,
  __dbUri__,
} = require("./constants");

const morgan = require("morgan");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const redis = require("redis");
const session = require("express-session");
const connectRedis = require("connect-redis");
const cors = require("cors");

const mongoose = require("./api/database");

const typeDefs = require("./api/graphqlSchema");
const resolvers = require("./api/resolvers/_resolvers");

const User = require("./api/models/User");
const Dot = require("./api/models/Dot");
const Activity = require("./api/models/Activity");

const main = async () => {
  console.log(__dirname);
  console.log(
    "constants",
    __prod__,
    __dbUser__,
    __serverPort__,
    __sessionSecret__,
    __sessionName__,
    __cookieMaxAge__,
    __clientURL__,
    __dbUri__
  );

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    cors({
      origin: __clientURL__,
      credentials: true,
    })
  );

  app.use(
    session({
      name: __sessionName__,
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      cookie: {
        maxAge: __cookieMaxAge__,
        httpOnly: true,
        secure: __prod__, // cookie only works in https
        sameSite: "lax",
      },
      saveUninitialized: false,
      secret: __sessionSecret__,
      resave: false,
    })
  );

  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
      req,
      res,
      models: {
        User,
        Dot,
        Activity,
      },
    }),
  });

  apollo.applyMiddleware({ app });

  app.use(
    morgan("common", {
      stream: fs.createWriteStream(__dirname + "/logs/" + "access.log", {
        flags: "a",
      }),
    })
  );
  app.use(morgan(__prod__ ? "combined" : "dev"));

  app.listen(__serverPort__, () => {
    console.log("Server startd on local port " + __serverPort__);
  });
};

main().catch((err) => {
  console.log(err);
});
