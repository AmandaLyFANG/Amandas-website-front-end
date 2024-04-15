import React, { useState, useEffect } from 'react';
import Image1 from '@/assets/img/blog/1.png';
// import Image2 from '@/assets/img/blog/2.png';
// import Image3 from '@/assets/img/blog/3.png';
// import Image4 from '@/assets/img/blog/4.png';
// import Image5 from '@/assets/img/blog/5.png';
// import Image6 from '@/assets/img/blog/6.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Project = () => {
    const fetchData = async (tagId = null) => {
        let endpoint = `/v1/blog/articles?isProject=true`;
        if (tagId) {
            endpoint = `/v1/blog/article/${tagId}?isProject=true`; // Adjusted endpoint for filtering
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
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };


    const fetchTag = async () => {
        try {
            const response = await fetch(`/v1/blog/tags?isProject=true`, {
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
    // const [imagePaths] = useState([Image1, Image2, Image3, Image4, Image5, Image6]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null); // null when 'All' is selected, tagId otherwise


    useEffect(() => {
        fetchData(selectedTag);
    }, [selectedTag]); // Add selectedTag as a dependency


    useEffect(() => {
        fetchTag();
    }, []);

    return (
        <div>
            <div className="web_capacity pt-110 dark_bg">
                <div className="container">
                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-xl-9 col-12">
                            <div className="common_heading text-center">
                                <h2 className="h1 white mt-5 fw-6">Take a look at my latest projects
                                    and see how I can help bring your
                                    vision to life.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="contact_content contact_content2">
                                <div className="arrow_icon text-center mb-5">
                                    <span>⬇</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div classNameName="justify-content-center">
                            <div className="row text-center mb-5">
                                <div className="flex justify-center gap-5 font-semibold text-purple-color text-[17px]">
                                    <Button type="button" className="active" onClick={() => {
                                            setSelectedTag(null); // Set selected tag
                                            fetchData(); // Fetch articles for the selected tag
                                        }}>All</Button>
                                    {tags.map(tag => (
                                        // <Button type="button" data-filter={`.cat${tag.tagId}`} key={tag.tagId} onClick={() => {
                                        //     setSelectedTag(tag.tagId); // Set selected tag
                                        //     fetchData(tag.tagId); // Fetch articles for the selected tag
                                        // }}>{tag.tagName}</Button>
                                       <Button variant="text" key={tag.tagId} onClick={() => {
                                            setSelectedTag(tag.tagId); // Set selected tag
                                            fetchData(tag.tagId); // Fetch articles for the selected tag
                                        }}> {tag.tagName}</Button>
                                    ))}
                                    {/*                                     
                                    <button type="button" className="active" onClick={() => {
                                            setSelectedTag(null); // Set selected tag
                                            fetchData(); // Fetch articles for the selected tag
                                        }}>All</button>
                                    {tags.map(tag => (
                                        <button type="button" data-filter={`.cat${tag.tagId}`} key={tag.tagId} onClick={() => {
                                            setSelectedTag(tag.tagId); // Set selected tag
                                            fetchData(tag.tagId); // Fetch articles for the selected tag
                                        }}>{tag.tagName}</button>
                                    ))} */}
                                    {/* <button type="button" data-filter=".cat1">Java</button>
                                    <button type="button" data-filter=".cat2">NLP</button>
                                    <button type="button" data-filter=".cat3">Data</button> */}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center min-h-screen gap-y-4">
                                
                                    {articles.map((article, index) => (
                                        <div className="flex justify-center w-full mb-5">
                                        <div className="w-96 h-auto bg-white rounded overflow-hidden shadow-sm">
                                            <img className="w-full h-48 object-cover" src={Image1} alt="Card image" />
                                            <div className="px-6 py-4">
                                                <div className="text-xl mb-2 text-center">{article.title}</div>
                                                {/* <p className="text-gray-700 text-base">
                                                    {article.keyword}
                                                </p> */}
                                            </div>
                                            <div className="px-6 pt-4 pb-2">
                                            <Button variant="contained" href={`/detail/${article.articleId}`}>
                                                Read More
                                            </Button>
                                            {/* <Link to={`/detail/${article.articleId}`} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-black">Read More</Link> */}
                                                {/* <a href="#" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-black">Read More</a> */}
                                            </div>
                                        </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;