import React from 'react';
import { render } from 'react-dom';
import Store from './Pages/Store';
import Basket from './Pages/Basket';
import './Pages/styles.css'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.handleBasketKeyClick = this.handleBasketKeyClick.bind(this)

    this.state = { currentPage: 'Store', btnTitle: 'Basket',
    candies: [
      {id: 1, ordered: false, name: 'Peanut', price: 2, img: 'http://louperrine.com/wp-content/uploads/2017/03/MMs-Panut.png', btnTitle: 'Add to Basket' },
      {id: 2, ordered: false, name: 'Milk Chocolate', price: 5, img: 'https://pngimg.com/uploads/m_m/m_m_PNG23.png', btnTitle: 'Add to Basket' },
      {id: 3, ordered: false, name: 'Almond', price: 5, img: 'https://images-na.ssl-images-amazon.com/images/I/51I2%2BvauQgL.jpg', btnTitle: 'Add to Basket' },
      {id: 4, ordered: false, name: 'Dark Chocolate', price: 8, img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/10/54f91b540c622_-_product_darkpeanutmms.png', btnTitle: 'Add to Basket' },
      {id: 5, ordered: false, name: 'Peanut Butter', price: 7, img: 'https://i.pinimg.com/originals/0e/59/b0/0e59b02d6d25e80b8fedb8be6bf43265.png', btnTitle: 'Add to Basket' },
      {id: 6, ordered: false, name: 'Pretzel', price: 8, img: 'https://i.pinimg.com/originals/f6/8a/43/f68a43e1cb1f30073c3cf4be9f68d33d.png', btnTitle: 'Add to Basket' }
    ]
   }
  }

  handleBasketKeyClick() {
    if (this.state.currentPage === 'Store') {
      this.setState({currentPage: 'Basket'})
      this.setState({btnTitle: 'Store'})
    }
    else
    {
      this.setState({currentPage: 'Store'})
      this.setState({btnTitle: 'Basket'})
    }
  }

  render() {
    return (
    <div className='wrapper'>
      {<button className='btn' onClick={this.handleBasketKeyClick}>{this.state.btnTitle}</button>}
      {this.state.currentPage === 'Store' ? <Store state = {this.state} /> : null}
      {this.state.currentPage === 'Basket' ? <Basket state = {this.state} /> : null}
    </div>
     
    )
  }
}

render(<App />, document.getElementById('root'));

