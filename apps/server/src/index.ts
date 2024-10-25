/* Imports ////////////////////////////////////////////////////////////////////////////////////////////////////////// */

import cors from "cors";
import express from "express";
import jsonGraphqlExpress from "json-graphql-server/node";

import db from "./db.js";

/* Server /////////////////////////////////////////////////////////////////////////////////////////////////////////// */

const app = express();

app.use(cors());

app.use("/graphql", jsonGraphqlExpress(db));

app.listen(3000);
