// scripts.js

// Fonction pour ouvrir/fermer la sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted');
}

// Fonction pour rediriger vers une page vidéo
function redirectToVideo(videoPage) {
    window.location.href = videoPage;
}

// Fonction pour ajouter un commentaire
function addComment() {
    const commentText = document.querySelector('.comment-section textarea').value;
    if (commentText.trim() !== "") {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `<p>${commentText}</p>`;
        document.querySelector('.comments-list').appendChild(commentElement);
        document.querySelector('.comment-section textarea').value = "";
    }
}