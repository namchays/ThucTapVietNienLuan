import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: ''
    })
  }


  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    this.setState({
      [name]: value
    })



  }
  onClick = () => {
    var { name } = this.state;
    localStorage.setItem('search', JSON.stringify(name))
  }
  render() {

    return (
      <div>

        <header className="header">
          <div className="header-wrapper">
            <div className="header-main">
              <div className="flex-row">

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  {/* Header logo */}
                  <div id="logo" className="flex-col logo">
                    <a href="/" rel="home">
                      <img width={200} height={70} src="./img/logo.png" className="header_logo header-logo" alt="/" /></a>
                  </div>
                </div>


                {/* Phần search */}



                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 select">

                  {/* <select  className="form-control mt-15" required="required" >
                                <option><a href="/">Tất cả</a></option>
                                <option><a href="/phone">Điện thoại</a></option>
                                <option><a href="/laptop">Laptop</a></option>
                                <option><a href="/phukien">Phụ Kiện</a></option>
                               
                          </select> */}
                  <div className="dropdown">
                    <button className="mt-15 dropdown-toggle" type="button" data-toggle="dropdown">Chọn sản phẩm
                   <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><a href="/">Tất cả</a></li>
                      <li><a href="/phone">Điện thoại</a></li>
                      <li><a href="/laptop">Laptop</a></li>
                      <li><a href="/phukien">Phụ kiện</a></li>
                    </ul>
                  </div>
                </div>





                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-15">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="name" onChange={this.onChange} />
                    <span className="input-group-btn">
                      <a className="btn btn-success" onClick={() => this.onClick()} href="/search">
                        <span className="fa fa-search mr-5" />Tìm
                    </a>
                    </span>
                  </div>
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-20  cart">

                  <ul>

                    <a href="/cart" >Giỏ hàng</a>
                    <i className="fa fa-shopping-cart ml-5" ></i>


                  </ul>


                </div>


              </div>
            </div>
          </div>
        </header>

      </div>

    )
  }
}
