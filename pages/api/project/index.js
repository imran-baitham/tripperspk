import projects from "../../../mocks/projects/AddProject.json"

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(projects)
    } else if (req.method === "POST") {
        const comment = req.body.comment
        const newComment = {
            id: Date.now(),
            text: comment
        }
        projects.push(newComment)
        res.status(201).json(newComment)
    }
}