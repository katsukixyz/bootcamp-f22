import { blogs } from "../../utils/consts";

export default function handler(req, res) {
  res.status(200).json(blogs);
}
