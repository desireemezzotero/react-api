import axios from "axios"
import { useState, useEffect} from "react"
import Card from "./Card"

const apiUrl = "http://localhost:3000"



const Main = () =>  {
  const [posts, setPosts] = useState([])

 const fetchBlog = () => {
    axios.get(`${apiUrl}/posts`)
     .then(res => {
      setPosts(res.data)})
  }

  useEffect(() => {
    fetchBlog()
  }, []);

  

  return (
    <main>
     <div className="container">
        <div className="row">
          {posts.map(post => ( 
            <Card 
            key={post.id}
            post={post}/>
          ))}
        </div>{/* row */}
      </div>{/* container */}

     {/*  <div className="container ">
      <div className="card p-4">
        <h2 className="mb-3">Lista Posts</h2>
        {posts.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Immagine</th>
                <th>Titolo</th>
                <th>Descrizione</th>
                <th>Categoria</th>
                <th>Tags</th>
                <th>Disponibile</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post.id}>
                  <td>
                    <img src={post.image} alt={post.title} width="100" />
                  </td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.category}</td>
                  <td>{post.tag.join(', ')}</td>
                  <td>{post.published ? 'Sì' : 'No'}</td>
                  <td>
                    <button onClick={() => handleRemovePost(post.id)} className="btn btn-danger btn-sm" >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        ) : (
          <h3>Non sono presenti post</h3>
        )}

      </div>
     </div> */}
    </main>
  )
}

export default Main