import React from 'react'



const MenuItem= props => {
  const {id,name,image,category,label,price,featured,description} = props.dish;
  return(
    <div>
      <div className="card" style={{width: props.width}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title" style={{cursor:'Pointer'}} onClick={props.DishSelect}>{name}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
        <p style={{color:'green'}}><b>Price: {price}$ </b></p>
        <p ><b>Label: {label} </b></p>
       </div>
    </div>

  )
}
export default MenuItem;