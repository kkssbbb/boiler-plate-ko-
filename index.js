const express = require('express')
const app = express()
const port = 3000

//몽구스 모듈 = 몽고디비를 편리하게 이용하게 해주는 툴
//몽구스 모듈을 가져와서 
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://natty:751212@boilerplate.uvqxrhf.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected....')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! \n 이것도 돼?')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('이것도 돼?')
})