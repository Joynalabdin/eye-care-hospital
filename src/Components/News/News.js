import React, { useState,useEffect} from 'react';
import Blogs from '../Blogs/Blogs';
import "./News.css"

const News = () => {
    const [news, setNews] = useState([])

    useEffect(()=> {
        fetch('./news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
        .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    },[])
    return (
        <div className="mt-11">
            <h1 className="text-primary" id="news" >News & Blogs</h1>
            <h2>Latest News From Our Blog</h2>
            <div className="news-container">
           {
                news.map(blog=> <Blogs  blog={blog}></Blogs>)
            }
        </div>
        </div>
    );
};

export default News;