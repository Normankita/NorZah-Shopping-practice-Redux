import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useSelector } from "react-redux";
import { useState } from "react";
export const Cart = () => {
  useTitle("Cart");
  const [tz, setTZ] = useState(false)
  const products = useSelector(state=> state.cartState.cartList)
  const total = useSelector( stata=> stata.cartState.total)
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length} | <span className="total"> Total Cost {tz? (`Tshs ${total*2500}`) : (`$${total}`) } <button className="currency" onClick={()=>setTZ(!tz)}>{ tz? " US? " :" TZ? "}</button></span></h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
