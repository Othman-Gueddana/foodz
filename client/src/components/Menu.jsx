 import React from 'react'
 import UserInfo from "./UserInfo.jsx"

 class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
          Food:[],
          total:0,
        }
    }
    checkboxes(){
      var con = document.getElementById('container');
      var items = con.getElementsByTagName('input');
      var arr=[]
      var cost=0

      for( var i = 0; i < items.length; i++ ){
        if(items[i].checked){
          arr.push(items[i].name)
          cost+= JSON.parse(items[i].value)
        }
      }
    this.setState({ Food:arr, total:cost })
    }
     render(){
      if(this.state.total>0){
        return <UserInfo  total={this.state.total} order={this.state.Food}/>
      } else{
        return(
          <div id="container" >
              <h1>WELCOME TO FOOD'ZZ </h1>
                  {this.props.menu.map(item => (
            <div key={item.id}>
                 <h4 id="maintitle"><div id="fooditem">{item.food}</div>  <div><strong className="title"> Price:</strong></div>  <strong id="price">  {item.price}</strong></h4>
                 <input id="checkmark" type="checkbox" value={item.price}  name={item.food}></input> 
            </div>
         ))}
            <div>
                   <button className="button" onClick={this.checkboxes.bind(this) }>submit</button>
            </div>
          </div> 
          )
      }
    }
 }
export default Menu;