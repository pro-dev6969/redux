import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem , increase , decrease} from '../features/cart/cartSlice';

import { useDispatch } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleClick = (id)=>{
    dispatch(removeItem(id));
  }
  const handleDecrease = (id) =>{
    if(amount === 1 && ){
      dispatch(removeItem(id));
      return;
    }
    if(amount === 1){
      dispatch(removeItem(id));
      return;
    }
    dispatch(decrease({id}));
  }
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={()=>handleClick(id)}>remove</button>
      </div>
      <div>
        <button className='amount-btn' onClick={()=>dispatch(increase({id}))}>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={()=>handleDecrease(id)}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;