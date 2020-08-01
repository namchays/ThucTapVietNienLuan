import React, { Component } from 'react'
import Footer from './Components/Footer'
import './App.css';
import Cart from './Components/Cart'
import Header from './Components/Header';
import Products from './Components/Products';
import Container from './Components/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails';
import News from './Components/News';
import NewDetails from './Components/NewDetails'
import Member from './Components/Member';
import Search from './Components/Search';
import PhoneRouter from './Components/PhoneRouter';
import LaptopRouter from './Components/LaptopRouter';
import PhuKienRouter from './Components/PhuKienRouter';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      productShow : null,
      newShow: null
    }
    this.addToCart = this.addToCart.bind(this);
    this.ViewNews = this.ViewNews.bind(this);
  }
  UNSAFE_componentWillMount(){
    var cart = [];
    if(localStorage && localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    this.setState({cart : cart})
  }
  createPrice = (index) => {
    var c = "";
    while (index > 999) {


        var b = index % 1000;

        //   b.toString();
        if (b === 0) b = "000";
        else if (b < 100) b = "0" + b;
        else if (b < 10) b = "00" + b;
        c = "." + b + c;
        index /= 1000;
        index = index >> 0;
    }
    return index + c;
}
  addToCart (params) {
    var Check = true;
    var {cart} = this.state;
    cart.forEach((Cart, value)=>{
      if(Cart.product.id === params.id){
        Cart.soluong ++;
        Check = false;
      }
    })
    if(Check){
      cart = [...cart,
        {
          soluong : 1,
          product : params
        }
      ];
    }
    console.log(params);
    alert('Thêm '+ params.name+ ': ' + this.createPrice(params.price)  +' vào giỏ hàng thành công')
   
    this.setState({
      cart:cart
    });
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  onDelete = (params) =>{
    var {cart} = this.state;
      cart.forEach((element,index) => {
        if(element.product.id === params.product.id){
          cart.splice(index,1); 
        }
      })
      this.setState({cart : cart});
      localStorage.setItem('cart', JSON.stringify(cart));
  }
  setLocal (){
    var {cart} = this.state;
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
    this.setState({
      cart : cart 
    })
  }
  addQuantily = (Cart) =>{
    Cart.soluong ++;
   this.setLocal();
  } 
  onSubstract = (Cart) =>{
    Cart.soluong --;
    if(Cart.soluong <= 0) this.onDelete(Cart);
    this.setLocal();
  }
  onPay = () =>{
 
      var {cart} = this.state;
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({cart:cart})
  
  }
  onBuy = (params) =>{
    alert('Mua thành công ' +params.name)
  }
  viewDetail = (params) => {
    this.setState({
      productShow : params
    })
    console.log("show");
    localStorage.setItem('productShow',JSON.stringify(params));
  }
  ViewNews  (params) {
    this.setState({
      newShow : params
    })
     localStorage.setItem('newShow', JSON.stringify(params))
    console.log(params);
  } 
  render() {
    return (
      <Router>
        <div >
          <Header />
          <Container />
      
        

            
            <div className="col-lg-1">

              
            </div>
            <div className="col-lg-11 mt-5 ">
            <Route path="/" exact >
              <Products addToCart = {this.addToCart} onShowProduct ={this.onShowProduct} viewDetail = {this.viewDetail}/>
            </Route>
              <Route path="/cart" >
              <Cart onPay ={this.onPay} cart = {this.state.cart} onDelete ={this.onDelete} addQuantily = {this.addQuantily} onSubstract = {this.onSubstract}/>
          </Route>
            <Route path="/detail">
              <ProductDetails  productShow ={this.state.productShow} addToCart = {this.addToCart} onBuy = {this.onBuy} createPrice = {this.createPrice}/>
            </Route>
            <Route path = "/news" exact >
              <News  ViewNews = {this.ViewNews}/>
            </Route>
            <Route path = "/news/detail"  >
            <NewDetails />
            </Route>
            <Route path ="/member">
            <Member/>
            </Route>
            <Route path ="/search">
            <Search/>
            </Route>
            <Route path = "/phone">
             <PhoneRouter/>
            </Route> 
            <Route path="/laptop" component ={LaptopRouter}></Route> 
            <Route path="/phukien" component ={PhuKienRouter}></Route> 
            </div>
            <Footer/>
         
        </div>
          
        
      </Router>
    );

  }
}
export default App;
