import React from 'react';
import CartItem from './CartItem';


export default function CartList({value}) { //Component that holds all of the cart items and updates the state when necessary
    const {cart} = value;
    return (
        <div className='container-fluid'>
            {cart.map( item => {
                return (
                    <div>
                        <CartItem key={item.id} item={item} value={value} />
                    </div>
                )
            })}

        </div>
    )
}