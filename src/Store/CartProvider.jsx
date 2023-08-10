import { useState, useEffect } from "react";
import CartContext from './CartContex'
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amount = 0;
    items.forEach((item) => {
      amount += item.price * item.quantity;
    });
    setTotalAmount(amount);
  }, [items]);

  const addItemHandler = (item, quantity) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + quantity }
            : prevItem
        );
      }
      try{
        const response = fetch.post('https://crudcrud.com/api/77e2bbdd25564a929f641d7bcf2d8a66/Cart',...prevItems, { ...item, quantity: quantity })
        if(!response.ok){
          console.log('something went wrong')
        }else{
          console.log('sucessful')
        }
      }catch(error){
        console.log(error)
      }
      
      return [...prevItems, { ...item, quantity: quantity }];
    });
    
  };

  const clearCartHandler = () => {
    setItems([]);
  };
  const fetchPrducts=async()=>{

    
    try {
      const response = await fetch.get('https://crudcrud.com/api/77e2bbdd25564a929f641d7bcf2d8a66/Cart')
      if(!response.ok){
        console.log('something went wrong')
      }
      const data = await response.json()
      
    } catch (error) {
      console.log(error.message)
    }
    
  }

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    clearCart: clearCartHandler,
    getItems: fetchPrducts
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;