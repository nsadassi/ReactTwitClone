import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__searchbox">
                {/* Change icon color on focus too */}
                <SearchIcon className="widgets__searchboxIcon"/>
                <input placeholder="Search Twitter" className="widgets__searchboxInput" type="text"></input>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1325388594987626501"} />

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="elonmusk"
                    options={{height:400}}
                />
            </div>
        </div>
    )
}

export default Widgets;
