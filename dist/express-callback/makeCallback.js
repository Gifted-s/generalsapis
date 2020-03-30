"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeCallback;

function makeCallback(controller) {
  return (req, res, next) => {
    const httpRequest = {
      params: req.params,
      body: req.body
    };
    controller(httpRequest).then(httpResponse => {
      if (httpResponse) {
        res.set(httpResponse.headers);
      }

      res.status(httpResponse.status).send(httpResponse.body);
    }).catch(httpError => {
      res.status(500).send('An unnown error occurd');
    });
  };
}