import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  // addPosts: () => {},
  // fetching: false,
  deletePost: () => {},
});
const PostReducer = (currPostList, action) => {
  let newPosts = currPostList;
  if (action.type == "DELETE_POST") {
    newPosts = currPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type == "ADD_POST") {
    newPosts = [...currPostList, action.payload];
  } else if (action.type == "ADD_INITIAL_POST") {
    newPosts = action.payload.posts;
  }
  return newPosts;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostReducer, []);
  const addPost = (posts) => {
    console.log(posts);
    // console.log("post recieved by the server");
    dispatchPostList({
      type: "ADD_POST",
      payload: posts,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  // const [fetching, setFetching] = useState(false);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
// const DEFAULT_ITEMS = [
//   {
//     id: "1",
//     title: "Going to Hyderabad",
//     about:
//       "Finally we are going to a concert and rock the presence and we are delighted to go there and have tons tons and fun",
//     reactions: 69,
//     user_id: "user-09",
//     tags: ["hyderabad", "concert", "enjoy"],
//   },
//   {
//     id: "2",
//     title: "She said yes",
//     about:
//       "This will be the eternal moment for me.Now my arms can hold you instead of my prayers",
//     reactions: 143,
//     user_id: "user-143",
//     tags: ["love", "her", "life"],
//   },
// ];
export default PostListProvider;
