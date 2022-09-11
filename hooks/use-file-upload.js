import { useState, useEffect } from 'react';

const useFileUpload = function () {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFuntionHandler = function (e) {
    const uploadedImages = [...e.target.files];
    setImages((prevImages) => {
      return [...prevImages, ...uploadedImages];
    });

    // console.log(uploadedImages);
  };

  useEffect(() => {
    if (!images || images.length < 1) return;
    const imagesWithURLS = [];

    images.forEach((image) => {
      imagesWithURLS.push(URL.createObjectURL(image));
    });

    setImageUrls(imagesWithURLS);
  }, [images]);

  return { uploadFuntionHandler, images, imageUrls };
};

export default useFileUpload;
