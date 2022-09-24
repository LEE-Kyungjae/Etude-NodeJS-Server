//입장시 console.log찍힘
const http = require('http'); // 서버를 만드는 모듈 불러옴
http.createServer((request, response) => { // 서버 만드는 메소드
  console.log('server start!');
}).listen(8080);
