import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Create a Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />

        <label htmlFor="body">Blog Body:</label>
        <textarea
          id="body"
          rows="5"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <label htmlFor="author">Author</label>
        <select
          id="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Mario">Mario</option>
          <option value="Rushan">Rushan</option>
        </select>

        {!isPending && <button>Submit</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
}
