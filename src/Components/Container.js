import React, { Component } from 'react'

export default class componentName extends Component {
    
    render() {
      
        return (
                <div>
                <div className="container mt-5">
                    <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 DIV">
                        <div><span className="fa fa-phone mr-5" /> DANH MỤC CỬA HÀNG</div>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 tab">
                        <span className="fa fa-home mr-5" />
                        <a href="/">Trang chủ</a>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 tab">
                        <span className="fa fa-address-card mr-5" />
                        <a href="/news" >Tin tức</a>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 tab">
                        <span className="fa fa-user mr-5" />
                        <a href="/member">Nhân viên</a>
                    </div>
                  
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 tab">
                        <span className="fa fa-user mr-5" />
                        <a href=" ">Trả góp 0%</a>
                    </div>
                  
                    </div>
                </div>
                </div>

        )
    }
}
