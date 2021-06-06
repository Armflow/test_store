import React from 'react';
import { render } from 'react-dom';
import Store from './Pages/Store';
import Basket from './Pages/Basket';
import './Pages/styles.css'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleBasketKeyClick = this.handleBasketKeyClick.bind(this)
    this.state = { currentPage: 'Store', btnTitle: 'Basket', candies: [] }
  }

  componentDidMount(){
    this.Candies();
  }

  fetchCandies = () => {
    this.setState({...this.state});
    fetch('http://localhost:9000/api')
        .then(response => response.json())
        .then(result => {this.setState({candies: result})
        })
        .catch(e => {
            console.log(e);
            this.setState({...this.state});
        });
  };
  Candies = this.fetchCandies;

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
      {this.state.currentPage === 'Store' ? <Store state = {this.state}  /> : <Basket state = {this.state} />}
    </div>
     
    )
  }
}

render(<App />, document.getElementById('root'));

