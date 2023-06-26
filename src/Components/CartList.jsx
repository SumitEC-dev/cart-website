import * as React from 'react';
import { useEffect, useState } from 'react'

function CartList({cart}){
    const [addCart, setAddCart] = useState([]);

    useEffect(()=>{
        setAddCart(cart)
    },[cart])

    const handleRemove=(id)=>{
        const arr=cart.filter[(item)=>item.id!==id]
        setAddCart(arr)
    }

    return( 
        <div className='row'>
            {
                addCart?.map((cartItem,cartIndex)=>{
                    return(
                        <div className='p-4 border row'>
                            <div className="col-md-3"><img src={cartItem.images[0]} alt="" width={150} height={60}/></div>
                            <div className="col-md-3"><span>{cartItem.title}</span> </div>    
                            <div className="col-md-2"><button className='btn btn-primary btn-sm' onClick={()=>{
                                const _CART=addCart.map((item,index)=>{
                                    return cartIndex===index ? {...item,quantity:item.quantity> 0 ? item.quantity-1 : 0} : item
                                })
                                setAddCart(_CART);
                            }}
                            >-</button>
                            <span className='p-1'>{cartItem.quantity}</span>
                            <button className='btn btn-primary btn-sm' onClick={()=>{
                                const _CART=addCart.map((item,index)=>{
                                    return cartIndex===index ? {...item,quantity:item.quantity+1} : item
                                })
                                setAddCart(_CART);
                            }}
                            >+</button></div>  
                            <div className="col-md-2"><span>Rs. {cartItem.price * cartItem.quantity}</span></div>
                            {/* <div className="col-md-2"><button className='btn btn-danger btn-sm' onClick={()=>handleRemove(cartItem.id)}>Remove</button></div> */}
                            
                        </div>
                    )
                })
            }
            <p className='text-center p-2'> <spam className='fw-bold'>Total Amount :
                {
                    addCart.map(user=>user.price * user.quantity).reduce((total,value)=>total+value,0)
                }
                </spam> 
            </p>
        </div>
    )
}

export default CartList;