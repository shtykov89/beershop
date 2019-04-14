import React from 'react';

class Cart extends React.Component{
    
    render(){
        return(
            <div className="cart">{!this.props.cart.length && 
                <p>Cart is empty</p>}
                {this.props.cart.length && this.props.cart.map((item) => (
                    <div className="cart-item" key={item.product.id}>
                        <p className="cart-name">{item.product.name}</p>
                        <p>quantity: {item.count}</p>
                        <p>price: {item.price * item.count}$</p>
                        <div className="delete">
                            <span className="btn-delete" onClick={()=>{this.props.deleteItem(item)}}>delete</span>
                        </div>
                    </div>
                ))}
            </div>
        )   
    }   
}

export default Cart;