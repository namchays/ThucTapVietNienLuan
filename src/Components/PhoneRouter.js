import React, { Component } from 'react'
import Phone from './Phone'

export default class PhoneRouter extends Component {
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
                     element = products.filter(ele =>ele.price < 1000000 && ele.type ==='phone');
                   
                    break;
            case 2:
                     element = products.filter(ele =>ele.price >= 1000000 && ele.price <3000000 && ele.type ==='phone');
                   
                break;
            case 3:
                     element = products.filter(ele =>ele.price >= 3000000 && ele.price <5000000 && ele.type ==='phone');
                  
                break;
            case 4:
                     element = products.filter(ele =>ele.price >= 5000000 && ele.type ==='phone' );
                 
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
                       <a href =" " className ="ml-20" onClick = {(e) =>this.onClick(e,1)}>Dưới 1 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e)=>this.onClick(e,2)}>1 - 3 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,3)}>3 - 5 triệu</a>
                       <a href =" "  className ="ml-20" onClick = {(e) =>this.onClick(e,4)}>Trên 5 triệu</a>
                       </h4>
                       
                    </div>
                    
                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    {

                    this.state.element.length === 0 ? <h4 className ="ml-30">Không tìm thấy mặt hàng với giá yêu cầu</h4> :<Phone products = {this.state.element}/>
                     
                    } 
                    </div>
                </div>
                
              
            </div>
        )
    }
}
