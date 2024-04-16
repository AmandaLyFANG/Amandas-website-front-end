import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import "./index.less"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Image1 from "@/assets/img/blog/1.png"
import Image2 from "@/assets/img/blog/2.png"
import Image3 from "@/assets/img/blog/3.png"
import Image4 from "@/assets/img/blog/4.png"
import Image5 from "@/assets/img/blog/5.png"
import Image6 from "@/assets/img/blog/6.png"

const json = {
  content: [
    {
      createTime: "2024-01-29T16:44:59.987096",
      lastUpdateTime: "2024-01-29T16:44:59.987096",
      isDelete: false,
      articleId: 1,
      title: "First Article",
      content: "First Article",
      keyword: "First Article",
      isOriginal: true,
      tagDTOList: null
    },
    {
      createTime: "2024-01-29T16:44:59.987096",
      lastUpdateTime: "2024-01-29T16:44:59.987096",
      isDelete: false,
      articleId: 2,
      title: "Second Article",
      content: "Second Article",
      keyword: "Second Article",
      isOriginal: true,
      tagDTOList: null
    },
    {
      createTime: "2024-01-29T16:44:59.987096",
      lastUpdateTime: "2024-01-29T16:44:59.987096",
      isDelete: false,
      articleId: 3,
      title: "Third Article",
      content: "Third Article",
      keyword: "Third Article",
      isOriginal: true,
      tagDTOList: null
    },
    {
      createTime: "2024-03-17T16:22:19.732783",
      lastUpdateTime: "2024-03-17T16:22:19.732783",
      isDelete: false,
      articleId: 11,
      title:
        "Natural Language Processing Assignment: Logical Deduction in LLMs",
      content:
        "University Name, Department of Computer Science\nSeptember 2023\n\nOverview: Undertook a comprehensive analysis to investigate the logical deduction capabilities of advanced Language Learning Models (LLMs) such as T5 and GPT-3. The project centered on evaluating these models' performance on complex reasoning tasks using the LogiQA and Knights and Knaves puzzles datasets.\n\nTechnologies & Skills:\n\nTechnologies/Tools: Python, TensorFlow, PyTorch, T5, GPT-3\nSkills: Data Analysis, Logical Deduction, Model Evaluation, Prompt Engineering\nAchievements:\n\nSuccessfully demonstrated the application of prompt engineering techniques to enhance the logical reasoning abilities of LLMs, achieving significant improvements in accuracy and F1 score metrics.\nDeveloped a nuanced understanding of the strengths and limitations of current LLMs in NLP, providing insights into areas for future enhancements.\nImpact: This project showcased the potential for advanced prompting strategies to augment LLMs' reasoning skills, contributing to the broader NLP community's efforts towards models that more closely mimic human-like reasoning and interpretation. The findings from this analysis are expected to inform future research directions and practical applications in AI-driven reasoning systems.\n",
      keyword: "NLP",
      isOriginal: true,
      tagDTOList: null
    },
    {
      createTime: "2024-02-03T10:50:04.173",
      lastUpdateTime: "2024-02-03T10:50:04.173",
      isDelete: false,
      articleId: 4,
      title: "Forth Article",
      content: "Forth Article",
      keyword: "Forth Article",
      isOriginal: true,
      tagDTOList: null
    },
    {
      createTime: "2024-03-04T04:41:28.493211",
      lastUpdateTime: "2024-03-04T04:41:28.493211",
      isDelete: false,
      articleId: 5,
      title: "Fifth Article",
      content: "Fifth Article",
      keyword: "Fifth Article",
      isOriginal: true,
      tagDTOList: null
    }
  ],
  pageable: {
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 6,
    paged: true,
    unpaged: false
  },
  last: false,
  totalPages: 3,
  totalElements: 13,
  size: 6,
  number: 0,
  sort: {
    empty: true,
    sorted: false,
    unsorted: true
  },
  first: true,
  numberOfElements: 6,
  empty: false
}

const Blog = () => {
  const history = useNavigate()

  const fetchData = async (page, size, tagId = null) => {
    setArticles(json.content)
    let endpoint = `/v1/blog/articles?page=${page}&size=${size}&isProject=false`
    if (tagId) {
      endpoint = `/v1/blog/article/${tagId}?page=${page}&size=${size}&isProject=false` // Adjusted endpoint for filtering
    }

    try {
      const response = await fetch(endpoint, {
        method: "GET"
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()

      setArticles(data.content)
      setPageSize(data.size)
      setCurrentPage(data.number)
      setTotalPages(data.totalPages - 1)
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error)
    }
  }

  const fetchTag = async () => {
    try {
      const response = await fetch(`/v1/blog/tags?isProject=false`, {
        method: "GET"
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()

      setTags(data)
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error)
    }
  }

  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState(6)
  const [imagePaths] = useState([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6
  ])
  const [totalPages, setTotalPages] = useState(1)
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState(null) // null when 'All' is selected, tagId otherwise

  useEffect(() => {
    fetchData(currentPage, pageSize, selectedTag)
  }, [currentPage, pageSize, selectedTag]) // Add selectedTag as a dependency

  useEffect(() => {
    fetchTag()
  }, [])

  const goToPage = (page) => {
    setCurrentPage(page)
  }

  const hasPreviousPage = currentPage > 0
  const hasNextPage = articles.length === pageSize
  const pageToDetails = (id) => {
    history(`/detail/${id}`)
  }

  return (
    <div className="main-container" style={{ backgroundColor: "white" }}>
      <Container>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row className="justify-content-between">
            <div className="row mb-5">
              <div className="col-xl-8 col-lg-8 col-12 mb-5 mb-xxl-0 mb-xl-0 mb-lg-0">
                <div className=" portfolio_button2">
                  <button
                    type="button"
                    className="active"
                    data-filter="*"
                    onClick={() => {
                      setSelectedTag(null) // Reset selected tag
                      fetchData(currentPage, pageSize) // Fetch all articles
                    }}
                  >
                    All
                  </button>

                  {tags?.map((tag) => (
                    <button
                      type="button"
                      data-filter={`.cat${tag.tagId}`}
                      key={tag.tagId}
                      onClick={() => {
                        pageToDetails(tag.tagId)
                        setSelectedTag(tag.tagId) // Set selected tag
                        fetchData(currentPage, pageSize, tag.tagId) // Fetch articles for the selected tag
                      }}
                    >
                      {tag.tagName}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Col xs={10} style={{ marginTop: 32 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {articles?.map((item, index) => (
                    <Grid item xs={12} sm={4} md={4} key={index}>
                      {/* <Card>
                        <Card.Img
                          variant="top"
                          src={imagePaths[index % imagePaths.length]} // Modulo operation to cycle through images if there are more articles than images
                          height={250}
                        />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Link
                            to={`/detail/${item.articleId}`}
                            className="button-link"
                          >
                            {item.title}
                          </Link>
                        </Card.Body>
                      </Card> */}
                      <Card sx={{ maxWidth: 345, marginTop: "24px" }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="240"
                          image={imagePaths[index % imagePaths.length]}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="ellipsis"
                          >
                            <span title={item.title}>{item.title}</span>
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Link
                            to={`/detail/${item.articleId}`}
                            className="button-link ellipsis"
                            title={item.title}
                          >
                            {item.title}
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              {/* <Row>
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
                      <Link
                        to={`/blog-details/${article.articleId}`}
                        className="button-link"
                      >
                        {article.title}
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row> */}
              <div className="pageButtonGroup">
                <button
                  disabled={!hasPreviousPage}
                  onClick={() => goToPage(currentPage - 1)}
                  className="button-link-new"
                >
                  &lt; Previous
                </button>
                {currentPage} of {totalPages}
                <button
                  disabled={!hasNextPage}
                  onClick={() => goToPage(currentPage + 1)}
                  className="button-link-new"
                >
                  Next &gt;
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Blog

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
