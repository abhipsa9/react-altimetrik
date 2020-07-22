import React,{Component} from 'react'

class ItemRow extends Component{
  constructor(props)
  {
    console.log(props)
    super(props)
    this.state={count:props.item.qty}
  }
  itemdecrease=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  itemincrease=()=>{
    this.setState({
      count:this.state.count+1
    })}
  itemremove=()=>{}
  render(){
    return(
      <React.Fragment>
        <div className="ItemRow">
          <div className="itemname">{this.props.item.name}</div>
          <div className="controls"><span onClick={this.itemdecrease}>-</span> {this.state.count} <span onClick={this.itemincrease}>+</span></div>
          <div className="price">Rs {this.props.item.price}</div>
          <div className="deleteitem" onClick={this.itemremove}>Remove</div>
        </div> 
      </React.Fragment>
    )
  }
}

export default ItemRow;