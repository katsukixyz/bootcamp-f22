import Link from "next/link";

export default function Home(props) {
  const { blogs } = props;
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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();
  return {
    props: {
      blogs: data,
    },
  };
}
