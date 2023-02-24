const path = require("path");

const express = require("express");

const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });

const handle = app.getRequestHandler();

const port = process.env.PORT || 3010;

global.app = app;

function main() {
  const server = express();
  /**COMENTARIO*/ 

  server.use("/files", express.static(path.join(__dirname, "../files")));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.use((err, req, res) => {
    if (err) {
      res.json({ err });
    }
  });

  server.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
  });
}

app.prepare().then(main);
