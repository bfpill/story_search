import squiggleImage from './assets/squiggle.png';
import starImage from './assets/star.png';
import triangleImage from './assets/triangle.png';
import swirlyImage from './assets/swirly.png';

// Definethe swirly animation
const swirlyAnimation = `
@keyframes swirly {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
const starAnimation = `
@keyframes star {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
`;

// Define the triangle animation
const triangleAnimation = `
@keyframes triangle {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}
`;

const getRandomPosition = () => {
  const imageWidth = 70; // Width of the shaking image (adjusted to 50px)
  const imageHeight = 70; // Height of the shaking image (adjusted to 50px)
  const left = Math.random() * (1400 - imageWidth * 2) + imageWidth / 2; // Random left position within the fixed width
  const top = Math.random() * (900 - imageHeight * 2) + imageHeight / 2; // Random top position within the fixed height
  return {
    top: `${top}px`,
    left: `${left}px`,
    position: 'absolute',
  };
};


// Add the swirly animation to the style tag
const styleTag = document.createElement('style');
styleTag.innerHTML = `
${swirlyAnimation}
${starAnimation}
${triangleAnimation}
`;
document.head.appendChild(styleTag);

const RenderShakingImages = (images, count) => {
  const shakingImages = [];
  const imageSize = 120;
  const opacity = 0.5;

  for (let i = 0; i < count; i++) {
    images.forEach((image, index) => {
      const animation = index === images.length - 1 ? 'swirly' : (image === triangleImage ? 'triangle' : 'shake');
      shakingImages.push(
        <img
          key={`${index}_${i}`}
          src={image}
          alt="Shaking Image"
          className={`shaking-image ${animation}`}
          style={{
            ...getRandomPosition(),
            width: `${imageSize}px`,
            height: `${imageSize}px`,
            opacity: opacity,
          }}
        />
      );
    });
  }
  return shakingImages;
};

export default RenderShakingImages 
