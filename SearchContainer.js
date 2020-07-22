import React,{Component} from 'react'

class SearchContainer extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <React.Fragment>
        <div className="SearchBar">
          <input type="text" className="search" placeholder="Search your item"/>
          <button style={{marginLeft:"10px"}}>Search</button>
        </div>
      </React.Fragment>
    )
  }
}

export default SearchContainer