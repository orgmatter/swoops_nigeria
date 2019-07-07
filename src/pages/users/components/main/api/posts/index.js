import React from 'react';

export default loadPost = () => {
const id = this.props.match.params.id;
const { posts, actions } = this.props;
if (posts.length == 0) {
actions.fetchOnePost(id);
} else if(posts.length > 0) {
    return posts;
}
}


export const API = {
    posts: this.loadPost(),
    actions: this.actions
};