const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const sliderImage = document.getElementById('slider-image');

const images = ['image1.jpg', 'image2.webp', 'image3.jpeg', 'image4.jpg'];

let currentImageIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentImageIndex === images.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }

    sliderImage.src = images[currentImageIndex];
});

prevButton.addEventListener('click', () => {
    if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex--;
    }

    sliderImage.src = images[currentImageIndex];
});


// Task1: поменять цвет заднего фона на любой другой цвет по нажатию на одну кнопку, 
// а при нажатие на вторую кнопку вернуть цвет обратно

// Task2: на странице должно быть 2 параграфа с текстом и кнопка "Скрыть/Показать параграф".
// При нажатии на кнопку текст параграфа должен скрываться, а при повторном нажатии показываться.
// Для скрытия и показа текста используйте свойство element.style.display со значением none и block.


// Task3: 
// Начинающий: на странице должна быть одна картинка и кнопка, при нажатии на кнопку картинка
// должна меняться на другую картинку, при повторном нажатии на кнопку 
// должна вернуться первая картинка.
// Продвинутый: на странице должна быть одна картинка и две кнопки, при нажатии на 
// кнопку вперед несколько картинок должны меняться поочередно
// при нажати на кнопку назад картинки должны меняться в обратном порядке.