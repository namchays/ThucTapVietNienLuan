import React, { Component } from 'react'
import PhuKien from './PhuKien'

export default class LaptopRouter extends Component {
    constructor(props) {
        super(props)
        this.state =({
            products : null,
            element : JSON.parse(localStorage.getItem('products'))
        })
    }
    UNSAFE_componentWillMount(){
        if(localStorage && localStorage.getItem('products')){
            this.setState({
                products : JSON.parse(localStorage.getItem('products'))
            })
        }
    }
    Filter (num){
    
        var {products, element} = this.state;
        switch(num){
            case 1:
                     element = products.filter(ele =>ele.price < 200000 && ele.type ==='phukien');
                   
                    break;
            case 2:
                     element = products.filter(ele =>ele.price >= 200000 && ele.price <350000 && ele.type ==='phukien');
                   
                break;
            case 3:
                     element = products.filter(ele =>ele.price >= 350000 && ele.price <700000 && ele.type ==='phukien');
                  
                break;
            case 4:
                     element = products.filter(ele =>ele.price >= 700000 && ele.type ==='phukien' );
                 
                break;
            default: break;
        
        }
        this.setState({
            element:element
        })
        
    }
    onClick = (e,num) =>{
        e.preventDefault();
        this.Filter(num);
    }
    render() {
      
        return (
            <div>
                
                <div className="row">
                    
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ml-30">
                    
                       <h4 className ="breadcrumb">Chọn mức giá:  
                       <a href =" " className ="ml-20" onClick = {(e) =>this.onClick(e,1)}>Dưới 200.000 VNĐ</a>
                       <a href =" "  className ="ml-20" onClick = {(e)=>this.onClick(e,2)}>200.000 - 350.000 VNĐ</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,3)}>350.000 - 700.000 VNĐ</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,4)}>Trên 1 triệu</a>
                       </h4>
                       
                    </div>
                    
                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    {

                    this.state.element.length === 0 ? <h4 className ="ml-30">Không tìm thấy mặt hàng với giá yêu cầu</h4> :<PhuKien products = {this.state.element}/>
                     
                    } 
                    </div>
                </div>
                
              
            </div>
        )
    }
}
