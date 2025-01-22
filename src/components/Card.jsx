const Card = (props) => {
  const {image, title, content } = props.post
  return (
      <div className="col-4 mb-5">
       <div className="card">
        <img className="card-img-top img-card" src={image} alt="Card image cap" />
           <div className="card-body">
              <h5 className="card-title text-center"><strong>{title}</strong></h5>
              <p className="card-text pt-2">{content}</p>
              <div className="btn btn-danger">
                <i className="fa-solid fa-trash-can"></i> Elimina
              </div>
           </div>
      </div>
    </div>
  )
}

export default Card