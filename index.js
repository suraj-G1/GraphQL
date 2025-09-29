import express from "express";
import schema from "./schema.js";
import resolvers from "./resolvers.js";
import { graphqlHTTP } from "express-graphql";
const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

const root = {
  ...resolvers,
  loc: () => console.log("Line Of Control"),
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root,
  })
);

app.listen(8000, () => console.log("Up and running"));
