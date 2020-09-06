import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';


const Home = (props) => {
    const {posts,setPosts} = props;
    
    return (
        <div>
            {
                posts.map(post=><Posts post={post}></Posts>)
            }
        </div>
    );
};

export default Home;