import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

/** components */
import ReactQuery from './ReactQuery'

/**
 * jsonplaceholderを利用して、HTTPリクエストを送信する
 * GETとPOSTを実装して比較する
 * https://jsonplaceholder.typicode.com/
 */

const queryClient = new QueryClient()

const AsyncStateManegement: NextPage = () => {
  return (
    <>
      <h2>バニラ</h2>

      <h2>ReactQuery</h2>
      <QueryClientProvider client={queryClient}>
        <ReactQuery />
      </QueryClientProvider>

      <h2>SWR</h2>

    </>
  )
}

export default AsyncStateManegement