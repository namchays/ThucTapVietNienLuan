import React, { Component } from 'react'

export default class Member extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            member: [
                {
                    id: 1,
                    name: 'Lê Trường Nam',
                    date: '16/06/1999',
                    gender: 'Nam',
                    address: 'Tiến Hóa',
                    phone: '0321127305'

                },
                {
                    id: 2,
                    name: 'Nguyễn Văn B',
                    date: '16/02/1999',
                    gender: 'Nam',
                    address: 'Huế',
                    phone: '0321307305'

                },
                {
                    id: 3,
                    name: 'Nguyễn Thị C',
                    date: '26/02/1992',
                    gender: 'Nữ',
                    address: 'Hải Châu',
                    phone: '0321321305'

                },
                {
                    id: 4,
                    name: 'Lê Thị D',
                    date: '26/06/2000',
                    gender: 'Nữ',
                    address: 'Quảng Ngãi',
                    phone: '0123227305'

                },
                {
                    id: 5,
                    name: 'Nguyễn Thị Hà',
                    date: '22/06/1997',
                    gender: 'Nữ',
                    address: 'Tiến Hóa',
                    phone: '0213307305'

                },
            ]
        })
    }

    render() {
        var { member } = this.state;
        var element = member.map((ele, index) => {
            return (
                <tbody key={index}>

                    <tr>
                        <td>{index + 1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.date}</td>
                        <td>{ele.gender}</td>
                        <td>{ele.address}</td>
                        <td>{ele.phone}</td>
                    </tr>
                </tbody>
            )
        })
        return (
            <div>


                <div className="container">

                    <div className="row">
                        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                            <table className="table table-hover mt-20 border">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Họ Tên</th>
                                        <th>Ngày Sinh </th>
                                        <th>Giới tính</th>
                                        <th>Địa Chỉ</th>
                                        <th>SĐT</th>
                                    </tr>
                                </thead>

                                {element}
                            </table>

                        </div>
                        
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            
                        </div>
                        
                    </div>

                </div>




            </div>
        )
    }
}
