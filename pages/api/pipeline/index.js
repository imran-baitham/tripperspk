// import { fs } from 'fs';
import data from "../../../mocks/data/data.json"

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data)
  } else if (req.method === 'POST') {
    const email = req.body.email
    const password = req.body.password
    const newComment = {
      id: Date.now(),
      email: email,
      password: password
    }
    data.push(newComment)
    // console.log('data', data);


    // fs.writeFileSync('../../../mocks/data/data.json', JSON.stringify(data, null, 4));

    // res.status(201).json(newComment);
  }
}
