// İletişim formu için basit validasyon
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Mesajınız gönderildi! Sizinle en kısa sürede iletişime geçeceğiz.");
  document.getElementById("contact-form").reset();
});
