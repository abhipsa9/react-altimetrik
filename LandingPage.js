import React,{Component} from 'react'
import SearchContainer from './SearchContainer'
import {Link} from 'react-router-dom';
import RestaurantCard from './RestaurantCard'
import ItemCard from './ItemCard'
import {connect} from 'react-redux'

class LandingPage extends Component{

  constructor()
  {
    super();
    this.state={
      selecteddata:{restaurantselected:"",items:[]},
      
    }
  }
  render(){
    console.log(this.props.data)
    return(
      <React.Fragment>
        <div className="mainsummary">
          <div className="headersummary">
            <div className="backbutton"></div>
            <div className="heading">Welcome Foodies</div>
            <div className="cartbutton"><Link to="/cart">Cart Items </Link></div>
          </div>
          <div className="bodysummary">
            <SearchContainer></SearchContainer>
            <div className="fooditems">
              {
                this.props.data.Restaurants.map(item=>{
                  return <RestaurantCard itemsinrest={item}></RestaurantCard>
                })
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state =>({
  data:state
})
export default connect(mapStateToProps,null)(LandingPage);