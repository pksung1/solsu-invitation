import { useEffect, useRef, useState } from "react"
import { Comment } from "../api/comment"
import { useCreateFetch, useReadFetch } from "../hooks/commentHooks"

function getByte(s: String,b = 0,i = 0,c = 0){
  for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
  return b
}

const CommentSection = () => {

  const [nickname, setNickname] = useState("") 
  const [password, setPassword] = useState("")
  const [comment, setComment] = useState("")
  const [commentList, setCommentList] = useState<Array<Comment>>([])
  const page = useRef<number>(1)


  const {fetch: readFetch, result: comments} = useReadFetch()
  const {fetch: createFetch} = useCreateFetch()

  const onPressCreate = () => {
    if (getByte(comment) > 255) {
      window.alert("255자 이내로 작성해주세요!")
    }
    createFetch({
      nickname,
      password,
      comment
    })
  }

  const onClickDelete =(comment: Comment) => {

  }

  const onClickMore = () => {
    page.current += 1
    readFetch(page.current)
  }
  

  useEffect(() => {
    readFetch(page.current)
  }, [])

  useEffect(() => {
    if (comments){
      setCommentList([...commentList, ...comments])
    }
  }, [
    comments
  ])
  return (
    <div>
      <div className="bg(--color-gray-300) p(12px/21px) vbox">
        <div className="hbox gap(10px) mb(12px)">
          <CommentInput onChange={setNickname} title="이름" value={nickname} type="text"  />
          <CommentInput onChange={setPassword} title="비밀번호" value={password} type="password" />
        </div>
        <textarea className="border(0)" rows={6} onChange={e => setComment(e.target.value)} value={comment} />
        <button onClick={onPressCreate}>등록하기</button>
      </div>
      <div>
        {commentList?.map((mm) => <CommentItem key={mm.id} comment={mm} onClickDelete={onClickDelete} />)} 
      </div>
      <button onClick={onClickMore}>불러오기</button>
    </div>
  )
}

const CommentItem = ({comment, onClickDelete}: {comment: Comment, onClickDelete: (comment: Comment) => void}) => (
  <div className="hbox p(20px/0) border-bottom(1px/solid/#aaa)">
    <div className="flex(1)">
      <div className="mb(8px)">
        <p className="font-family(--font-SpoqaHanSans) font(16px)">{comment.nickname}</p>
        {/* <p>Date</p> */}
      </div>
      <p className="font-family(--font-SpoqaHanSans) font(16px) ">{comment.comment}</p>
    </div>
    <button onClick={() => onClickDelete(comment)} className="">X</button>
  </div>
)

const CommentInput = ({title, value, type, onChange}: {title: string, value: string, type?: string, onChange: (text: string) => void}) => (
  <div className="flex(1) hbox(center) bg(--color-white) border-radius(16px) p(6px/16px)">
    <span className="mr(10px) font(14px) color(--color-gray)">{title}</span>
    <input className="flex(1) w(60px) outline(0) border(0)" type={type ?? "text"} value={value} onChange={(e) => {onChange(e.target.value)}} />
  </div>
)


export default CommentSection