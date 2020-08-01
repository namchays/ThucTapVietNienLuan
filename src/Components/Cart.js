import React, { Component } from 'react'

export default class Cart extends Component {
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
    delete = (params) =>{
     this.props.onDelete(params);
    }
    addQuantily = (Cart) => {
    this.props.addQuantily(Cart);
    }
    onSubstract = (Cart) => {
      this.props.onSubstract(Cart);
    }
    onPay = () =>{
      this.props.onPay();
    }
      render() {
        

        var {cart} = this.props;
        var s=0;

         cart.forEach((Cart) =>{
            
            s = s + Cart.soluong * Cart.product.price;
        })
        var element = cart.map((Cart, index)=>{
           
            return (
         
                
              <tbody key ={index} >
                <tr>
                <td >{index+1}</td>
                <td>{Cart.product.name}</td>
            <td><img alt={index} src={Cart.product.img} style = {{width:100, height:100}}></img></td>
            <td>{this.createPrice(Cart.product.price)}</td>
            <td className="text-center">
              
              <button type="button" className="btn btn-default mr-5" onClick = {() => this.addQuantily(Cart)}>+</button>
              
              {Cart.soluong}
              <button type="button" className="btn btn-default ml-5" onClick ={ () => this.onSubstract(Cart)}>-</button>
              </td>
            <td>{this.createPrice(Cart.soluong * Cart.product.price)}</td>
              <td>
              <button type="button" className="btn btn-default mt-5" onClick = {() =>this.delete(Cart)}><span className = "fa fa-close"></span></button>
              </td>
                </tr>
              </tbody>
             
              
            )
        })
       
        return (
            <div className="container">
            <div className="row">
              <h1 className="text-align-center mr-30">Giỏ hàng</h1>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    
   
                  <th>STT</th>
                  <th>Tên Sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th>Xóa</th>
                </tr>
              </thead>
                {element}
                <tbody>
                <tr>
                <td>Tổng tiền</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{this.createPrice(s)}</td>
                <td></td>
                </tr>
              </tbody>
                </table>
              </div>
              <a href = "/"> <button type="button" className="btn btn-default fr ml-5">Home</button></a>
             
              <button type="button" className="btn btn-primary fr " onClick = {() => this.onPay()}>Thanh toán</button>
              
            </div>
          </div>

        )
    }
}
