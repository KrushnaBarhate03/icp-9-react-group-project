import React, { useState, useEffect } from 'react';
import toast,{Toaster} from 'react-hot-toast';
import Navbar from "../Navbar/Navbar";
import PersonalCard from "./PersonalCard";
import PersonalData from "../../config/personalcare.json"; // Your JSON file
import { IndianRupee, ShoppingCart, Plus, Minus } from "lucide-react";
// import { Toaster } from 'react-hot-toast';

function PersonalC() {

  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {

      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
      toast.success("Product Added Success");
    } else {

      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Navbar cartcount={cart.length} />

      <h1 className="text-4xl py-4 font-bold ml-10">PersonalCare</h1>
      <div className="flex flex-wrap justify-center">
        {PersonalData.map((item) => {
          const { id, name, pimage, price, newprice, description } = item;
          return (
            <PersonalCard 
              key={id} 
              id={id} 
              name={name} 
              pimage={pimage} 
              price={price} 
              newprice={newprice} 
              description={description}
              addToCart={addToCart}  
            />
          );
        })}
      </div>
      <Toaster/>
    </div>
  );
}

export default PersonalC;
