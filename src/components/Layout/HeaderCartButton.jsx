import React, { useContext } from 'react'

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {


const clickHandler=()=>{
  props.onClick();
}
const cartCtx=useContext(CartContext)
const numberOfCartItem=cartCtx.items.reduce((curNumber,item)=>{
  return curNumber + item.amount;
},0)
  return (
    <button className={styles.button} onClick={clickHandler}  >
        <span className={styles.icon}>
          <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  )
}

export default HeaderCartButton