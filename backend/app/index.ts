import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import { v4 as uuidv4 } from 'uuid';

import dotenv from 'dotenv'
import AWS from 'aws-sdk'

dotenv.config();

AWS.config.update({
  region: "us-west-2",
  // @ts-ignore
  endpoint: "http://localhost:4002"
})



const docClient = new AWS.DynamoDB.DocumentClient();

const app = express()

const comments: Array<{id: string, nickname: string, comment: string, parentId?: string | null}> = [{
  id: uuidv4(),
  nickname: "user1",
  comment: "Hello SAY",
  parentId: null
},{
  id: uuidv4(),
  nickname: "user2",
  comment: "Hello SAY 2",
  parentId: null
},{
  id: uuidv4(),
  nickname: "user3",
  comment: "Hello SAY 3",
  parentId: null
}]

comments.push({
  id: uuidv4(),
  nickname: "user4",
  comment: "Hello SAY 4",
  parentId: comments[0].id
})


app.set('port', 4001)

app.use(morgan('dev'))
app.use(session({
  secret: 'SECRETKEY',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  genid: function(req) {
    return uuidv4() // use UUIDs for session IDs
  },
}))

app.use(express.json());

app.get('/comments', (req, res) => {
  res.send(comments)
  res.end()
})

app.post('/comment', (req, res) => {
  const {nickname, comment} = req.body;
  comments.push({id: uuidv4(), nickname, comment})
  console.log(req.body)
  res.send(comments)
  res.end()
})

app.post('/comment/:parentId', (req, res) => {
  const parentId = req.params.parentId
  const {nickname, comment} = req.body
  comments.push({id: uuidv4(), nickname, comment, parentId})
  res.send(comments)
  res.end()
})

app.put('/comment/:id', (req, res) => {
  const id = req.params.id
  const {nickname, comment} = req.body

  res.send()
  res.end()
})

app.listen(app.get('port'), () => {
  console.log('listening... => ' + app.get('port'))
})