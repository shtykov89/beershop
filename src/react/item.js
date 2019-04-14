import React from 'react';

class Item extends React.Component{

    render(){
        return(
            <div className="container">
                {this.props.beers.map(data => (
                        <div key={data.id}
                            className="card">
                            <img className="image" src={data.image_url} />
                            <h4 className="name">{data.name}</h4>
                            <div>
                            <span className="btn-details" onClick ={() => { this.props.onSelect(data)}}>see details</span>
                            </div>
                            <button 
                                className="btn"
                                onClick={() => { this.props.addItem(data) }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                    }
            </div>
        ) 
       
    }
}

export default Item