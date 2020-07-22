import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Indexpage from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialstate = {
  data:[{id: 1, imgsrc: "https://davidrocco.com/wp-content/uploads/2017/03/DSCF2251.jpg", name: "Prawn Curry", price: "10", selected: "false",Restname: "Rest2",qty:1}],
  Restaurants:[
      {
        rating:"4.3",
        Restname: "Rest1",
        fooditems:[{Restname: "Rest1",
          id:1,qty:0,
          imgsrc:"https://davidrocco.com/wp-content/uploads/2017/03/DSCF2251.jpg",name:"Prawn Curry",price:"10",selected:"false"},{id:2,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2okCDOuMrsncS9gmn08mDLEBkxED7XJnjaw&usqp=CAU",name:"Dal Makhani",price:"10",selected:"false"},{id:3,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiVaFmZG_BPW1NTVdsdrVcgss8qddjWqkW6w&usqp=CAU",name:"Masala Dosa",price:"10",selected:"false"},{id:4,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTJItYTnLKnnuw08idF2YgbvsQp2pIuzRmJw&usqp=CAU",name:"Chicken kebab",price:"10",selected:"false"},{id:5,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMmQX8UrCM_oHv0GPyJHNURtbwYNQCxlKjAQ&usqp=CAU",name:"Chole",price:"10",selected:"false"},{id:6,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIkw651a9MPIUO3R2QCZ_XUKKFgiL7hobXlw&usqp=CAU",name:"paneer",price:"10",selected:"false"},{id:7,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSia7utcw6xu5b84tnABLKqKCfEJrve56pyPQ&usqp=CAU",name:"Samosa",price:"10",selected:"false"},{id:8,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvGOTrtdUj1CTfCLdVwOuZ8pYQzUoC8hEeEw&usqp=CAU",name:"paratha",price:"10",selected:"false"},{id:9,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv-5kCQ-eANWjUFVTRvaVWXYUC0z8nB3OBSw&usqp=CAU",name:"Dhokla",price:"10",selected:"false"},{id:10,Restname: "Rest1",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPKc4RKf5jhW0Fx4v28p1jAi06rnCABLRqnQ&usqp=CAU",name:"pani puri",price:"10",selected:"false"},{id:11,Restname: "Rest1",imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr1r_WLmR0xkqG3KLNoObFkrB94lY-UULC2w&usqp=CAU",name:"vada",price:"10",qty:0,selected:"false"}]
      },
      {
        rating:"3.9",Restname: "Rest2",qty:0,
        fooditems:[{id:12,Restname: "Rest2",qty:0,imgsrc:"https://davidrocco.com/wp-content/uploads/2017/03/DSCF2251.jpg",name:"Prawn Curry",price:"10",selected:"false"},{id:13,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2okCDOuMrsncS9gmn08mDLEBkxED7XJnjaw&usqp=CAU",name:"Dal Makhani",price:"10",selected:"false"},{id:14,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiVaFmZG_BPW1NTVdsdrVcgss8qddjWqkW6w&usqp=CAU",name:"Masala Dosa",price:"10",selected:"false"},{id:15,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTJItYTnLKnnuw08idF2YgbvsQp2pIuzRmJw&usqp=CAU",name:"Chicken kebab",price:"10",selected:"false"},{id:16,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMmQX8UrCM_oHv0GPyJHNURtbwYNQCxlKjAQ&usqp=CAU",name:"Chole",price:"10",selected:"false"},{id:17,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIkw651a9MPIUO3R2QCZ_XUKKFgiL7hobXlw&usqp=CAU",name:"paneer",price:"10",selected:"false"},{id:18,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSia7utcw6xu5b84tnABLKqKCfEJrve56pyPQ&usqp=CAU",name:"Samosa",price:"10",selected:"false"},{id:19,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvGOTrtdUj1CTfCLdVwOuZ8pYQzUoC8hEeEw&usqp=CAU",name:"paratha",price:"10",selected:"false"},{id:20,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv-5kCQ-eANWjUFVTRvaVWXYUC0z8nB3OBSw&usqp=CAU",name:"Dhokla",price:"10",selected:"false"},{id:21,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPKc4RKf5jhW0Fx4v28p1jAi06rnCABLRqnQ&usqp=CAU",name:"pani puri",price:"10",selected:"false"},{id:22,Restname: "Rest2",qty:0,imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr1r_WLmR0xkqG3KLNoObFkrB94lY-UULC2w&usqp=CAU",name:"vada",price:"10",qty:0,selected:"false"}]
      }
      ]
  }

function reducer(state=initialstate,action){
  console.log(action)
  if(action.type === "add")
  {
    return {...state,data:[...state.data,{...action.payload,qty:1}]}
  }
  if(action.type === "clearcart")
  {
    return {...state,data:[]}
  }
  return state;
}

const store = createStore(reducer);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Provider store={store}>
        <BrowserRouter>
          <Indexpage></Indexpage>
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
