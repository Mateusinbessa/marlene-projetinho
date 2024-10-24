const PhotoGallery = () => {
  const images = Array.from({ length: 25 }, (_, i) => `foto${i + 1}.jpeg`);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Galeria de Fotos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Foto ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
