import React, { useState, useEffect } from 'react';  
import { Link } from 'react-router-dom';  

const Blog = () => {  

  const fetchData = async (page, size) => {  
    try {  
      const response = await fetch(`/v1/blog/articles?page=${page}&size=${size}`, {  
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
      setPageSize(data.size); 
      setCurrentPage(data.number);
      
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