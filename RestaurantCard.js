import React,{Component} from 'react';
import ItemCard from './ItemCard'

class RestaurantCard extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="Restcard">
        <div className="Restname">
          <div className="subname">{this.props.itemsinrest.Restname}</div>
          <div className="subrating">Rating: {this.props.itemsinrest.rating}</div>
        </div>
        <div className="RestItem">
          
          {
            this.props.itemsinrest.fooditems.map(itemdata =>{
              return <ItemCard itemdetail={itemdata}></ItemCard>
            })
          }
        </div>
      </div>
    );
  }
}

export default RestaurantCard;