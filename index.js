const express = require('express') // nap thu vien express
const app = express() // express la 1 function
const port = 3000 
// route
// khi di vao cai route nay se return res.send() ra view cho nguoi dung
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})