import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    //Cart component that holds all of the different components such as the list, totals, columns and title
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length >0){
                            return (
                                <React.Fragment>
                                <Title name='your' title='cart'/>
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotals value={value} />
                                </React.Fragment>
                            )
                        } else {
                            return (<EmptyCart />)
                        }
                    }}

                    
                </ProductConsumer>
            </section>
        )
    } 

}