function loadPage(page) {
    let content = '';

    switch (page) {
        case 'home':
            content = getHomePage();
            break;
        case 'ab-items':
            content = getAboutItemPage();
            break;
        case 'check-order':
            content = getCheckOrderPage();
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
        initSilde(); // Gắn lại sự kiện slide sau khi tải trang about-items
    }else if(page == 'product'){
        selectedCheck();
    }
}

// Tải nội dung trang chủ mặc định khi tài liệu HTML được tải lần đầu tiên
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});


document.querySelectorAll('.menu__box-title').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        loadPage(event.target.getAttribute('onclick').match(/'([^']+)'/)[1]);
    });
});

