import data from "../../../mocks/data/data.json";

export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = data.find((comment) => comment.id === parseInt(commentId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = data.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const index = data.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    data.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}
