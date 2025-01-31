import { useState, useEffect } from 'react'
import './styles/LandingBackground.css'
import { Image } from "@chakra-ui/react";

const imageFolder = '/assets/homepageCollage/'; // Corrected to public directory path
const totalImages = 42; // Total number of images in the folder, adjust based on your actual number of images

function LandingBackground() {
  const [images, setImages] = useState([]);

  // Load random images on component mount
  useEffect(() => {
    const randomImages = [];
    for (let i = 0; i < 20; i++) {  // For 4 columns and 4 rows, total of 16 images
      const randomIndex = Math.floor(Math.random() * totalImages) + 1; // Random index (assumes images are named 1.jpg, 2.jpg, etc.)
      randomImages.push(`${imageFolder}${randomIndex}.jpg`);
    }
    setImages(randomImages);
  }, []);

  // Handle missing images by providing a fallback image
  const handleImageError = (e) => {
    e.target.style.display = 'none'; // Hide broken images
  };

  return (
    <div className="background-grid">
      {images.map((image, index) => (
        <div className="grid-item" key={index}>
          <Image 
            src={image} 
            alt={`background-img-${index}`} 
            onError={handleImageError} // Hide image if it doesn't load
          />
        </div>
      ))}
    </div>
  );
}

export default LandingBackground;