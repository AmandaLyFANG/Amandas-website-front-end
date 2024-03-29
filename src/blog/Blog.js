import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Post3 from "../blog-components/Post3";
import "./Blog.css"
import Image1 from '../assets/img/blog/1.png';
import Image2 from '../assets/img/blog/2.png';
import Image3 from '../assets/img/blog/3.png';
import Image4 from '../assets/img/blog/4.png';
import Image5 from '../assets/img/blog/5.png';
import Image6 from '../assets/img/blog/6.png';

const Blog = () => {

  const fetchData = async (page, size, tagId = null) => {
    let endpoint = `/v1/blog/articles?page=${page}&size=${size}&isProject=false`;
    if (tagId) {
      endpoint = `/v1/blog/article/${tagId}?page=${page}&size=${size}&isProject=false`; // Adjusted endpoint for filtering
    }

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setArticles(data.content);
      setPageSize(data.size);
      setCurrentPage(data.number);
      setTotalPages(data.totalPages-1);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };


  const fetchTag = async () => {
    try {
      const response = await fetch(`/v1/blog/tags?isProject=false`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setTags(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const [imagePaths] = useState([Image1, Image2, Image3, Image4, Image5, Image6]);
  const [totalPages, setTotalPages] = useState(1);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null); // null when 'All' is selected, tagId otherwise


  useEffect(() => {
    fetchData(currentPage, pageSize, selectedTag);
  }, [currentPage, pageSize, selectedTag]); // Add selectedTag as a dependency
  

  useEffect(() => {
    fetchTag();
  }, []);

  const goToPage = (page) => {
    setCurrentPage(page);
  };


  const hasPreviousPage = currentPage > 0;
  const hasNextPage = articles.length === pageSize;

  return (
    <div className="main-container" style={{ backgroundColor: "white" }}>
      <Container>
        <Row className="justify-content-between">
          <div class="row mb-5">
            <div class="col-xl-8 col-lg-8 col-12 mb-5 mb-xxl-0 mb-xl-0 mb-lg-0">
              <div class=" portfolio_button2">
                <button type="button" className="active" data-filter="*" onClick={() => {
                  setSelectedTag(null); // Reset selected tag
                  fetchData(currentPage, pageSize); // Fetch all articles
                }}>All</button>

                {tags.map(tag => (
                  <button type="button" data-filter={`.cat${tag.tagId}`} key={tag.tagId} onClick={() => {
                    setSelectedTag(tag.tagId); // Set selected tag
                    fetchData(currentPage, pageSize, tag.tagId); // Fetch articles for the selected tag
                  }}>{tag.tagName}</button>
                ))}

              </div>
            </div>
          </div>

          <Col xs={10}>
            <Row>
              {articles.map((article, index) => (
                <Col xs={4} className="card-col" key={article.articleId}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={imagePaths[index % imagePaths.length]} // Modulo operation to cycle through images if there are more articles than images
                      width={20}
                      height={250}
                    />
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Link to={`/blog-details/${article.articleId}`} className="button-link">
                        {article.title}
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              {/* <Col xs={4} className="card-col" >
                <Post3 />
              </Col>
              <Col xs={4} className="card-col" >
                <Post3 />
              </Col> */}
            </Row>
            <div className='pageButtonGroup'>
              <button disabled={!hasPreviousPage} onClick={() => goToPage(currentPage - 1)} className="button-link-new">&lt; Previous </button>
              {currentPage} of {totalPages}
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