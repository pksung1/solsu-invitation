const Database = require("better-sqlite3")

const TABLE = "comments"
const PAGE_SIZE = 10

const db = new Database("comment.db", { verbose: console.log })

interface CommentDAO {
  id: String,
  nickname: String,
  comment: String,
  password: String,
  parentId?: String,
}

function getComments(page: number = 1) {
  
  if (!page && page < 1) {
    page = 1
  }

  return db.prepare(`SELECT id, comment, nickname, parentId FROM ${TABLE} orders LIMIT ${PAGE_SIZE} OFFSET ${(page - 1) * PAGE_SIZE}`).all()
}

function createComment(comment: CommentDAO) {
  const createCommentQuery = db.prepare(`INSERT INTO ${TABLE} (id, nickname, comment, password, parentId) VALUES (?, ?, ?, ?, ?)`);
  const queryResult = createCommentQuery.run(comment.id, comment.nickname, comment.comment, comment.password, comment.parentId ?? '')
  return queryResult
}

function updateComment(comment: CommentDAO) {
  const updateCommentQuery = db.prepare(`UPDATE ${TABLE} SET comment=? where id=? and password=?`)
  const queryResult = updateCommentQuery.run( comment.comment, comment.id, comment.password)
  return queryResult
}

function deleteComment(id: String, password: String) {
  const deleteCommentQuery = db.prepare(`DELETE FROM ${TABLE} WHERE id=? and password=?`)
  const queryResult = deleteCommentQuery.run(id, password)
  return queryResult
}


function initComment() {
  const createTableQuery = db.prepare(`CREATE TABLE IF NOT EXISTS ${TABLE} (
    id varchar(255),
    nickname varchar(255),
    comment varchar(255),
    password varchar(255),
    parentId varchar(255)
  )`);


  createTableQuery.run();
}

initComment()
export {getComments, createComment, updateComment, deleteComment}
