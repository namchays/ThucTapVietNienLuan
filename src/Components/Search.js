import React, { Component } from 'react';
import Laptop from './Laptop';
import PhuKien from './PhuKien'
import Phone from './Phone'
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: '',
            products : null
        })
    }
    UNSAFE_componentWillMount(){
        if(localStorage && localStorage.getItem('search')){
            this.setState({
                name : JSON.parse(localStorage.getItem('search')),
                products : JSON.parse(localStorage.getItem('products'))
            })
           
        }
       
        
    }
    
    render() {
     var {products, name} = this.state;
    
     var a = products.filter(ele => ele.name.toLocaleLowerCase().search(name.toLocaleLowerCase()) >=0)
    
    console.log(products);
        return (
            <div>
                
                <div className ="container">
                <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Phone mt-20">
                            <div><span className="fa fa-search mr-5" />Kết quả tìm kiếm</div>
                            
                        </div>
                        <Phone products = {a} />
                        <Laptop products= {a}/>
                        <PhuKien products= {a}/>
                    </div>
                      {a.length === 0 ? <h3 className ="text-center">Không tìm thấy kết quả yêu cầu</h3> : <div></div>}
                </div>
                
                  
            </div>
        );
    }
}

export default Search;
