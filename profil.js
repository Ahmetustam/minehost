// Profil formunu seçiyoruz
const profileForm = document.getElementById('profile-form');
const profileUsername = document.getElementById('username');
const profileEmail = document.getElementById('email');
const profileBio = document.getElementById('bio');

// Profil bilgilerini tutacak HTML elemanları
const profileDisplayUsername = document.getElementById('profile-username');
const profileDisplayEmail = document.getElementById('profile-email');
const profileDisplayBio = document.getElementById('profile-bio');

// Kullanıcı bilgilerini localStorage'a kaydediyoruz
profileForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfa yenilemesini engelle
    
    // Profil bilgilerini al
    const username = profileUsername.value;
    const email = profileEmail.value;
    const bio = profileBio.value;

    // localStorage'a kaydediyoruz
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('bio', bio);

    // Profilin güncellenmesi için gösterimi yeniden yapıyoruz
    updateProfileDisplay();
});

// Sayfa yüklendiğinde profili göster
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('username')) {
        updateProfileDisplay();
    }
});

// Profili güncelleme fonksiyonu
function updateProfileDisplay() {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedBio = localStorage.getItem('bio');
    
    profileDisplayUsername.textContent = storedUsername;
    profileDisplayEmail.textContent = storedEmail;
    profileDisplayBio.textContent = storedBio;
}
