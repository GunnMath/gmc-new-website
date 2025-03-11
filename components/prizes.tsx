"use client";
import { useState, useEffect } from "react";

const ImageGallery = () => {
  const [prizes, setPrizes] = useState<{ src: string; caption: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/api/prizes")
      .then((res) => res.json())
      .then(setPrizes);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % prizes.length);
  };

  if (prizes.length === 0) return <p>Loading...</p>;

  return (
    <div className="relative h-[500px] w-auto mx-auto flex flex-col items-center justify-between p-4 rounded-lg mt-4">
      <img
        src={prizes[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        className="h-[350px] w-auto object-contain border-2 border-black"
      />
      <p className="text-lg text-center text-gray-700">
        {prizes[currentIndex].caption}
      </p>
      <button
        onClick={nextImage}
        className="px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Next
      </button>
    </div>
  );
};

export default ImageGallery;
