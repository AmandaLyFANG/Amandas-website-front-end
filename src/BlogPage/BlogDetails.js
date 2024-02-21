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
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>

      {article.tagDTOList.map(tagDTO => (
        <div key={tagDTO.tagId}>
          <h2>tagDTO.tagName</h2>
        </div>
      ))}
      {/* You can render other details of the article here */}
    </div>
  );
};

export default BlogDetails;
