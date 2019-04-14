import React from 'react';
import Modal from 'react-modal';
import Item from './item'
import Description from './description';

class Listitems extends React.Component {

    render() {
        return (
            <div>
                <Item
                    showModal={this.props.showModal}
                    beers={this.props.beers}
                    addItem={this.props.addItem}
                    onSelect ={this.props.onSelect}
                    selectedItem={this.props.selectedItem}
                />
                <Modal
                    isOpen={this.props.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.props.handleCloseModal}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <Description
                        selectedItem={this.props.selectedItem}
                        addItem={this.props.addItem}
                        handleCloseModal={this.props.handleCloseModal}
                    />
                </Modal>
                
            </div>
        )
    }
}

export default Listitems