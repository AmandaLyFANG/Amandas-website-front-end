import React, { useState, useEffect } from 'react';
import Image1 from '../../assets/img/blog/1.png';
import Image2 from '../../assets/img/blog/2.png';
import Image3 from '../../assets/img/blog/3.png';
import Image4 from '../../assets/img/blog/4.png';
import Image5 from '../../assets/img/blog/5.png';
import Image6 from '../../assets/img/blog/6.png';
import { Link } from 'react-router-dom';

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
    const [imagePaths] = useState([Image1, Image2, Image3, Image4, Image5, Image6]);
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
            <div class="web_capacity pt-110 dark_bg">
                <div class="container">
                    <div class="row justify-content-center mt-5 mb-5">
                        <div class="col-xl-9 col-12">
                            <div class="common_heading text-center">
                                <h2 class="h1 white mt-5 fw-6">Take a look at my latest projects
                                    and see how I can help bring your
                                    vision to life.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="contact_content contact_content2">
                                <div class="arrow_icon text-center mb-5">
                                    <span>⬇</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="justify-content-center">
                            <div class="row text-center mb-5">
                                <div class="flex justify-center gap-5 font-semibold text-purple-color text-[17px]">
                                    <button type="button" class="active" onClick={() => {
                                            setSelectedTag(null); // Set selected tag
                                            fetchData(); // Fetch articles for the selected tag
                                        }}>All</button>
                                    {tags.map(tag => (
                                        <button type="button" data-filter={`.cat${tag.tagId}`} key={tag.tagId} onClick={() => {
                                            setSelectedTag(tag.tagId); // Set selected tag
                                            fetchData(tag.tagId); // Fetch articles for the selected tag
                                        }}>{tag.tagName}</button>
                                    ))}
                                    {/* <button type="button" data-filter=".cat1">Java</button>
                                    <button type="button" data-filter=".cat2">NLP</button>
                                    <button type="button" data-filter=".cat3">Data</button> */}
                                </div>
                            </div>
                            <div class="flex flex-col justify-center items-center min-h-screen gap-y-4">
                                
                                    {articles.map((article, index) => (
                                        <div class="flex justify-center w-full mb-5">
                                        <div class="w-96 h-auto bg-white rounded overflow-hidden shadow-sm">
                                            <img class="w-full h-48 object-cover" src={Image1} alt="Card image" />
                                            <div class="px-6 py-4">
                                                <div class="font-bold text-xl mb-2 text-center">{article.title}</div>
                                                {/* <p class="text-gray-700 text-base">
                                                    {article.keyword}
                                                </p> */}
                                            </div>
                                            <div class="px-6 pt-4 pb-2">
                                            <Link to={`/blog-details/${article.articleId}`} class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-black">Read More</Link>
                                                {/* <a href="#" class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-black">Read More</a> */}
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