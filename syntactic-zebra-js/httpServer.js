import express from "express";
var routes = [];
var port;
var expRoute;

class open {
  constructor(port, expRoute, routes) {
    if (port) {
      this.port = port;
    }
    if (expRoute) {
      this.expRoute = expRoute;
    }
    if (routes) {
      this.routes = routes;
    }
    init();
  }
}

function make_get(url, body) {
  routes.push({
    path: url,
    body: body,
  });

  new open(port, expRoute, routes);
}

function init() {
  const app = express();

  if (expRoute) {
    app.get("/", (req, res) => {
      res.send("Super zebra http server opened!");
    });
  }

  routes.forEach((route) => {
    app.get(route.path, (req, res) => {
      res.send(route.body);
    });
  });

  app.listen(port, () => {
    console.log(`Super zebra http server opened on port ${port}`);
  });
}
export { open, make_get };
