import React, { useState, useEffect } from 'react';  
import { Link } from 'react-router-dom';  

const Blog = () => {  

  const fetchData = async (page, size) => {  
    try {  
      const response = await fetch(`//localhost:8080/v1/blog/articles?page=${page}&size=${size}`, {  
        method: 'GET',  
        // headers: {  
        //   'Accept': 'application/hal+json',  
        // },  
      });  
  
      if (!response.ok) {  
        throw new Error('Network response was not ok');  
      }  
  
      const data = await response.json();  
  
      setArticles(data.content); 
      setPageSize(data.pageable.pageSize); 
      setCurrentPage(data.pageble.pageNumber)
      
    } catch (error) {  
      console.error('There was a problem with the fetch operation:', error);  
    }  
  };  
  
  const [articles, setArticles] = useState([]);  
  const [currentPage, setCurrentPage] = useState(0);  
  const [pageSize, setPageSize] = useState(20);  
  
  useEffect(() => {  
    fetchData(currentPage, pageSize);  
  }, [currentPage, pageSize]);  
  

  
  const goToPage = (page) => {  
    setCurrentPage(page);  
  };  
  

  const hasPreviousPage = currentPage > 0;  
  const hasNextPage = articles.length === pageSize;  
  
  return (  
    <div>  
      {/* {articles.map(article => (  
        <div key={article.id}>  
          <h2>{article.title}</h2>  
          <h2>
            <a href={`/article/${article.articleId}`}>{article.title}</a>
          </h2>
          <p>{article.content}</p>  
        </div>  
      ))}   */}

      {articles.map(article => (
        <div key={article.articleId}>
          {/* <h2>
          <Link to="#" onClick={() => handleArticleClick(article.articleId)}>{article.title}</Link>
          </h2>
          {selectedArticleId === article.articleId && <BlogDetails articleId={article.articleId} />} Render BlogDetails only for the selected article
           */}
          <h2>
            <Link to={`/blog-details/${article.articleId}`}>{article.title}</Link> {/* Link to BlogDetails page */}
          </h2>
        </div>
      ))}

            <button disabled={!hasPreviousPage} onClick={() => goToPage(currentPage - 1)}>Previous Page</button>  
      <button disabled={!hasNextPage} onClick={() => goToPage(currentPage + 1)}>Next Page</button>  
    </div>  
  );  
};  



export default Blog; 
// const Blog = () => {  
//   const [posts, setPosts] = useState([]);  
//   const [postDetail, setPostDetail] = useState(null);  
  
//   // 初始化加载文章列表和详情  
//   useEffect(() => {  
//     (async () => {  
//       const fetchedPosts = await fetchPosts();  
//       setPosts(fetchedPosts);  
//     })();  
//   }, []);  
  
//   // 根据文章ID加载文章详情  
//   useEffect(() => {  
//     const postId = window.location.pathname.split('/').pop(); // 获取URL中的文章ID参数  
//     if (postId) {  
//       (async () => {  
//         const fetchedPost = await fetchPostDetails(postId);  
//         setPostDetail(fetchedPost);  
//       })();  
//     } else {  
//       setPostDetail(null); // 如果URL中没有文章ID，则不加载文章详情  
//     }  
//   }, [posts]); // 当文章列表发生变化时重新加载文章详情，以确保显示最新数据  
  
//   return (  
//     <Router>  
//       <div>  
//         <nav>  
//           <ul>  
//             <li>  
//               <Link to="/">Home</Link>  
//             </li>  
//             <li>  
//               <Link to="/blog">Blog</Link>  
//             </li>  
//           </ul>  
//         </nav>  
//         <Switch>  
//           <Route exact path="/">  
//             <BlogList />  
//           </Route>  
//           <Route path="/blog">  
//             <BlogList />  
//           </Route>  
//           <Route path="/blog/:id">  
//             <BlogDetail post={postDetail} />  
//           </Route>  
//         </Switch>  
//       </div>  
//     </Router>  
//   );  
// };  
// export default Blog;