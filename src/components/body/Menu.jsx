import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';

export class Menu extends Component {

    state = {
        dishes: DISHES,
        dishSelected: null
    }

    onDishSelect = (dish) => {
        console.log(dish);
        this.setState({dishSelected: dish})
    }
  render() {

    const menu = this.state.dishes.map(item => {
        return <MenuItem dish = {item} key = {item.id}
                  width = {'30rem'}
                 DishSelect = {() => this.onDishSelect(item)}
                     />
    })

    let dishDetail = null;
    if(this.state.dishSelected != null){
        dishDetail = <DishDetail dish ={this.state.dishSelected}/>
    }
    return (
      <div className='container'>

        <div className='row'>
             <div className='col-6'>
                {menu}
             </div>

             <div className='col-6'>
                {dishDetail}
             </div>

        </div>

      </div>
    )
  }
}

export default Menu