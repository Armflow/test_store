import React from 'react';
import { render } from 'react-dom';
import Store from './Pages/Store';
import Basket from './Pages/Basket';
import './Pages/styles.css'
import image1 from './img_src/1.jpg'
import image2 from './img_src/2.jpg'
import image3 from './img_src/3.jpg'
import image4 from './img_src/4.jpg'
import image5 from './img_src/5.jpg'
import image6 from './img_src/6.jpg'
import image7 from './img_src/7.jpg'
import image8 from './img_src/8.jpg'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.handleBasketKeyClick = this.handleBasketKeyClick.bind(this)
    const addToBasketBtnTitle = 'Add to Basket'
    this.state = { currentPage: 'Store', btnTitle: 'Basket',
    candies: [
      {id: 1, ordered: false, name: 'Peanut', price: 2, img: image1, btnTitle: addToBasketBtnTitle },
      {id: 2, ordered: false, name: 'Milk Chocolate', price: 5, img: image2, btnTitle: addToBasketBtnTitle },
      {id: 3, ordered: false, name: 'Almond', price: 5, img: image3, btnTitle: addToBasketBtnTitle },
      {id: 4, ordered: false, name: 'Dark Chocolate', price: 8, img: image4, btnTitle: addToBasketBtnTitle },
      {id: 5, ordered: false, name: 'Peanut Butter', price: 7, img: image5, btnTitle: addToBasketBtnTitle },
      {id: 6, ordered: false, name: 'Pretzel', price: 8, img: image6, btnTitle: addToBasketBtnTitle },
      {id: 7, ordered: false, name: 'Peanut Butter', price: 8, img: image7, btnTitle: addToBasketBtnTitle },
      {id: 8, ordered: false, name: 'White Chocolate', price: 8, img: image8, btnTitle: addToBasketBtnTitle }
    ]
    // candies: [
    //   {id: 1, ordered: false, name: 'Peanut', price: 2, img: 'http://louperrine.com/wp-content/uploads/2017/03/MMs-Panut.png', btnTitle: 'Add to Basket' },
    //   {id: 2, ordered: false, name: 'Milk Chocolate', price: 5, img: 'https://pngimg.com/uploads/m_m/m_m_PNG23.png', btnTitle: 'Add to Basket' },
    //   {id: 3, ordered: false, name: 'Almond', price: 5, img: 'https://images-na.ssl-images-amazon.com/images/I/51I2%2BvauQgL.jpg', btnTitle: 'Add to Basket' },
    //   {id: 4, ordered: false, name: 'Dark Chocolate', price: 8, img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/10/54f91b540c622_-_product_darkpeanutmms.png', btnTitle: 'Add to Basket' },
    //   {id: 5, ordered: false, name: 'Peanut Butter', price: 7, img: 'https://i.pinimg.com/originals/0e/59/b0/0e59b02d6d25e80b8fedb8be6bf43265.png', btnTitle: 'Add to Basket' },
    //   {id: 6, ordered: false, name: 'Pretzel', price: 8, img: 'https://i.pinimg.com/originals/f6/8a/43/f68a43e1cb1f30073c3cf4be9f68d33d.png', btnTitle: 'Add to Basket' }
    // ]
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

