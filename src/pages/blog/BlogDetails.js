import React, { useState, useEffect } from 'react';  
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const fetchArticleContent = async () => {
      try {
        const response = await fetch(`/v1/blog/articles/${articleId}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setArticle(data);
      } catch (error) {
        console.error('There was a problem with fetching article content:', error);
      }
    };

    fetchArticleContent();
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-xl-8 col-lg-10 col-12">
                        <div className="common_heading text-center">
                            <h2 className="h1 white fw-6 my-4">{article.title}</h2>
                            <p>{article.createTime} - BY ADMIN</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 col-12">
                      {article.content}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 col-12">
                        <div className="pt-110">
                            <div className="tag_share bb">
                                <div className="row align-items-center pb-4">
                                    <div className="col-md-6 col-12 mb-4 mb-md-0">
                                        <h6 className="white d-inline-block pe-3">Tags :</h6>
                                        {article.tagDTOList.map(tag => (<p className="d-inline-block">{tag.tagName}</p>) )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default BlogDetails;