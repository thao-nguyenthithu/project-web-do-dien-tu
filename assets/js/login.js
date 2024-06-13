function showLoginModal() {
    closeModal('registerModal'); 
    document.getElementById('loginModal').style.display = 'flex';
}

function showRegisterModal() {
    closeModal('loginModal'); 
    document.getElementById('registerModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}



