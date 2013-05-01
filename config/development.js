var argv = require('optimist').argv;
var port = Number(argv.p || process.env.PORT || 3000);
var host = argv.l || process.env.IP || 'localhost';
var config = [
  {
    packagePath: './pague.db',
    mongoConnection: 'mongodb://localhost:27017/pague-development'
  },{
    packagePath: './pague.express',
    session: {
      secret: "abcd-1234567890",
      key: 'connect.sid'
    }
  },{
    packagePath: './pague.mailer',
    service: "Gmail",
    auth: {
      user: "gmail.user@gmail.com",
      pass: "userpass"
    }
  },
  './pague.user',
  './pague.alert',
  {
    packagePath: './pague.app',
    port: port,
    host: host
  }
];

module.exports = config;