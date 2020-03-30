"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDB = makeDB;
exports.default = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

var _messageDB = _interopRequireDefault(require("./messageDB"));

var _GiftedDate = _interopRequireDefault(require("../../Gifted-Date/Gifted-Date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const url = process && process.env && process.env.DBURL || "mongodb://sunkanmi:Ayodeji00@ds157621.mlab.com:57621/message";
const name = process && process.env && process.env.DBNAME || "message";
const MongoClient = _mongodb.default.MongoClient;
const client = new MongoClient(url, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function makeDB() {
  if (!client.isConnected()) {
    await client.connect();
  }

  return client.db(name);
}

const messageDB = (0, _messageDB.default)({
  makeDB,
  date_Module: _GiftedDate.default
});
var _default = messageDB;
exports.default = _default;