import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import '../App.css';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {

    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper  className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    <ProductConsumer>
                    {value => (        
                        <div className='img-container p-5'>

                        <img src={img} alt='product' className='card-img-top'/>
                       
                        <Link to='/details'><button className='detail-btn' onClick={() => {
                            value.handleDetail(id);
                            }}>View Details</button></Link>
                       
                        <button className='cart-btn' disabled={inCart ? true : false} onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                        }}>

                            {inCart ? (
                                <p className='text-capitalize mb-0' disabled>
                                    {" "}
                                    in Cart
                                </p>
                            ): ( <p className='mb-0'>Add to Cart</p>
                            )}
                        </button>
                        </div>
                        )}
                    </ ProductConsumer>

                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>
                            {title}
                        </p>
                        <h5 className='text-blue font-italic mb-0'>
                            <span className='mr-1'>$ {price}</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>

        )
    } 

}


Product.propTypes = {  // This is to show of any errors of types that occur within the app.
    product: PropTypes.shape({
        id:PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}


const ProductWrapper = styled.div`
    .card{
        position: relative;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
    }
    &:hover {
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background:rgba(247, 247,247);
        }
    }
    .img-container {
        position: relative;
        overflow:hidden;
    }

    .cart-btn {
        position: absolute;
        bottom:-2px;
        right: 0;
        padding: 0.2rem 0.4rem;
        background:var(--lightBlue);
        border: none;
        color:var(--mainWhite);
        font-size:1.2rem;
        transform: translate(0%, 100%);
        transition: all 0.4s linear;
    }
    .detail-btn {
        position: absolute;
        bottom: -2px;
        left: 0;
        padding: 0.2rem 0.4rem;
        background:var(--mainYellow);
        border: none;
        color:var(--mainWhite);
        font-size:1.2rem;
        transform: translate(0%, 100%);
        transition: all 0.4s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0,0);
    }
    .img-container:hover .detail-btn {
        transform: translate(0,0);
    }
    .cart-btn:hover {
        color: var(--mainBlue);
        cursor:pointer;
    }
    .detail-btn:hover {
        color: var(--dYellow);
        cursor:pointer;
    }
`;
