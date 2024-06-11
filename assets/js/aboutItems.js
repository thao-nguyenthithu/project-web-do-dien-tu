function getAboutItemPage() {
    return `
        <!-- main about item phones -->
            <div class="main__about-items">
                <div class="grid">
                    <section id="slider" class="about-slider">
                        <div class="ab-slides">
                            <div class="ab-slide__adv"><img src="https://cdn2.viettelstore.vn/images/Advertises/Cate-(5)_33659361631052024.png" alt=""></div>
                            <div class="ab-slide__adv"><img src="https://cdn2.viettelstore.vn/images/Advertises/Cate-(27)_30605461104062024.png" alt=""></div>
                            <div class="ab-slide__adv"><img src="https://cdn2.viettelstore.vn/images/Advertises/Cate-(6)_53051190910062024.png" alt=""></div>
                            <div class="ab-slide__adv"><img src="https://cdn2.viettelstore.vn/images/Advertises/Cate-(5)_33659361631052024.png" alt=""></div>
                            <div class="ab-slide__adv"><img src="https://cdn2.viettelstore.vn/images/Advertises/Cate-(5)_33659361631052024.png" alt=""></div>
                            
                        </div>
                        <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
                        <button class="next" onclick="moveSlide(1)">&#10095;</button>
                    </section>
                    <div>
                        <div class="grid" id="boder-container">
                            <div class="about-item__luachon">
                                <div class="about-item__brand">
                                    <div class="about-item__title">Hãng Sản Xuất</div>
                                    <div class="list__brand">
                                        <a href=""><img src="./assets/img/iphone.png" alt=""></a>
                                        <a href=""><img src="./assets/img/ss.png" alt=""></a>
                                        <a href=""><img src="./assets/img/reme.png" alt=""></a>
                                        <a href=""><img src="./assets/img/oop.png" alt=""></a>
                                        <a href=""><img src="./assets/img/nokia.png" alt=""></a>
                                        <a href=""><img src="./assets/img/xiao.png" alt=""></a>
                                        <a href=""><img src="./assets/img/vivo.png" alt=""></a>
                                        <a href=""><img src="./assets/img/sony.png" alt=""></a>
                                    </div>
                                </div>
                                <div>
                                    <div class="about-item__title">Lọc theo</div>
                                    <div class="about-item__filter">
                                        <div class="about-item__filter-warapper">
                                            <button class="ab__btn-filter">
                                                <i class="fa-solid fa-filter"></i>
                                                Bộ lọc
                                            </button>
                                            <div class="ab__list-filter">
    
                                            </div>
                                        </div>
                                        <div class="about-item__filter-warapper">
                                            <button class="ab__btn-filter">
                                                Mức giá
                                                <i class="fa-solid fa-sort-down"></i>               
                                            </button>
                                            <div class="ab__list-filter">
    
                                            </div>
                                        </div>
                                        <div class="about-item__filter-warapper">
                                            <button class="ab__btn-filter">
                                                Màn hình
                                                <i class="fa-solid fa-sort-down"></i>
                                            </button>
                                            <div class="ab__list-filter">
    
                                            </div>
                                        </div>
                                        <div class="about-item__filter-warapper">
                                            <button class="ab__btn-filter">
                                                Camera sau
                                                <i class="fa-solid fa-sort-down"></i>
                                            </button>
                                            <div class="ab__list-filter">
    
                                            </div>
                                        </div>
                                        <div class="about-item__filter-warapper">
                                            <button class="ab__btn-filter">
                                                Hệ điều hành
                                                <i class="fa-solid fa-sort-down"></i>
                                            </button>
                                            <div class="ab__list-filter">
    
                                            </div>
                                        </div><div class="about-item__filter-warapper">
                                            <button class="ab__btn-filter">
                                                Tính năng đặc biệt
                                                <i class="fa-solid fa-sort-down"></i>
                                            </button>
                                            <div class="ab__list-filter">
    
                                            </div>
                                        </div>
                                    </div>                                  
                                </div>
                                <div>
                                    <div class="about-item__title">Hãng Sản Xuất</div> 
                                    <div class="about-item__sapxep">
                                        <button class="ab-itme__sx--name">Phổ biến</button>
                                        <button class="ab-itme__sx--name">Mới nhất</button>
                                        <button class="ab-itme__sx--name">Bán chạy</button>
                                        <button class="ab-itme__sx--name">Giá tăng</button>
                                        <button class="ab-itme__sx--name">Giá giảm</button>       
                                    </div>
                                </div>
                            </div>
                            <!-- Block Product List -->
                            <div class="product-list__container">
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
                                                <div class="ab-product__installment">
                                                    Giảm thêm 500,000đ cho màu Titan Xanh (Đã trừ vào giá) (Không áp dụng cùng chương trình ...)
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="infor__container-ab-item">
                                        <div class="infor__container-ab-product">
                                            <a href="#">
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
                                    <div class="infor__container-ab-item">
                                        <div class="infor__container-ab-product">
                                            <a href="#">
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
                                    <div class="infor__container-ab-item">
                                        <div class="infor__container-ab-product">
                                            <a href="#">
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
                                    <div class="infor__container-ab-item">
                                        <div class="infor__container-ab-product">
                                            <a href="#">
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
                                    <div class="infor__container-ab-item">
                                        <div class="infor__container-ab-product">
                                            <a href="#">
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
            </div>
    `;
}
