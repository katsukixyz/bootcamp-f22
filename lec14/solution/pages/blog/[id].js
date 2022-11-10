import React from "react";

const Blog = (props) => {
  const { blogData } = props;

  return (
    <div>
      <h1>{blogData.title}</h1>
      <p>{blogData.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();
  return {
    paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return {
    props: {
      blogData: data,
    },
  };
}

export default Blog;
