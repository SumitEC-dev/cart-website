import React,{useState} from 'react';
import Dashboard from './Components/Dashboard';
import CartList from './Components/CartList';
import HeaderAppBar from './Components/HeaderAppBar';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  console.log(cart)
  const handleClick=(items)=>{
    setCart([...cart,{...items,quantity:1}])
  }
 
  const handleShow=(value)=>{
    setShowCart(value);
  }

  return (
    <React.Fragment> 
        <HeaderAppBar size={cart.length} handleShow={handleShow}/>
        {
          showCart ?
          <CartList cart={cart}/> :
          <Dashboard handleClick={handleClick}/> 
        } 
    </React.Fragment>
  );
}

export default App;
