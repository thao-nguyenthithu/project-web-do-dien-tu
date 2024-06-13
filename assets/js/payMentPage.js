function getPayMentPage() {
    return`
        <div class="grid">
            <main id="wrap-payment">
            <div class="wrap-payment-container">
                <div class="payment-img">
                    <a href=""><img src="assets/img/product6.jpg" alt=""></a>
                </div>
                <div class="payment-information">
                    <div class="payment-information-sl">
                        <div><h2>iPhone 15 Pro Max 256GB</h2></div>
                        <div class="payment-infomation-sl-right">
                            <div class="chance" data-price="29990000">
                                <button class="chance__btn btn-delete" onclick="deleteItem(this)"><i class="fa-solid fa-trash-can"></i></button>
                                <div class="soluong">
                                    <button class="chance__btn btn-minus" onclick="decreaseQuantity(this)">-</button>
                                    <span class="quantity" id="quantity">1</span>
                                    <button class="chance__btn btn-plus" onclick="increaseQuantity(this)">+</button>
                                </div>
                                <div class="gia">
                                    <span class="price" id="price">29.990.000 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="payment__color">
                        <span class="text_color">Màu sắc:</span> 
                        <select name="color" class="color-selec_N">
                            <option selected>Titan Xanh</option>
                            <option>Titan Tự Nhiên</option>
                            <option>Titan Trắng</option>
                            <option>Titan Đen</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-container">
                <div class="form-group">
                    <label>Thông tin người nhận</label>
                    <div class="radio-group">
                        <input type="radio" id="male" name="gender" value="male">
                        <label for="male">Anh</label>
                        <input type="radio" id="female" name="gender" value="female" checked>
                        <label for="female">Chị</label>
                    </div>
                </div>
                <div class="form-group2">
                    <label for="name">Họ và tên*</label>
                    <input type="text" id="name" placeholder="Họ và tên người nhận">
                </div>
                <div class="form-group2">
                    <label for="phone">Số điện thoại*</label>
                    <input type="text" id="phone" placeholder="Số điện thoại người nhận">
                </div>
                <div class="form-group2">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email người mua hàng">
                    <small>Vui lòng điền email để nhận thông tin chi tiết về đơn hàng và hóa đơn VAT (nếu có).</small>
                </div>
                <div class="form-group2">
                    <label for="message">Lời nhắn</label>
                    <textarea id="message" placeholder="Nhập nội dung"></textarea>
                </div>
                <div class="form-group2">
                    <label>Hình thức nhận hàng</label>
                    <div class="btn-group">
                        <button type="button" class="active" onclick="selectDeliveryMethod(this)">Giao hàng tận nơi</button>
                        <button type="button" onclick="selectDeliveryMethod(this)">Nhận hàng tại cửa hàng</button>
                    </div>
                </div>
                <div class="form-group2">
                    <label for="city">Tỉnh / Thành phố*</label>
                    <select id="city">
                        <option>Hà Nội</option>
                        <option>Hồ Chí Minh</option>
                        <option>Hưng Yên</option>
                        <option>Đà Nẵng</option>
                        <option>Huế</option>
                        <option>Hà Nam</option>
                    </select>
                </div>
                <div class="form-group2">
                    <label for="district">Quận / Huyện*</label>
                    <select id="district">
                        <option>Chọn Quận/Huyện*</option>
                        <option>Huyện Ba Vì</option>
                        <option>Huyện Chương Mỹ</option>
                        <option>Huyện Thanh Oai</option>
                        <option>Quận Hoàng Mai</option>
                        <option>Quận Nam Từ Niêm</option>
                        <option>Quận Thanh Xuân</option>
                        <option>Quận Hoàn Kiếm</option>
                    </select>
                </div>
                <div class="form-group2">
                    <label for="ward">Phường / Xã*</label>
                    <select id="ward">                        
                        <option>Chọn phường, xã</option>                 
                        <option>Xã Cao Viên</option>
                        <option>Xã ...</option>
                        <option>Chọn phường, xã</option>
                        <option>Chọn phường, xã</option>
                    </select>
                </div>
                <div class="form-group2">
                    <label for="address">Địa chỉ*</label>
                    <input type="text" id="address" placeholder="Nhập địa chỉ">
                </div>
                <div class="form-group checkbox-group">
                    <input type="checkbox" id="vat" name="vat">
                    <label for="vat">Yêu cầu hóa đơn VAT</label>
                </div>
            </div>
            <div class="pttt">
                <h2>Phương thức thanh toán</h2>
                <div class="text">
                    <a href="" class="txt-menthod">Thanh toán online</a>
                    <a href="" class="txt-menthod">Thanh toán khi nhận hàng</a>
                </div>
            </div>
            <div class="total">Total: <a href=""><span id="total-price">29.990.000 đ</span></a></div>
            <div class="thanhtoan">Thanh Toán</div>
        </main>
        </div>
        
    `;
}