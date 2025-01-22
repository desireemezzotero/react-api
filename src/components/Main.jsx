import axios from "axios"
import { useState, useEffect} from "react"

const apiUrl = "http://localhost:3000"



const Main = () =>  {
  const [posts, setPosts] = useState([])

 const fetchBlog = () => {
    axios.get(`${apiUrl}/posts`)
     .then(res => {
      setPosts(res.data)})
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <Main>
     <div className="container">
        <div className="row">
          {posts.map(post => ( 
            <div className="col-4" key={post.id}>
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={post.image} alt="Card image cap" />
                 <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                     <p className="card-text">{post.content}</p>
                  </div>
            </div>
          </div>
          ))}
        </div>{/* row */}
      </div>{/* container */}
    </Main>
  )
}

export default Main