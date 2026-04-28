const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://muslimbekuz:zDakcqswcg7gWy9A@cluster0.i26ucug.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is runnning successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
