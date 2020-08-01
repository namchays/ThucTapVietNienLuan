/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Phone from './Phone';
import Laptop from './Laptop'
import PhuKien from './PhuKien';

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone 6',
                    img: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-6-32gb-cu-like-new-didongviet.jpg',
                    price: 7000000,
                    type: 'phone',
                    OS: 'Iphone',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '64 Gb',
                    description: 'Iphone 6 là mẫu smartphone tầm trung vừa mới được apple ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 2,
                    name: 'Iphone 5',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/60546/iphone-5s-16gb-13-300x300.jpg',
                    price: 3000000,
                    type: 'phone',
                    OS: 'Iphone',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '32 Gb',
                    description: 'Iphone 5 là mẫu smartphone tầm trung vừa mới được apple ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },

                {
                    id: 3,
                    name: 'Iphone X',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
                    price: 20000000,
                    type: 'phone',
                    OS: 'IOS',
                    CPU: 'Spapdragon 665',
                    display: ' HD',
                    camera: '10MP',
                    memory: '128 Gb',
                    description: 'Iphone X là mẫu smartphone cao cấp vừa mới được apple ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 4,
                    name: 'Iphone 11 Pro',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
                    price: 33000000,
                    type: 'phone',
                    OS: 'IOS',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '30MP',
                    memory: '128 Gb',
                    description: 'Iphone 11 Pro là mẫu smartphone cao cấp  vừa mới được apple ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 5,
                    name: 'Samsung Galaxy S7',
                    img: 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s7-edge-sm-935-32gb-ban-my.jpg',
                    price: 5000000,
                    type: 'phone',
                    OS: 'Android',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '16MP',
                    memory: '32 Gb'
                    ,
                    description: 'Samsung Galaxy S7 là mẫu smartphone tầm trung vừa mới được Samsung ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 6,
                    name: 'Samsung Galaxy S8',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-300x300.jpg',
                    price: 15000000,
                    type: 'phone',
                    OS: 'Android',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb',
                    description: 'Samsung Galaxy S8 là mẫu smartphone tầm trung vừa mới được SamSung ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 7,
                    name: 'Samsung Galaxy S9',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/147939/samsung-galaxy-s9-plus-black-600x600.jpg',
                    price: 22000000,
                    type: 'phone',
                    OS: 'Android',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '16MP',
                    memory: '128 Gb',
                    description: 'Samsung Galaxy S9 là mẫu smartphone cao cấp vừa mới được SamSung ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 9,
                    name: 'Samsung Galaxy S10',
                    img: 'https://www.duchuymobile.com/images/detailed/23/s10-plus-128gb-my-trang.jpg',
                    price: 25000000,
                    type: 'phone',
                    OS: 'Android',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb',
                    description: 'Samsung Galaxy S10 là mẫu smartphone cao cấp vừa mới được OPPO ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 10,
                    name: 'Oppo Reno3',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png',
                    price: 7000000,
                    type: 'phone',
                    OS: 'Android',
                    CPU: 'InteSpapdragon 665',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '16 Gb'
                    ,
                    description: 'Oppo Reno3 là mẫu smartphone tầm trung vừa mới được OPPO ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 11,
                    name: 'Samsung Galaxy A21s',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/219314/samsung-galaxy-a21s-055620-045627-400x460.png',
                    price: 4780000,
                    type: 'phone',
                    OS: 'Android',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '16 Gb'
                    ,
                    description: 'Samsung Galaxy A21s là mẫu smartphone tầm trung vừa mới được SAMSUNG ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 12,
                    name: 'Vivo Y50',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/219913/vivo-y50-tim-400x460-3-400x460.png',
                    price: 5990000,
                    type: 'phone',
                    OS: 'Android',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb',
                    description: 'Vivo Y50 là mẫu smartphone tầm trung vừa mới được OPPO ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 13,
                    name: 'Vsmart Star 3',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/218886/vsmart-star-3-xanh-400x460-400x460.png',
                    price: 8390000,
                    type: 'phone',
                    OS: 'Android',
                    CPU: 'Spapdragon 665',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb',
                    description: 'Vsmart Star 3 là mẫu smartphone tầm trung vừa mới được Việt Nam  ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng và được bán với mức giá vô cùng phải chăng.'
                },
                {
                    id: 14,
                    name: 'Laptop Lenovo Ideapad S340 ',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/202561/laptop-lenovo-s340-81n70064vn-202561-202561-202561-600x600.jpg',
                    price: 20000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',

                    CPU: 'Intel core i7 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb'
                },
                {
                    id: 15,
                    name: 'Acer Aspire A315 56 308N',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-223654-600x600.jpg',
                    price: 20000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i7 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb'

                },

                {
                    id: 16,
                    name: 'HP 15s fq1111TU i3  8265U/8GB/256GB',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/224012/hp-15s-fq1111tu-i3-193r0pa-224012-224012-600x600.jpg',
                    price: 22000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i3 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb'

                },
                {
                    id: 17,
                    name: 'Asus VivoBook X509MA  ',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/224411/asus-vivobook-x509ma-n4020-br271t-224411-600x600.jpg    ',
                    price: 33000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i7 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb'

                },
                {
                    id: 18,
                    name: 'Asus VivoBook X409JA i3',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/220526/asus-x409ja-i3-ek015t-220526-2-600x600.jpg',
                    price: 24000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i3 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb'
                },
                {
                    id: 19,
                    name: 'HP Envy 13 aq1022TU i5 8265U/8GB/256GB',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/217269/hp-envy-13-aq1022tu-i5-10210u-8gb-512gb-win10-8qn-600x600.jpg',
                    price: 15000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i5 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '256 Gb'
                },
                {
                    id: 20,
                    name: 'Apple MacBook Air 2020 i3',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/220174/apple-macbook-air-2020-i3-220174-220174-600x600.jpg',
                    price: 22000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i3 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '256 Gb'
                },
                {
                    id: 21,
                    name: 'Apple MacBook Air 2020 i5',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/220173/apple-macbook-air-2020-gold-1-600x600.jpg',
                    price: 25000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i5 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb'
                },
                {
                    id: 22,
                    name: 'MacBook Pro Touch 2020 i5',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/224643/macbook-pro-touch-2020-i5-14ghz-8gb-256gb-mxk32sa-600x600.jpg',
                    price: 10000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i5 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '1TB SSD'
                },
                {
                    id: 23,
                    name: 'HP Envy 13 aq1057TX i7 8265U/8GB/256GB',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/220503/hp-envy-13-i7-8xs68pa-220503-220503-600x600.jpg',
                    price: 34000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i7 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '256 Gb SSD'
                },
                {
                    id: 24,
                    name: 'Acer Swift 5 SF514 53T 720R i7',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/201237/acer-swift-sf5-i7-8565u-8gb-256gb-win10-7-600x600.jpg',
                    price: 32000000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i7 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb'
                },
                {
                    id: 25,
                    name: 'Asus ZenBook UX433FA',
                    img: 'https://cdn.tgdd.vn/Products/Images/44/197561/asus-zenbook-ux433fa-i5-8265u-8gb-256gb-win10-a60-1-600x600.jpg',
                    price: 8390000,
                    type: 'laptop',
                    OS:'Window 10 Home SL',
                    CPU: 'Intel core i7 Ice Lake 1065G7',
                    display: 'Full HD',
                    camera: '10MP',
                    memory: '128 Gb'
                },
                {
                    id: 26,
                    name: 'Pin sạc dự phòng 7.500mAh',
                    img: 'https://cdn.tgdd.vn/Products/Images/57/214975/pin-sac-du-phong-7500mah-ava-la-10k-1-ava-600x600.jpg',
                    price: 500000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'


                },
                {
                    id: 27,
                    name: 'Pin sạc dự phòng 7.500 mAh',
                    img: 'https://cdn.tgdd.vn/Products/Images/57/204428/pin-sac-du-phong-7500mah-ava-cat-3s-cam-trang-1-600x600.jpg',
                    price: 450000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'
                },
                {
                    id: 28,
                    name: 'Pin sạc dự phòng 7.500 mAh',
                    img: 'https://cdn.tgdd.vn/Products/Images/57/197287/pin-sac-du-phong-7500mah-ava-la-ct23-add-600x600.jpg',
                    price: 220000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'
                },
                {
                    id: 29,
                    name: 'Pin sạc dự phòng Polymer 10.000 mAh',
                    img: 'https://cdn.tgdd.vn/Products/Images/57/145723/polymer-10000-mah-type-c-esaver-pj-jp106s-avatar-1-600x600.jpg',
                    price: 450000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'
                },
                {
                    id: 30,
                    name: 'Pin sạc dự phòng Polymer 10.000mAh',
                    img: 'https://cdn.tgdd.vn/Products/Images/57/214689/sac-du-phong-polymer-10000mah-c-xmobile-pw37y5b-1-600x600.jpg',
                    price: 600000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'
                },
                {
                    id: 31,
                    name: 'Tai nghe chụp tai Mozard',
                    img: 'https://cdn.tgdd.vn/Products/Images/54/209307/tai-nghe-chup-tai-mozard-ip-878-den-reu-add-600x600.jpg',
                    price: 1000000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'
                },
                {
                    id: 32,
                    name: 'Cáp Lightning 1m Xmobile LTL-01',
                    img: 'https://cdn.tgdd.vn/Products/Images/58/215781/cap-lightning-1m-xmobile-ltl-01-xanh-reu-1-1-600x600.jpg',
                    price: 600000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'
                },
                {
                    id: 33,
                    name: 'Miếng dán kính full màn hình iPhone Xs',
                    img: 'https://cdn.tgdd.vn/Products/Images/1363/213553/mieng-dan-kinh-full-man-hinh-xs-max-11-pro-max-gsp-600x600.jpg',
                    price: 300000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'
                },
                {
                    id: 34,
                    name: 'Sạc xe hơi Xmobile Dual USB',
                    img: 'https://cdn.tgdd.vn/Products/Images/58/135346/sac-xe-hoi-xmobile-dual-usb-ts-c063s-xam-avatar-1-600x600.jpg',
                    price: 500000,
                    type: 'phukien',
                    NSX:'China',
                    size:'12 Inches',
                    BaoHanh:'3 Tháng',
                    ThuongHieu:'Lê Nam Mobile'
                },



            ]
        }

    }
    UNSAFE_componentWillMount(){
        localStorage.setItem('products', JSON.stringify(this.state.products))
    }

    render() {


        return (
            <div>
                <div >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Phone ml-30">
                            <div><span className="fa fa-mobile mr-5" />ĐIỆN THOẠI</div>
                        </div>
                    </div>
                    <Phone viewDetail={this.props.viewDetail} products={this.state.products} addToCart={this.props.addToCart} />
                </div>
                <div >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Phone ml-30 mt-5">
                            <div><span className="fa fa-laptop mr-5" />LAPTOP</div>
                        </div>
                    </div>
                    <Laptop products={this.state.products} addToCart={this.props.addToCart} viewDetail={this.props.viewDetail} />
                </div>

                <div >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Phone ml-30 mt-5">
                            <div><span className="fa fa-headphones mr-5" />PHỤ KIỆN</div>
                        </div>
                    </div>
                    <PhuKien products={this.state.products} addToCart={this.props.addToCart} viewDetail={this.props.viewDetail}/>
                </div>

            </div>
        )
    }
}
