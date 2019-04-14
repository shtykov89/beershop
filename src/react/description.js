import React from 'react';

class Description extends React.Component{
    
    render (){
        return (
            <div>
            {this.props.selectedItem.map(item =>(
                <div className="disc" key={item.id}>
                   <div className="disc">{item.name}</div>
                   <img className="discImage" src={item.image_url} />
                   <p>{item.description}</p>
                   <button className="btn btn-cart" onClick={()=>this.props.addItem(item)}>add to cart</button>
                   <button className="btn btn-cart" onClick={this.props.handleCloseModal}>close</button> 
                </div>
            ))
            }
            </div>
        )
    }
}
export default Description;