import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;
  const element = posts.map((post, index) => {
    return (
      <ul key={post.id} className="ui segment">
        <li>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </li>
      </ul>
    );
  });
  return <div>{element}</div>;
}

export default PostList;
