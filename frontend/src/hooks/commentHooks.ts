import { useEffect, useRef, useState } from "react";
import { Comment, createComment, CreateCommentType, getComments } from "../api/comment";

type STATE = 'READY' | 'LOADING' | 'SUCCESS'

function useFetchFunc<T, R>() {

  const stateRef = useRef<STATE>('READY')
  const [result, setResult] = useState<R | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getFetch = (fetchFunc: (params: T) => Promise<R>) => async (params: T) => {
    if (stateRef.current === 'READY') {
      setIsLoading(true)
      const response = await fetchFunc(params)
      setResult(response)
      setIsLoading(false)
    }
  }
  return {isLoading, result, getFetch}
}

export function useCreateFetch() {
  const {isLoading, result, getFetch} = useFetchFunc<CreateCommentType, Comment>()
  
  const fetch = getFetch((comment) => createComment(comment))

  return {isLoading, result, fetch}
}

export function useReadFetch() {
  const {isLoading, result, getFetch} = useFetchFunc<number, Array<Comment>>()
  
  const fetch = getFetch((page) => getComments(page))

  return {isLoading, result, fetch}
}