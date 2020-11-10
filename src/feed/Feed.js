import React, { useState, useEffect } from 'react';
import './feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
        
    }, []);


    return (
        <div className="feed">
            {/* header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* tweet */}
            <TweetBox />

            {/* feed */}
            <FlipMove>
                {posts.map(post => (
                    <Post 
                        key={post.text} // Not a good Key, change it to doc ID later                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed;
