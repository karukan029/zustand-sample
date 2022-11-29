import { useState, useEffect } from "react"
import axios from "axios"

import Posts, { Post } from "./components/Posts"

const fetchPosts = (): Promise<Post[]> => axios.get('https://jsonplaceholder.typicode.com/users/1/posts').then(res => res.data)

const Vanila = () => {
const [posts, setPosts] = useState<Post[]>([])

useEffect(
fetchPosts();
, [])

  return (
    <div>Vanila</div>
  )
}

export default Vanila