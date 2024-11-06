import "./ProductCard.css";
import {useDispatch, useSelector } from "react-redux"
import {add, remove} from "../store/cartSlice"
import { useEffect, useState } from "react";
export const ProductCard = ({product}) => {
  const {id, name, price, image} = product;
  const dispatch = useDispatch();
  const cartList = useSelector(state=> state.cartState.cartList)
  const [isin, setIsin]= useState(false)
  useEffect(()=>{
    const isitin= cartList.find(item => item.id===id)
    if(isitin){
      setIsin(true)
    }
    else{
    setIsin(false)
  }

  },[cartList, id])
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isin? (<button className="remove" onClick={()=>dispatch(remove(product))}>Remove</button>) : (<button onClick={()=>dispatch(add(product))}>Add To Cart</button>)}
      </div>
    </div>
  )
}
