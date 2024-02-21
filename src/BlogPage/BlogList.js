// import React, { useState, useEffect } from 'react';  



const BlogList = () => {  
  // const fetchData = async (page, size) => {  
  //   try {  
  //     const response = await fetch(`http://localhost:8080/articles?page=${page}&size=${size}`, {  
  //       method: 'GET',  
  //       headers: {  
  //         'Accept': 'application/hal+json',  
  //       },  
  //     });  
  
  //     if (!response.ok) {  
  //       throw new Error('Network response was not ok');  
  //     }  
  //     console.log('hher')
  //     const data = await response.json();  
  //     console.log(data)
  //     setArticles(data._embedded.articles);  
  //   } catch (error) {  
  //     console.error('There was a problem with the fetch operation:', error);  
  //   }  
  // };  
  // const [articles, setArticles] = useState([]);  
  // const [currentPage, setCurrentPage] = useState(0);  
  // const [pageSize, setPageSize] = useState(20);  
  
  // useEffect(() => {  
  //   fetchData(currentPage, pageSize);  
  // }, [currentPage, pageSize]);  
  

  
  // const goToPage = (page) => {  
  //   setCurrentPage(page);  
  // };  
  
  // const hasPreviousPage = currentPage > 0;  
  // const hasNextPage = articles.length === pageSize;  
  
  // return (  
  //   <div>  
  //     <button disabled={!hasPreviousPage} onClick={() => goToPage(currentPage - 1)}>Previous Page</button>  
  //     <button disabled={!hasNextPage} onClick={() => goToPage(currentPage + 1)}>Next Page</button>  
  //     {articles.map(article => (
  //       <div key={article.articleId}>
  //         <h2>
  //           <Link to={`/article/${article.articleId}`}>{article.title}</Link>
  //         </h2>
  //         <BlogDetails articleId={article.articleId} /> {/* Render BlogDetails component with articleId */}
  //       </div>
  //     ))}
  //   </div>  
  // );  
};  
  
export default BlogList;

// import React, { useState, useEffect } from 'react';  
// import { Link } from 'react-router-dom';  
  

// // Mock后端接口，返回文章列表  
// const fetchPosts = () => {  
//     return new Promise(resolve => {  
//       setTimeout(() => {  
//         resolve([  
//           { id: 1, title: 'Post 1', summary: 'Summary of Post 1', author: 'Author 1', date: '2023-07-01', content: 'Content of Post 1' },  
//           { id: 2, title: 'Post 2', summary: 'Summary of Post 2', author: 'Author 2', date: '2023-07-02', content: 'Content of Post 2' },  
//           // ...其他文章数据  
//         ]);  
//       }, 1000); // 模拟网络延迟  
//     });  
//   };  
    
// // Mock后端接口，返回文章详情  
// const fetchPostDetails = postId => {  
// return new Promise(resolve => {  
//     setTimeout(() => {  
//     resolve({  
//         id: postId,  
//         title: 'Detail of Post ' + postId,  
//         summary: 'Summary of Post ' + postId,  
//         author: 'Author ' + postId,  
//         date: '2023-07-0' + postId,  
//         content: 'Content of Post ' + postId  
//     });  
//     }, 1000); // 模拟网络延迟  
// });  
// };

// // const BlogList = ({ posts }) => {  
// //   return (  
// //     <div>  
// //       <h2>Blog Posts</h2>  
// //       <ul>  
// //         {posts.map((post, index) => (  
// //           <li key={post.id}>  
// //             <Link to={`/blog/${post.id}`}>{post.title}</Link>  
// //           </li>  
// //         ))}  
// //       </ul>  
// //     </div>  
// //   );  
// // };  

// const BlogList = () => {  
//   const [posts, setPosts] = useState([]);  
//   const [postId, setPostId] = useState(null);  
//   const [post, setPost] = useState(null);  
//   const [loading, setLoading] = useState(true);  
//   const [error, setError] = useState(null);  
  
//   useEffect(() => {  
//     fetchPosts().then(response => {  
//       setPosts(response);  
//     });  
//   }, []);  
  
//   const handlePostClick = (postId) => {  
//     setPostId(postId);  
//     fetchPostDetails(postId).then(response => {  
//       if (response.data) {  
//         setPost(response.data);  
//       } else {  
//         setError('Failed to fetch post details');  
//       }  
//       setLoading(false);  
//     });  
//   };  
  
//   return (  
//     <div>  
//       {loading ? (  
//         <div>Loading...</div>  
//       ) : error ? (  
//         <div>Error: {error}</div>  
//       ) : (  
//         <div>  
//           <h2>{post.title}</h2>  
//           <p>{post.summary}</p>  
//           <p>Published by: {post.author}</p>  
//           <p>Published on: {post.date}</p>  
//           <p>{post.content}</p>  
//         </div>  
//       )}  
//       <ul>  
//         {posts.map((post, index) => (  
//           <li key={index}>  
//             <a href="#" onClick={() => handlePostClick(post.id)}>  
//               {post.title}  
//             </a>  
//           </li>  
//         ))}  
//       </ul>  
//     </div>  
//   );  
// };

// // const BlogList = ({ posts }) => {  
// //     return (  
// //       <div>  
// //         <h2>Blog Posts</h2>  
// //         <ul>  
// //           {posts.map((post, index) => (  
// //             <li key={index}>  
// //               <Link to={`/blog/${post.id}`}>{post.title}</Link>  
// //             </li>  
// //           ))}  
// //         </ul>  
// //       </div>  
// //     );  
// //   };
  
// export default BlogList;