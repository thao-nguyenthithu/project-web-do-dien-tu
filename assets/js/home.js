function getHomePage() {
    return `
        <!-- Home Main -->
            <div class="home__top">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/Banner-big---Desk-1920x450-1.jpg" alt="">
            </div>
            <div class="grid">
                <div id="main" class="active">
                    <div class="container">
                    <div class="row row1">
                        <div class="list-images">
                            <img src="assets/img/background-ing.png" alt="">
                            <img src="assets/img/qc.jpg" alt="">
                            <img src="assets/img/qc1.jpg" alt="">
                            <img src="assets/img/qc2.jpg" alt="">
                            <img src="assets/img/qc3.jpg" alt="">
                            <img src="assets/img/qc4.jpg" alt="">
                            <img src="assets/img/qc5.jpg" alt="">
                            <img src="assets/img/qc6.png" alt="">
                        </div>
                        <div class="btns">
                            <div class="btn-left">
                                <button class="prev" onclick="moveSlide(-1)">❮</button>
                            </div>
                            <div class="btn-right">
                                <button class="next" onclick="moveSlide(1)">❯</button>                  
                            </div>
                        </div>
                    </div>
                <div class="row row2">
                    <h2>Danh mục nổi bật</h2>
                    <section class="img-boxcate">
                        <a href="javascript:void(0)" class="item-menu" onclick="switchPhone('main', 'main1')">
                            <article>
                                <img src="assets/img/fs9.jpg" alt="Điện thoại" class="boxcate-pink">
                                <div class="overlay"></div>
                            </article>
                            <h3>Điện thoại</h3>
                        </a>
                        <a href="">
                            <article>
                                <img src="assets/img/fs12.jpg" alt="ipad" class="boxcate-pink">
                            </article>
                            <h3>Máy tính bảng</h3>
                        </a>
                        <a href="">
                            <article>
                                <img src="assets/img/fs11.jpg" alt="laptop">
                            </article>
                            <h3>Laptop</h3>
                        </a>
                        <a href="">
                            <article>
                                <img src="assets/img/fs2.jpg" alt="dongho">
                            </article>                                
                            <h3>Đồng hồ thông minh</h3>
                        </a>
                        <a href="">
                            <article>
                                <img src="assets/img/fs7.jpg" alt="dongho">
                            </article>
                            <h3>Phụ kiện</h3>
                        </a>
                        <a href="">
                            <article>
                                <img src="assets/img/fs4.jpg" alt="dongho">
                            </article>
                            <h3>Gia dụng</h3>
                        </a>
                    </section>
                </div>

                <div class="event">
                    <img src="assets/img/qc8.jpg" alt="">
                </div>

                <div class="row row3">
                    <h2 style="margin: 1px; padding: 10px"><i class="fa-solid fa-bolt"></i>FLASH SALE</h2>
                    <!-- Product Item -->
                    <div class="about-item__container">
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/iphone15.jpeg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs1.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                         <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs2.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs3.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs4.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>

                <div class="row row4">
                    <div class="list-images">
                        <img src="assets/img/row4_1.jpg" alt="">
                        <img src="assets/img/row4_3.jpg" alt="">
                        <img src="assets/img/row4_4.jpg" alt="">
                        <img src="assets/img/row4_2.png" alt=""> 
                    </div>
                    <div class="btns">
                        <div class="btn-left">
                            <button class="prev" onclick="moveSlide(-1)">❮</button>
                        </div>
                        <div class="btn-right">
                            <button class="next" onclick="moveSlide(1)">❯</button>                        
                        </div>
                    </div>
                </div>

                <div class="row row5">
                    <h2 style = "margin: 14px; padding: 12px">Gợi ý hôm nay</h2>
                    <!-- Product Item -->
                    <div class="about-item__container">
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs5.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs6.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs7.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs8.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                       <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs9.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs10.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs11.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/fs12.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product1.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product2.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product3.jpeg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product4.jpeg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product5.jpeg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product6.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product7.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product8.jpeg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product9.jpg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product10.jpeg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/product11.jpeg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="infor__container-ab-item">
                            <div class="infor__container-ab-product">
                                <a href="#" onclick="loadPage('product'); return false;">
                                    <div class="ab-product__discount-tag">Giảm 13%</div>
                                    <div class="ab-product__img">
                                        <img src="assets/img/iphone15.jpeg" alt="iPhone 15 Pro 128GB">
                                    </div>
                                    <div class="ab-product__name">iPhone 15 Pro 128GB</div>
                                    <div class="ab-product__charac">
                                        <button>256 GB</button>
                                        <button>512 GB</button>
                                        <button>1 TB</button>
                                    </div>
                                    <div class="ab-product__price">
                                        <span class="current-price">24.490.000đ</span>
                                        <span class="original-price">27.990.000đ</span>
                                    </div>
                                    <div class="ab-product__installment">
                                        Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                    </div>
                                </a>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    `;
}

