import { useState } from "react";

// function index() {

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [comments, setComments] = useState([])
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [comment, setComment] = useState('')
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [task, setTesk] = useState('')

//     const fetchComments = async () => {
//         const response = await fetch('/api/comments')
//         const data = await response.json()
//         setComments(data)
//     }

//     const submitComment = async () => {
//         const response = await fetch('/api/comments', {
//             method: 'POST',
//             body: JSON.stringify({ comment, task }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const data = await response.json()
//         console.log(data)
//     }

//     const deleteComment = async commentId => {
//         const response = await fetch(`/api/comments/${commentId}`, {
//             method: 'DELETE'
//         })
//         const data = await response.json()
//         console.log(data)
//         fetchComments()
//     }
//     return (
//         <>
//             <div>
//                 <input
//                     type='text'
//                     value={comment}
//                     onChange={e => setComment(e.target.value)}
//                 />
//                 <input
//                     type='text'
//                     value={task}
//                     onChange={e => setTesk(e.target.value)}
//                 />
//                 <button onClick={submitComment}>Submit comment</button>
//             </div>
//             <hr />
//             <button onClick={fetchComments}>Load comments</button>
//             {comments.map(comment => {
//                 return (
//                     <div key={comment.id}>
//                         {comment.id}. {comment.text}{comment.task}
//                         <button onClick={() => deleteComment(comment.id)}>Delete</button>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

// export default index

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/pipeline");
    const data = await response.json();
    setData(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/pipeline", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/pipeline/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <h1 className="mx-auto h-12 w-auto">logo</h1> */}
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* <form className="space-y-6" action="#" method="#"> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  requiredvalue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={submitComment}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
            {/* </form> */}

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <button onClick={fetchComments}>Load data</button>
              {data.map((comment) => {
                return (
                  <div
                    key={comment.id}
                    className={"border border-1 border-black"}
                  >
                    useremail
                    <h1>{comment.email}</h1>
                    password
                    <h2>{comment.password}</h2>
                    {/* <button onClick={() => deleteComment(comment.id)}>Delete</button> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
