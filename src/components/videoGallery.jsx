const VideoGallery = () => {
  // Caminhos dos vídeos na pasta public
  const videos = Array.from({ length: 6 }, (_, i) => `video${i + 1}.mp4`);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Galeria de Vídeos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="relative group">
            <video
              controls
              className="w-full h-auto rounded-lg shadow-lg transition duration-300 transform group-hover:scale-105"
            >
              <source src={video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-semibold">
              Vídeo {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
