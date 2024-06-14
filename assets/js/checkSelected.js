function selectedCheck() {
    const containers = document.querySelectorAll('.infor-item__ch--container');

    containers.forEach(container => {
        container.addEventListener('click', function() {
            containers.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}