// Resimlerin adlarını değiştirerek kendi resim dosyalarınızı ekleyebilirsiniz.
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function toggleImage1() {
  const imageElements = document.querySelectorAll('img');
  imageElements.forEach(img => {
    img.style.display = 'none';
  });

  currentIndex = (currentIndex + 1) % images.length;
  const currentImage = document.getElementById(`image${currentIndex}`);
  currentImage.style.display = 'block';
}




