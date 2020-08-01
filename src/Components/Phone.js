/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class Phone extends Component {

    

    createPrice = (index) => {
        var c = "";
        while (index > 999) {


            var b = index % 1000;
            if (b === 0) b = "000";
            else if (b < 100) b = "0" + b;
            else if (b < 10) b = "00" + b;
            c = "." + b + c;
            index /= 1000;
            index = index >> 0;
        }
        return index + c;
    }
    onClick = (e, Product)=> {
        e.preventDefault();
        this.props.addToCart(Product);
          }
    viewDetail = (params) =>{
      
        this.props.viewDetail(params);
    }
    render() {
        var products = this.props.products;
        var phone = products.filter((product) => {
            return product.type === 'phone' ;
        });
        var element = phone.map((product, index) => {

         return(
                
             
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" key= {product.id}>

                <div className="card" style={{width: '20rem',height:'29rem'}}>
                
    
                    <img alt="iphone" id="yourImgId" src={product.img}  width="170px"  height="170px"/>
                      <div className="caption">
                          <h4 className = "ml-5">{(product.name)}</h4>
                          <p  className = "ml-5">
                              {this.createPrice(product.price)} VNĐ
                          </p>
                          <p>
                                        
                              <a className="btn btn-success ml-5" href=" " onClick={(event) => this.onClick(event,product)}  >
                                  <span className="fa fa-cart-plus"></span>
                              </a>
                              <a className="btn btn-success ml-5" href="/detail" onClick = {() => this.viewDetail(product)}>
                                  <span>
                                      Xem thông tin
                                  </span>
                              </a>
                          </p>
                        </div>
                    </div>
                </div>
                
          
         
        )
        
      }
      )
  
        return (
            
         <div >
         {element}  
         </div>

            
        )
    }
}
