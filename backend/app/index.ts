import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import { v4 as uuidv4 } from 'uuid';

import dotenv from 'dotenv'
import {getComments, createComment,updateComment, deleteComment} from './db/Comment'


const app = express()

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
  const comments = getComments()
  res.send(comments)
  res.end()
})

app.get('/comments/:page', (req, res) => { 
  const page = req.params.page
  const comments = getComments(parseInt(page, 10))
  res.send(comments)
  res.end()
})

app.post('/comment', (req, res) => {
  const {nickname, comment, password} = req.body;

  const result = createComment({
    id: uuidv4(),
    nickname: nickname,
    comment: comment,
    password: password
  })

  res.send(result)
  res.end()
})

app.post('/comment/:parentId', (req, res) => {
  const parentId = req.params.parentId
  const {nickname, comment, password} = req.body;

  const result = createComment({
    id: uuidv4(),
    nickname: nickname,
    comment: comment,
    password: password,
    parentId: parentId
  })
  res.send(result)
  res.end()
})

app.put('/comment/:id', (req, res) => {
  const id = req.params.id
  const {nickname, comment, password} = req.body

  const result = updateComment({
    id,
    password,
    comment,
    nickname,
  })

  res.send(result)
  res.end()
})

app.delete('/comment/:id', (req, res) => {
  const id = req.params.id
  const {password} = req.body
  
  const result = deleteComment(id, password)

  res.send(result)
  res.end()
})

app.listen(app.get('port'), () => {
  console.log('listening... => ' + app.get('port'))
})