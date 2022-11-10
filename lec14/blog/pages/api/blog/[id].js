import { blogs } from "../../../utils/consts";

export default function handler(req, res) {
  const { id } = req.query;

  const blog = blogs.find((e) => e.id === parseInt(id));
  res.status(200).json(blog);
}
