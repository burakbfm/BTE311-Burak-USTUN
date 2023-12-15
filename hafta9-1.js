const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
  // Sayfa yüklendiğinde ve her yenilendiğinde arka plan rengini değiştir
  changeBackgroundColor();
});

function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function toggleImage(index) {
  const selectedImageIndex = index - 1;
  const selectedImage = document.getElementById(`image${index}`);
  const displayStyle = selectedImage.style.display;

  // Resmi göster veya gizle
  selectedImage.style.display = displayStyle === 'none' || displayStyle === '' ? 'block' : 'none';
}
