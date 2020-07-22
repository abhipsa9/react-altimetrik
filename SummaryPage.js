import React,{Component} from 'react';
import ItemRow from './itemrow';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class SummaryPage extends Component{
  constructor()
  {
    super()
  }
  render(){
    console.log(this.props.data)
    return(
      <React.Fragment>
        <div className="mainsummary">
          <div className="headersummary">
            <div className="backbutton"> <span className="backborder"><Link to="/">Back </Link></span></div>
            <div className="heading">Your Cart Details</div>
            <div className="cartbutton"></div>
          </div>
          <div className="bodysummary">
            {
              this.props.data.length>0?
              <div className="cardbody">
                <div className="RestaurantHeader">
                  <div className="none"></div>
                  <div className="RestaurantName">Name of restaurant:{this.props.data[0].Restname}</div>
                  <div className="clearall" onClick={this.props.clearcart}>clear cart items</div>
                </div>
                {
                  this.props.data.map(item=>{
                    return <ItemRow item={item}></ItemRow>
                  })
                }
              
            </div>:<p>Hey please add items to cart. Either you haven't added anything to cart or you have cleared it out</p>
            }
          </div>
          <Link to="/"><button>Proceed to Checkout</button></Link>
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) =>({
  data:state.data
})
const mapDispatchToProps = dispatch=>{
  return{
        clearcart: () => {
          dispatch({
            type:"clearcart"
          })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SummaryPage);