const jsonServer = require("json-server");

const resumeServer = jsonServer.create();

const router = jsonServer.router("db.json");

const middleware = jsonServer.defaults();

const PORT = 3000 || process.env.PORT;

resumeServer.use(cors());

resumeServer.use(middleware);

resumeServer.use(router);

resumeServer.listen(PORT, () => {
  console.log(`server started succesfully at port : ${PORT}`);
});
