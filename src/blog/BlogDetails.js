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
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-xl-8 col-lg-10 col-12">
                        <div class="common_heading text-center">
                            <h2 class="h1 white fw-6 my-4">{article.title}</h2>
                            <p>{article.createTime} - BY ADMIN</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-10 col-12">
                      {article.content}
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-10 col-12">
                        <div class="pt-110">
                            <div class="tag_share bb">
                                <div class="row align-items-center pb-4">
                                    <div class="col-md-6 col-12 mb-4 mb-md-0">
                                        <h6 class="white d-inline-block pe-3">Tags :</h6>
                                        {article.tagDTOList.map(tag => (<p class="d-inline-block">{tag.tagName}</p>) )}
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