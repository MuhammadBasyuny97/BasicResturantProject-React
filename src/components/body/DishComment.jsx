import React from 'react';
import dateFormat, { masks } from "dateformat";
//const now = new Date();


const DishComment= props => {
    const comments = props.comments;
    
  
  return(
    comments.map(comment => {
    return(
        <div>
        <table className="table table-bordered table-success">
            <thead>
                <tr className= "table-secondary">
                <th itemScope="col">id</th>
                <th itemScope="col">comment</th>
                <th itemScope="col">author</th>
                <th itemScope="col">date</th>
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                <tr >
                <th itemScope="row">Key={comment.id}</th>
                <td>{comment.comment}</td>
                <td>{comment.author}</td>
                <td>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                </tr>
            
            </tbody>
        </table>
    </div>
    ) 
    })
   
      
  )
}
export default DishComment;