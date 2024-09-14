// import { useContext, useRef } from "react";
// import { PostList } from "../store/post-list-store";

import { Form, redirect } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  // const titleElement = useRef();
  // const bodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();
  // const useridElement = useRef();
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const id = Date.now();
  //   const title = titleElement.current.value;
  //   const user_id = useridElement.current.value;
  //   const about = bodyElement.current.value;
  //   const reactions = reactionsElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");
  //   titleElement.current.value = "";
  //   useridElement.current.value = "";
  //   bodyElement.current.value = "";
  //   reactionsElement.current.value = "";
  //   tagsElement.current.value = "";

  return (
    <div class="bd-example m-0 border-0">
      <Form method="POST" className="create-post">
        <div class="mb-3">
          <label for="userId" class="form-label">
            User ID:
          </label>
          <input
            type="text"
            name="userId"
            placeholder="Enter the User ID"
            class="form-control"
            id="userId"
          />
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Give the title for your Post"
            class="form-control"
            id="title"
          />
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">
            Post Description
          </label>
          <textarea
            type="text"
            name="body"
            rows={4}
            placeholder="Tell me more aboout it.."
            class="form-control"
            id="body"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="reactions" class="form-label">
            Reactions
          </label>
          <input
            type="text"
            name="reactions"
            placeholder="Enter the no of reactions"
            class="form-control"
            id="reactions"
          />
        </div>
        <div class="mb-3">
          <label for="tags" class="form-label">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            placeholder="Mention the hashtags"
            class="form-control"
            id="tags"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export async function createAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      // addPost(posts);
    });
  return redirect("/");
  // navigate("/");
}

export default CreatePost;
