import projects from "../../../mocks/projects/AddProject.json";

export default function handler(req, res) {
  const { projectId } = req.query;

  if (req.method === "GET") {
    const comment = projects.find((c) => c.id === parseInt(projectId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deleteComment = projects.find((c) => c.id === parseInt(projectId));

    const index = projects.findIndex((x) => x.id === parseInt(projectId));
    projects.splice(index, 1);

    res.status(200).json(deleteComment);
  }
}
