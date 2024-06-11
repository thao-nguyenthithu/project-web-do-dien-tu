function selectedCheck() {
    const containers = document.querySelectorAll('.infor-item__ch--container');

    containers.forEach(container => {
        container.addEventListener('click', function() {
            // Xóa lớp 'selected' khỏi tất cả các container
            containers.forEach(c => c.classList.remove('selected'));
            // Thêm lớp 'selected' vào container được nhấp vào
            this.classList.add('selected');
        });
    });
}


