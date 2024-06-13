function showLoginModal() {
    closeModal('registerModal'); // Đảm bảo rằng modal đăng ký đã được đóng
    document.getElementById('loginModal').style.display = 'flex';
}

function showRegisterModal() {
    closeModal('loginModal'); // Đảm bảo rằng modal đăng nhập đã được đóng
    document.getElementById('registerModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}



