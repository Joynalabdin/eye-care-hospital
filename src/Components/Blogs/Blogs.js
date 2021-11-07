import React from 'react';
import "./Blogs.css"

const Blogs = (props) => {
    const {image, title,Blogs} = props.blog;
    return (
        <div className="blogs">
            <div class="card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{Blogs}</p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;