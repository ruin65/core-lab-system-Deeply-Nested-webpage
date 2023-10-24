// Define image URLs and sizes for each button
const imageUrls = {
    btnRed: 'color-red',
    btnOrange: 'color-orange',
    btnBlue: 'color-blue',
    btnNavy: 'color-navy',
    btnGreen: 'color-green',
    img1: 'types-1',
    img2: 'types-2',
    img3: 'types-3',
    img4: 'types-4',
    img5: 'types-5',
    img6: 'types-6',
};

const imageSize = {
    btnRed: { width: '50%' },
    btnOrange: { width: '50%' },
    btnBlue: { width: '50%' },
    btnNavy: { width: '50%' },
    btnGreen: { width: '50%' },
    img1: { width: '50%' },
    img2: { width: '50%' },
    img3: { width: '50%' },
    img4: { width: '50%' },
    img5: { width: '50%' },
    img6: { width: '50%' },
};

const buttons = document.querySelectorAll('button');
const images = document.querySelectorAll('img');
const imageContainerColor = document.getElementById('imageContainer-color');
const imageContainerTypes = document.getElementById('imageContainer-types');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonId = this.id;
        const imageClass = imageUrls[buttonId];
        const imageInfo = imageSize[buttonId];

        // 隐藏所有图片
        images.forEach(image => {
            image.style.display = 'none';
        });

        if (buttonId.startsWith('btn')) {
            // 显示颜色图片
            const selectedImage = imageContainerColor.querySelector('.' + imageClass);
            selectedImage.style.display = 'block';
            selectedImage.style.width = imageInfo.width;
        } else if (buttonId.startsWith('img')) {
            // 显示类型图片
            const selectedImage = imageContainerTypes.querySelector('.' + imageClass);
            selectedImage.style.display = 'block';
            selectedImage.style.width = imageInfo.width;
        }
    });
});

