import React, { Component } from 'react'
import './TodoApp.css'


export default class TodoApp extends Component {

state = {
    input: "",
    item: []
};
itemDelete= index =>{
const allItems = this.state.item;
allItems.splice(index, 1);
this.setState({
    item: allItems
})
}

handleChange = event => {
    this.setState({

        input: event.target.value
    });
   
};
storeItem = (event) =>{
    event.preventDefault()
const {input} = this.state;


this.setState({
item: [...this.state.item,input],
input:""

})
}
  render() {
    

    const {input, item} = this.state;
   

    return (
      <div className='todo-container'>
      
        <form className='input-section' onSubmit={this.storeItem}>
        <h1>TodoApp</h1>
            <input type="text"
             placeholder='Enter Items...' 
             onChange={this.handleChange}
             value = {input}/>
           
            </form>
<ul>
    {item.map((data,index)=>(
        <li key={index}>{data}<i className="fa-solid fa-trash-can"onClick={()=>this.itemDelete(index)}></i></li>
    ))}
</ul>
</div>
     
    )
  }
}
