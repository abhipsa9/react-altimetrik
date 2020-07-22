import React, {Component} from 'react';
import {connect} from 'react-redux'

class ItemCard extends Component{
  constructor(){
    super()
  }
  
  render(){
    return(
      <div className="itemcard">
        <div className="imagepart">
          <img src={this.props.itemdetail.imgsrc} alt="food item" className="imagedetails"/>
        </div>
        <div className="namepart">{this.props.itemdetail.name}</div>
        <div className="addtocart" onClick={()=>this.props.addtocart(this.props.itemdetail)}>
        Add to cart</div>
      </div>
    )
  }
}
const mapStateToProps=state=>({
  state:state
})
const mapDispatchToProps = dispatch=>{
  return{
        addtocart: (data) => {
          dispatch({
            type:"add",
            payload:data
          })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemCard);