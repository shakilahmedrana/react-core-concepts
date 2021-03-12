import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let actore = ['katrina kaif',"shahruk","amir khan",'allu arjun','Ram']

  const products=[{name:'photoshop',price:'$50.99'},
          {name:'ilastrator',price:'$20.11'},
          {name:'Adove in desing',price:'$100'}]
  const productName= products.map(products => products.price);
  console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
         {
           actore.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(pd => <li>{pd.name} {pd.price}</li>)
         }
        </ul>
       {
         products.map(pd => <Products product= {pd}></Products>)
       }
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        {/* <Products name={products[2].name} price={products[2].price}></Products> */}
       <Person name="Rana ahmed" chakre="Web developer"></Person>
       <Person name="Fardin ahmed" chakre="home worker"></Person>
       <Person name={actore[2]} chakre="nayok"></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1)
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove ={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic user:{users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.name}</li>)
       }
     </ul>
    </div>
  )

}
function Products(props){
  const productStyle={
    border:'1px solid gray',margin:'5px',color:'black',borderRadius:'5px', float:'left',backgroundColor:'lightGray',height:'200px',width:'200px',borderColor:'red'
  }
  const {name,price}= props.product
  console.log(name,price)
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Bye now</button>
    </div>
  )
}
function Person(props){
  return(
  <div style={{border:'3px solid green',width:'500px', margin:'10px',boxShadow:'5px 10px 15px tomato'}}>
    <h3>My name: {props.name}</h3>
    <p>profasion: {props.chakre}</p>
  </div>
  )
}

export default App;
