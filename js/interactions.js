function    Darkmode() {
    
}

const toggleBtn = document.getElementById('btn-theme');

toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});