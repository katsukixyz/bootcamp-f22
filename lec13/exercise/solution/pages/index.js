import Head from "next/head";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <h1>{blog.title}</h1>
          </Link>
          <p>{blog.stars}</p>
        </div>
      ))}
    </div>
  );
}
