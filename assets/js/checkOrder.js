function getCheckOrderPage() {
    return `
        <div class="grid">
            <div class="order-check-form">
                <img src="assets/img/order-check.png" alt="">
                <div class="order__form-title">
                    <h1>Kiểm tra đơn hàng của bạn</h1>
                    <input type="text" value="" placeholder="Vui lòng nhập mã đơn hàng *" class="order__form-title--txt">
                    <div class="order__form-title--button">
                        <button type="submit">TRA CỨU</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
