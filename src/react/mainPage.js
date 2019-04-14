import React from 'react';
import Listitems from './listItems';
import Header from './header';
import Modal from 'react-modal'

Modal.setAppElement('#root')

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            beers: [],
            selectedItem: [],
            showModal: false
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    };

    componentDidMount() {
        const api = 'https://api.punkapi.com/v2/beers'
        fetch(api)
            .then((response) => {
                if (response.ok)
                    return response.json();
            })
            .then((response) => {
                this.setState({ beers: response })
            })
            .catch((error) => { console.log(error) })
    }

    onSelect(data) {
        let newItems = [... this.state.selectedItem];
        const idx = newItems.indexOf(data);
        if (this.state.selectedItem.length === 1 && idx < 0) {
            return
        }
        if (idx >= 0) {
            newItems = newItems.filter((block, i) => i !== idx);
        } else {
            newItems.push(data);
        }
        this.setState({
            selectedItem: newItems,
            showModal: true
        })
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({
            showModal: false,
            selectedItem: []
        });
    }

    addItem(item) {
        const arr = this.state.cart;
        let founded = false;;
        arr.forEach((elem) => {
            if (elem.product.id === item.id) {
                elem.count += 1;
                founded = true;
            }
        });
        if (!founded) {
            arr.push({ count: 1, price: 5, product: item });
        }
        this.setState({ cart: arr });
    };

    deleteItem(item) {
        const arr = this.state.cart;
        let idx = arr.indexOf(item);

        if (item.count === 1) {
            arr.splice(idx);
        } else {
            item.count = item.count - 1;
        }

        this.setState({ cart: arr });
    }

    render() {
        return (
            <div>
                <Header 
                    cart={this.state.cart}
                    deleteItem={this.deleteItem}
                />
                <Listitems
                    showModal={this.state.showModal}
                    selectedItem={this.state.selectedItem}
                    beers={this.state.beers} 
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    handleOpenModal={this.handleOpenModal}
                    handleCloseModal={this.handleCloseModal}
                    onSelect={this.onSelect}
                />
            </div>
        )
    }
}

export default MainPage