import React from 'react'
import MenuItem from './MenuItem';
import DishComment from './DishComment';
import COMMENTS from '../../data/comments';


const DishDetail= props => {
  const dish = props.dish;
  const dishComments = COMMENTS.filter(comment => comment.dishId === dish.id);

  return(
   <div>
    <MenuItem dish={dish} width = {'40rem'}/>
    <hr></hr>
    <DishComment comments = {dishComments} key ={dish.id}/>
   </div>
      
  )
}
export default DishDetail;