import React, { Component } from 'react'

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            news: [
                {
                    id: 1,
                    name: 'Mẹo đăng ảnh Facebook có bố cục đẹp và độc cực dễ mà không phải ai cũng có',
                    img: 'https://cdn.tgdd.vn/Files/2020/07/21/1272469/cach-chinh-anh-facebook-theo-bo-cuc-moi_1280x720-600x400.jpg',
                    content: 'Để tạo ra một ảnh độc lạ mang đậm dấu ấn cá nhân nhiều bạn nghĩ sẽ thật khó khi phải sử dụng các phần mềm trên laptop hay sẽ tốn rất nhiều thời gian suy nghĩ và chỉnh sửa với các phần mềm đơn giản trên smartphone. Nhưng mình có một giải pháp cực kì tuyệt vời cho các bạn nào muốn tạo ra một bứa ảnh cựa đẹp, cực kì cá nhân hóa, mà lại vô cùng đơn giản. Hãy cùng mình tìm hiểu xem làm sao với một cú click làm được điều này nhé.',
                    type: 'new',
                    title2:'Chúng ta sẽ cùng điểm qua xem những chiếc máy mới này từ các hãng sẽ có gì. Và liệu rằng khi cùng xuất hiện ở Việt Nam vào những tháng tới đây, thì chúng có giữ được độ hot cũng như thành công giống trên thị trường quốc tế không nhé!',
                    img2:'https://cdn.tgdd.vn/Files/2020/07/25/1273494/bodoi1_799x451.jpg'
                },
                {
                    id: 2,
                    name: 'Chia sẻ đến bạn những điện thoại Samsung đang giảm giá bán chạy nhất lúc này, máy chất giá tốt chớ nên bỏ lỡ',
                    img: 'https://cdn.tgdd.vn/Files/2020/07/21/1272531/thm_800x450.jpg',
                    content: 'Nhân dịp Samsung đang giảm giá rầm rộ, mình chia sẻ đến các bạn những điện thoại của hãng đang bán chạy nhất ở Thế Giới Di Động trong thời điểm diễn ra khuyến mãi này. Góp mặt toàn những cái tên chất lượng, chắc chắn bạn khó lòng có thể bỏ qua, cùng tham khảo ngay thôi nào.',
                    type: 'normal',
                    title2:'Tổng hợp rò rỉ Vsmart LUX: Camera ẩn dưới màn hình, mặt lưng đỏ tuyệt đẹp, giá chỉ 10 triệu liệu có đáng chờ?',
                    img2:'https://cdn.tgdd.vn/Files/2020/06/22/1264833/vsmart-lux-5g_800x638_800x638.png'
                },
                {
                    id: 3,
                    name: 'Tuần qua công nghệ có gì HOT 25/7: Samsung Thái Lan cho đặt trước Galaxy Note 20. Vivo Y51s 5G có giá 5.9 triệu',
                    img: 'https://cdn.tgdd.vn/Files/2020/07/19/1271968/galaxynote20_800x450.jpg',
                    content: 'Chuyên mục tuần qua công nghệ có gì HOT 25/7 với những thông tin đáng chú ý như: Samsung Thái Lan đã bắt đầu cho đặt trước Galaxy Note 20, 1.000 người mua đầu tiên sẽ có cơ hội nhận được bút S Pen độc đáo. Vivo Y51s ra mắt: Smartphone 5G có 3 camera sau hỗ trợ quay video 4K, pin 4.500 mAh, giá 5.9 triệu đồng.',
                    type: 'normal',
                    title2:'Ngày thêm nhiệt với loạt smartphone OPPO cấu hình mạnh camera đỉnh giảm tới 2 triệu đồng, fans mê OPPO mau vào xem',
                    img2:'https://cdn.tgdd.vn/Files/2020/07/26/1273793/oppo_800x450.jpg'
                },
                {
                    id: 4,
                    name: 'Cuối tuần thảnh thơi sao không tham khảo ngay những laptop này, đang giảm giá lên tới 20% và kèm nhiều ưu đãi hấp dẫn',
                    img: 'https://cdn.tgdd.vn/Files/2020/07/17/1271460/thumb_800x450.jpg',
                    content: 'Cuối tuần thảnh thơi sao không tham khảo ngay danh sách những laptop này, đang giảm giá lên tới 20%, đã thế còn đi kèm nhiều quà tặng, ưu đãi giá trị. Nếu như bạn là sinh viên, dân văn phòng đang có nhu cầu lên đời laptop thì đây chính là lúc, cơ hội để bạn săn máy vừa xịn giá vừa mềm.',
                    type: 'normal',
                    title2:'Chúng ta sẽ cùng điểm qua xem những chiếc máy mới này từ các hãng sẽ có gì. Và liệu rằng khi cùng xuất hiện ở Việt Nam vào những tháng tới đây, thì chúng có giữ được độ hot cũng như thành công giống trên thị trường quốc tế không nhé!',
                    img2:'https://cdn.tgdd.vn/Files/2020/07/25/1273494/bodoi1_799x451.jpg'
                },
                {
                    id: 5,
                    name: 'Khuyến mãi HOT hôm nay: Điện thoại độc quyền ưu đãi ngon lành, laptop giảm giá xịn xò đúng dịp cuối tuần, vào tham khảo liền',
                    img: 'https://cdn.tgdd.vn/Files/2020/07/19/1271988/kmhot267_800x450.jpg',
                    content: 'Săn ngay sale vàng trong hôm nay, ưu đãi quá ngon mang về hàng xịn. Smartphone độc quyền ưu đãi khá hời, laptop cho ra sale ngon ngay cuối tuần... Khuyến mãi thích mê, rinh về khỏi chê. Sale xịn chờ bạn, đừng bỏ lỡ tiếc lắm đó nha. Mỗi ngày là những deal hấp dẫn cho bạn tham khảo, theo dõi cùng mình nè.',
                    type: 'normal',
                    title2:'iPhone 12 giá rẻ là có thật, bằng chứng là màn hình LCD 5.4 inch vừa lộ ảnh thực tế rồi này, có cả notch tai thỏ luôn',
                    img2:'https://cdn.tgdd.vn/Files/2020/07/27/1274203/0_1200x675-800-resize.jpg'
                },
                {
                    id: 6,
                    name: 'Hướng dẫn các bước khai báo y tế online cực nhanh chóng',
                    img: 'https://cdn.tgdd.vn/Files/2020/03/09/1241041/yte_1000x562-800-resize.jpg',
                    content: 'Với tình hình diễn biến phức tạp của dịch bệnh Corona hiện tại, việc khai báo sức khỏe toàn dân đã được chính phủ triển khai. Và ngay bây giờ bạn có thể thực hiện điều này thông qua ứng trang web của Bộ Y Tế.  Đầu tiên, các bạn truy cập vào trang web www.ToKhaiYTe.vn. Sau khi bấm vào bạn hãy chọn Ngôn ngữ bằng các biểu tượng lá cờ, có đến 10 ngôn ngữ khác nhau.',
                    type: 'hot',
                    title2:'Microsoft Surface Book 4 xuất hiện với ngoại hình nhỏ gọn, 2 trong 1 rất chi là tiện lợi luôn',
                    img2:'https://cdn.tgdd.vn/Files/2020/07/27/1274109/surface-book-4-thmb1_800x450.jpg'
                },
                {
                    id: 7,
                    name: 'Kỳ vọng gì ở Galaxy A72: Pin 6.000 mAh, chip Qualcomm và Camera chống rung OIS...',
                    img: 'https://cdn.tgdd.vn/Files/2020/07/16/1271243/thdfujkv_800x450.jpg',
                    content: 'thừa thắng xông lên, Sau chiếc Galaxy A71 thì Galaxy A72 tiếp tục sẽ là con át tiếp theo Samsung muốn đánh vào phân khúc điện thoại tầm trung. "Vũ khí" lần này của Galaxy A72 chính là khả năng chống rung quang học OIS. Không những vậy, bạn còn kỳ vọng gì ở Galaxy A72? Thử xem những gì mà nhiều người khác cũng đang mong chờ ở Galaxy A72 nhé.',
                    type: 'hot',
                    title2:'Chúng ta sẽ cùng điểm qua xem những chiếc máy mới này từ các hãng sẽ có gì. Và liệu rằng khi cùng xuất hiện ở Việt Nam vào những tháng tới đây, thì chúng có giữ được độ hot cũng như thành công giống trên thị trường quốc tế không nhé!',
                    img2:'https://cdn.tgdd.vn/Files/2020/07/25/1273494/bodoi1_799x451.jpg'
                },
                {
                    id: 8,
                    name: 'Đập hộp và trên tay OPPO Reno4 Pro tại Việt Nam: Mặt lưng trắng trẻo tinh khôi và vẫn có 4 camera ở mặt lưng nhưng to hơn',
                    img: 'https://cdn.tgdd.vn/Files/2020/07/22/1272684/opporeno4protrang-1_1280x720-800-resize.jpg',
                    content: 'sau nhiều thời gian chờ đợi, mẫu smartphone OPPO Reno4 Pro đã chính thức xuất hiện tại thị trường Việt. Hãy cùng mình trên tay OPPO Reno4 Pro tại Việt Nam xem phiên bản này có những gì khác biệt nhé.',
                    type: 'hot',
                    title2:'Huawei Enjoy Tablet 2 lộ cấu hình, kích thước màn hình 10.1 inch, dùng chip tương tự Honor Tab 6 và Tab X6',
                    img2:'https://cdn.tgdd.vn/Files/2020/07/27/1274170/honor-tablet-x6_800x450.jpg'
                },
            ],
            newDetails : []
        })
    }
    ViewNews = (ele) =>{
        this.props.ViewNews(ele);
    }

    render() {
        var { news } = this.state;
        var ele,normal =[], hot = [] ;
        news.forEach((element, index) => {
         
           if(element.type ==='new') return ele = element;
           if(element.type ==='normal') normal.push(element);
           if(element.type ==='hot') hot.push(element);
        })
        console.log(normal);
        if (ele !== null) {
            var newest = (<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <img src={ele.img} style={{ width: 570 }} alt=" "></img>
                <h3><a href="/news/detail" onClick = {()=>this.ViewNews(ele)}>{ele.name}</a></h3>
                <h4>{ele.content}</h4>
            </div>);
        }
        var eleNormal;
        var check = true;
        if(normal){
          eleNormal =  normal.map((params,index) =>{
                return check === true ? (
                    <div key={index}>
                    <img src={params.img} style= {{width:250}} alt=" "></img>
                        <h3><a href="/news/detail" onClick = {()=>this.ViewNews(params)}>{params.name} </a></h3>
                        {check = false}
                        </div>
                ) : <h4 key={index} className="border-top-bottom" ><a href="/news/detail" onClick = {()=>this.ViewNews(params)}>{params.name}</a></h4>
            })
        }
        var eleHot;
     
        if(hot){
            eleHot =  hot.map((params,index) =>{
               return(
               <h3 key={index}><a href="/news/detail"  onClick = {()=>this.ViewNews(params)}>{params.name}</a></h3>
               )
            })
        }
        return (
            <div>
                <ul className="breadcrumb">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/news" >News </a>
                    </li>

                </ul>

                <div className="row">
                    {newest}
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        
                        {eleNormal}
                        {/* <h4 className="border-top-bottom" ><a href=" " >Chia sẻ đến bạn những điện thoại Samsung đang giảm giá bán chạy nhất lúc này, máy chất giá tốt chớ nên bỏ lỡ</a></h4>
                        <h4 className="border-top-bottom" ><a href=" " >Khuyến mãi HOT hôm nay: Điện thoại độc quyền ưu đãi ngon lành, laptop giảm giá xịn xò đúng dịp cuối tuần, vào tham khảo liền</a></h4> */}
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img alt=" " src="https://cdn.tgdd.vn/2020/07/banner/publicpreview(6)-380x215.png"></img>
                        <h3 className="titlehome breadcrumb">Thảo luận nhiều</h3>
                        {eleHot}
                        {/* <h3><a href=" ">Kỳ vọng gì ở Galaxy A72: Pin 6.000 mAh, chip Qualcomm và Camera chống rung OIS</a></h3>
                        <h3><a href=" ">Đập hộp và trên tay OPPO Reno4 Pro tại Việt Nam: Mặt lưng trắng trẻo tinh khôi và vẫn có 4 camera ở mặt lưng nhưng to hơn</a></h3> */}
                    </div>
                </div>


            </div>
        )
    }
}
