import React from "react";

import "./style.css";

const PostIt = props => {
  return (
    <div className='post-it'>
      <span className='post-it-date'>{props.date}</span>
      <span className='post-it-title'>{props.title}</span>
      <span className='post-it-content'>{props.content}</span>
    </div>
  );
};

export default PostIt;
