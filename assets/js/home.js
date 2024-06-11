function getHomePage() {
    return `
        <!-- Home Main -->
            <div class="home__top">
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/Banner-big---Desk-1920x450-1.jpg" alt="">
            </div>
            <!-- slide adv -->
            <div class="grid">
                <div class="slideshow-container">
                    <div class="mySlides slide">
                        <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/720-220-720x220-9-720x220-1.png" style="width:100%">
                    </div>
                    <div class="mySlides slide">
                        <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/banner-may-lanh-chung-720x220-2.jpg" style="width:100%">
                    </div>
                    <div class="mySlides slide">
                        <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/06/banner/Ro1-min-720x220.png" style="width:100%">
                    </div>

                     <!-- Next and previous buttons -->
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                <br>
                <div style="text-align:center">
                    <span class="dot" onclick="currentSlide(1)"></span> 
                    <span class="dot" onclick="currentSlide(2)"></span> 
                    <span class="dot" onclick="currentSlide(3)"></span> 
                </div>
            </div>
    `;
}
