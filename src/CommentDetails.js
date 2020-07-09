import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const CommentDetails = props => {
    return(
        <div className="comment">
            <a href="#" className="avatar">
                <img alt="avatar"  src={props.authorImage}/> 
            </a>
            <div className="content">
                <a href="#">
                    {props.author}
                </a>
                <div className="metadata">
                    <span>{props.timeAgo}</span>
                </div>
            <div className="text">{props.comment}</div>
            </div>
        </div>
    );
};

export default CommentDetails;