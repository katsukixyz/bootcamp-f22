import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    fetch("/api/blog/" + id)
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, [id]);

  if (!blogData.id) {
    return <div></div>;
  }
  return (
    <div>
      <h1>{blogData.title}</h1>
      <p>{blogData.content}</p>
    </div>
  );
};

export default Blog;
