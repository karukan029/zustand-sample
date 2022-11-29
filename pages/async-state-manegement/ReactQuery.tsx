import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import Posts, { Post } from "./components/Posts"

const fetchPosts = (): Promise<Post[]> => axios.get('https://jsonplaceholder.typicode.com/users/1/posts').then(res => res.data)

// error動作確認用
// const fetchPosts = (): Promise<Post[]> => axios.get('https://jonplaceholder.typicode.com/users/1/posts').then(res => res.data)

const ReactQuery = () => {
  /** 
   * コンポーネントのマウント時に実行される
   * オプションを指定して処理を定義できる
   * https://tanstack.com/query/v4/docs/reference/useQuery
   * よく考えると、SSRだとハイドレーションを経て、ページが再レンダリングされるので、ローディング状態って発生しない？
   */
  const { isLoading, isError, data, error } = useQuery(['posts'], fetchPosts, {
    onSuccess: (data) => console.log("データの取得に成功しました"),
    onError: (error) => console.log("データの取得に失敗しました"),
  })

  // ローディング中に表示
  if (isLoading) {
    return <div>Loading...</div>
  }

  // エラー発生時に表示
  if (isError && error instanceof Error) {
    return (
      <>
        <h2>error!</h2>
        <h3>detail</h3>
        <p>
          error
        </p>
      </>
    )
  }

  // useQueryのdataの型定義の都合上、undefindでないことを確認する必要がある
  return data !== undefined? <Posts posts={data}/> : <div>No data</div>
}

export default ReactQuery