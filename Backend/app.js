//const express = require("express");
//const cors = require("cors");
const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const router = require("./router.js");
//const app = express();
const app = new Koa();
const port = 3000;

//try express

app.use(cors());
//app.use(express.static("images"));
app.use(serve('./images'));
app.use(router.routes());

app.listen(process.env.PORT || port);
