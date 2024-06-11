document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.infor-item__ch--container');

    containers.forEach(container => {
        container.addEventListener('click', function() {
            // Remove 'selected' class from all containers
            containers.forEach(c => c.classList.remove('selected'));
            // Add 'selected' class to the clicked container
            this.classList.add('selected');
        });
    });
});
