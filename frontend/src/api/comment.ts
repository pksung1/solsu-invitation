import { useQuery } from "react-query";


export interface Comment {
  id: String,
  nickname: String,
  comment: String,
  password: String,
  parentId?: String,
}

export interface FetchResponse {
  isSuccess: boolean;
}

export type CreateCommentType = Omit<Comment, 'id'>


export async function createComment(commnet: CreateCommentType) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/comment`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, cors, *same-origin
    body: JSON.stringify(commnet)
  })

  return await response.json()
}


export async function getComments(page: number = 1): Promise<Array<Comment>> {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/comments/${page}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, cors, *same-origin
  })

  return await response.json()
}


export async function updateComment(id: String, comment: String, password: String): Promise<Comment> {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/comment/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, cors, *same-origin
    body: JSON.stringify({
      comment,
      password
    })
  })

  return await response.json()
}

export async function deleteComment(id: String, password: String): Promise<Comment> {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/comment/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, cors, *same-origin
    body: JSON.stringify({
      password
    })
  })

  return await response.json()
}

