import React, { useState } from "react";

const Welcome = () => {
  // Estados para controlar a visibilidade de cada bloco
  const [open, setOpen] = useState([false, false, false, false, false]);

  // Função para alternar a visibilidade de um bloco específico
  const toggleVisibility = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  // Dados para cada bloco
  const blocks = [
    "Bem-vindo ao nosso site, um espaço dedicado a guardar as memórias preciosas de uma amizade inesquecível. Aqui, você encontrará um refúgio para eternizar os momentos compartilhados, as risadas, as aventuras e os laços que unem a gente. É um lugar onde cada lembrança tem seu espaço especial, onde cada página conta uma história de cumplicidade e afeto.",
    "Neste site, a amizade é celebrada e honrada como um tesouro único e valioso. Cada foto, cada mensagem, cada lembrança é uma peça fundamental desse quebra-cabeça chamado amizade. Aqui, você poderá reviver os instantes mágicos que fizeram o coração sorrir e a alma vibrar.",
    "Nossa plataforma foi projetada para ser o guardião virtual desses momentos especiais. É um diário digital que preserva os abraços apertados, as conversas intermináveis, as aventuras e os desafios compartilhados. Um lugar onde as memórias ganham vida e se tornam eternas.",
    "Seja bem-vindo a este universo de recordações, onde a amizade encontra seu espaço para brilhar. Convidamos você a criar suas páginas, a compartilhar suas histórias e a preservar a magia da sua amizade. Prepare-se para reviver emoções, para se conectar com as lembranças e para celebrar a força desse vínculo tão especial.",
    "Este site é o seu santuário de amizade, um lugar para guardar e celebrar cada momento vivido ao lado de alguém que se tornou mais do que um amigo, um verdadeiro irmão de coração. Aproveite e mergulhe nesse oceano de memórias, pois aqui, a amizade nunca se apaga, ela se eterniza.",
  ];

  return (
    <React.Fragment>
      {blocks.map((content, index) => (
        <div
          key={index}
          onClick={() => toggleVisibility(index)}
          className={`cursor-pointer h-24 mb-4 bg-white border-l-8 border-blue-500 shadow-lg p-8 rounded-lg ${
            open[index]
              ? "w-[70%] h-[100%] opacity-100"
              : "w-[20%] h-[200px] opacity-75"
          } overflow-hidden`}
        >
          <blockquote
            className={`text-xl italic text-gray-800 transition-opacity duration-500 ease-in-out relative`}
          >
            <p>
              {open[index] ? (
                content
              ) : (
                <i
                  className="fa fa-2x fa-arrow-right text-blue-500 absolute top-10 right-2"
                  aria-hidden="true"
                />
              )}
            </p>
          </blockquote>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Welcome;
