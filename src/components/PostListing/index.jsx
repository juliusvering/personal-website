import React from "react";
import PostPreview from "../PostPreview";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        excerpt: postEdge.node.excerpt
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--8 mobile-fix">
          {postList.map(post => (
            <PostPreview key={post.title} postInfo={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostListing;
