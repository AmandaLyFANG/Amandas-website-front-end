import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Post3 from "../blog-components/Post3";
import "./Blog.css"
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
      // setTotalPages(data.totalPages);
      // setIsLast(data.last);


    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  //generate default pic
  const  getRandomColor=()=> {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	  }

	  const createImageFromInitials = (size, name, color) => {
		if (name == null) return;
		const canvas=document.createElement('canvas')
		const context=canvas.getContext('2d')
		canvas.width=canvas.height=size
	
		context.fillStyle="#ffffff"
		context.fillRect(0,0,size,size)
	
		context.fillStyle=`${color}50`
		context.fillRect(0,0,size,size)
	
		context.fillStyle=color;
		context.textBaseline='middle'
		context.textAlign='center'
		context.font =`${size/10}px Roboto`
		context.fillText(name,(size/2),(size/2))
	
		return canvas.toDataURL()
	};


  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  // const [totalPages, setTotalPages] = useState(1);
  // const [isLast, setIsLast] = useState(true);

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);


  const goToPage = (page) => {
    setCurrentPage(page);
  };


  const hasPreviousPage = currentPage > 0;
  const hasNextPage = articles.length === pageSize;  

  return (
    <div className="main-container" style={{ backgroundColor: "white" }}>
      <Container>
        <Row className="justify-content-between">
          {/* Card on the left with a width of 10% */}
          <Col xs={2} className="left-column">
            <Card>
              <Card.Body>
                <Card.Title>Recent Posts</Card.Title>
                <ul className="list-unstyled">
                  {articles.map(article => (
                    <li><Link to={`/blog-details/${article.articleId}`}>{article.title}</Link> {/* Link to BlogDetails page */}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Elements on the right with fixed-width columns */}
          <Col xs={10}>
            <Row>
              {articles.map(article => (
                <Col xs={4} className="card-col" >
                    <Card>
                      <Card.Img
                        variant="top"
                        src={createImageFromInitials(500, article.title, getRandomColor())
                        }
                        width={20}
                        height={250}
                      />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Link to={`/blog-details/${article.articleId}`} className="button-link">{article.title}</Link> {/* Link to BlogDetails page */}
                      </Card.Body>
                    </Card>
                </Col>
              ))}
              <Col xs={4} className="card-col" >
                <Post3 />
              </Col>
              <Col xs={4} className="card-col" >
                <Post3 />
              </Col>
            </Row>
            <div className='pageButtonGroup'>
              <button disabled={!hasPreviousPage} onClick={() => goToPage(currentPage - 1)} className="button-link-new">&lt; Previous </button>  
              {/* {currentPage} of {totalPages} */} 1 of 1
              <button disabled={!hasNextPage} onClick={() => goToPage(currentPage + 1)} className="button-link-new"> Next &gt;</button> 
            </div>
          </Col>

        </Row>

      </Container>

      
    </div>
  );
};



export default Blog;


// return (
//   <div>
//     {articles.map(article => (
//       <div key={article.articleId}>
//         {/* <h2>
//         <Link to="#" onClick={() => handleArticleClick(article.articleId)}>{article.title}</Link>
//         </h2>
//         {selectedArticleId === article.articleId && <BlogDetails articleId={article.articleId} />} Render BlogDetails only for the selected article
//          */}
//         <h2>
//           <Link to={`/blog-details/${article.articleId}`}>{article.title}</Link> {/* Link to BlogDetails page */}
//         </h2>
//       </div>
//     ))}

//           <button disabled={!hasPreviousPage} onClick={() => goToPage(currentPage - 1)}>Previous Page</button>
//     <button disabled={!hasNextPage} onClick={() => goToPage(currentPage + 1)}>Next Page</button>
//   </div>
// );  


// src={
//   imgSrc.length <= 0
//     ? createImageFromInitials(500, name, getRandomColor())
//     : imgSrc
// }