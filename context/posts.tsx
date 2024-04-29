// 'use client';
// import { createContext, useEffect, useState } from 'react';
// import { getPosts } from '../actions/utils';

// export const PostsContext = createContext(null);

// export function PostsProvider({ children }) {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const loadPosts = async () => {
//       const response = await getPosts();
//       setPosts(response.data);
//     };
//     loadPosts();
//   }, []);

//   return (
//     <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
//   );
// }
