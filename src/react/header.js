import React from 'react';
import Modal from 'react-modal';
import Cart from './cart'

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="header">
                <h1 className="shop-name">BEER SHOP </h1>
                <h2 className="shop-name">ALL FOR 5$!</h2>
                <div>
                    <img onClick={this.handleOpenModal} 
                         src="https://icon-icons.com/icons2/1215/PNG/48/1492532805-8-shopping-cart_83216.png"/>
                        
                    <Modal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        className="Modal"
                        overlayClassName="Overlay"
                    >
                        <Cart
                            cart={this.props.cart}
                            deleteItem={this.props.deleteItem}
                        />
                        <button className="btn btn-cart" onClick={this.handleCloseModal}>close</button>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Header