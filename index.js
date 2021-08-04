const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors()); // 解决跨域


// app.all('*', (req, res) => {
//   console.log(req);
//   next();
// })
app.get('/', (req, res) => {
  console.log(req, res)
  res.json('helloword')
})

// app.all('*', (req, res) => {
//   console.log(req);
//   next();
// })

// app.post('/login',  (req, res) => {
//   console.log(req)
//   console.log(res)
//   res.json({
//    status: 'success',
//    info: 'api is ok!'
//  }))
// app.post('/login' ,(req, res) => {
//   console.log(req)
//   console.log(res)
//   res.json({
//     status: 'success',
//     info: 'login is ok'
//   })
// })
app.use('/api/login', require('./API/router'))












app.listen(8081, () => {
  console.log('服务启动成功')
})
