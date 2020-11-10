import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishIcon from '@material-ui/icons/Publish';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const Post = forwardRef(( { 
    displayName, 
    username, 
    verified, 
    text, 
    image, 
    avatar }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                             <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{username}
                            </span>
                        </h3>
                        <MoreHorizOutlinedIcon className="post__headerTextOptions" />
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <div className="post__bodyImage">
                    {/* <img src={image} alt="Some error in loading"/> */}
                </div>
                <div className="post__footer">
                    <div className="post__footerComments">
                        <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                    </div>
                    <div className="post__footerRetweet">
                        <RepeatOutlinedIcon fontSize="small"/>
                    </div>
                    <div className="post__footerLike">
                        <FavoriteBorderOutlinedIcon fontSize="small"/>
                    </div>
                    <div className="post__footerPushTweet">
                        <PublishIcon fontSize="small"/>   
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Post;
