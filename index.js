const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
//이전에 만든 user 모델을 가져옴
const {User} = require('./models/User')



//bodyParser 옵션
 app.use(bodyParser.urlencoded({extended: true})); //
 app.use(bodyParser.json());


//몽구스 = 몽고디비를 편리하게 이용하게 해주는 툴
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://natty:751212@boilerplate.uvqxrhf.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected....')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! \n 이것도 돼? 돼돼돼돼?')

})

app.post('/register',(req,res)=> {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body); //bodyParser를 이용해서 클라이언트 데이터를 body에 담아 서버로 전송한다.
    user.save((err,doc)=>{
      if(err) return res.json({success: false,err})
      return res.status(200).json({success: true})
    });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('이것도 돼?')
})