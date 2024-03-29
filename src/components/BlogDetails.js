import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const deleteHandler = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.blog}</div>
        </article>
      )}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
