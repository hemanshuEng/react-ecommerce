import React from "react";
import classes from "./CartItem.css";
const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <tbody>
      <tr>
        <td>
          <img
            src={img}
            alt={title}
            style={{ width: "3rem", height: "3rem" }}
          />
        </td>
        <td>{title}</td>
        <td>£{price}</td>
        <td className={classes.BtnContainer}>
          <button onClick={()=>decrement(id)} className={classes.Btn}>
            -
          </button>
          <span className={classes.BtnSpan}>{count}</span>
          <button onClick={()=>increment(id)} className={classes.Btn}>+</button>
        </td>
        <td>
          <button onClick={()=>removeItem(id)} className={classes.RemoveBtn}>X</button>
        </td>
        <td>£{total}</td>
      </tr>
    </tbody>
  );
};

export default CartItem;
