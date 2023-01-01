
import { v4 as uuidv4 } from 'uuid';


const COMMENTS: Array<{id: string, nickname: string, comment: string, parentId?: string | null}> = [{
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

COMMENTS.push({
  id: uuidv4(),
  nickname: "user4",
  comment: "Hello SAY 4",
  parentId: COMMENTS[0].id
})



export {COMMENTS}