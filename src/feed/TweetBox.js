import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css'
import { Avatar } from '@material-ui/core';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import TodayIcon from '@material-ui/icons/Today';
import firebase from './firebase';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault(); //stops refresh

        db.collection('posts').add({
            displayName : "Neville Longbottom",
            username:"nevilleBot",
            verified:true,
            text:tweetMessage,
            avatar:"https://www.factinate.com/wp-content/uploads/2018/02/Screenshot-from-2020-01-02-13-05-10.jpg",
            image:tweetImage    //"https://data.whicdn.com/images/149913019/original.gif"
        });
        
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1097941831663345664/DStj7DyQ_bigger.png" />
                    <input value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's Happening ?"
                        type="text" 
                        className="tweetBox__inputText">     
                    </input>
                </div>
                {/* Change the different attachment options */}
                <input  value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    placeholder="Optional:Image URL" 
                    type="text" 
                    className="tweetBox__image">
                </input>
                <div className="tweetBox__footer">
                    <div className="tweetBox__attachments">
                        <div className="tweetBox__attachmentsImage">
                            <CropOriginalIcon />
                        </div>
                        <div className="tweetBox__attachmentsGif">
                            <GifIcon />
                        </div>
                        <div className="tweetBox__attachmentsPoll">
                            <PollIcon />
                        </div>
                        <div className="tweetBox__attachmentsEmote">
                            <InsertEmoticonIcon />
                        </div>
                        <div className="tweetBox__attachmentsTimer">
                            <TodayIcon />
                        </div>
                    </div>
                    <div className="tweetBox__tweetButtonDiv">
                        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TweetBox;
