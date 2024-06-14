function loadPage(page) {
    let content = '';

    switch (page) {
        case 'home':
            content = getHomePage();
            break;
        case 'ab-items':
            content = getAboutItemPage();
            break;
        case 'order':
            content = getCheckOrderPage();
            break;
        case 'gioHang':
            content = getGioHangPage();
            break;
        case 'pay':
            content = getPayMentPage();
            break;
        case 'login':
            content = getLoginPage();
            break;
        case 'product':
            content = getProductDetailsPage();
            break;
        default:
            content = getHomePage();
            break;
    }

    document.getElementById('main-content').innerHTML = content;
    if (page === 'ab-items') {
        initSilde(); // Gắn lại sự kiện initSilde() sau khi tải trang about-items
    }
    if(page == 'product'){
        selectedCheck();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});


document.querySelectorAll('.menu__box-title').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        loadPage(event.target.getAttribute('onclick').match(/'([^']+)'/)[1]);
    });
});

