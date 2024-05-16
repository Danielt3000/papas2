import React from "react";

const NewCard = () => {
  const cardsData = [
    {
      title: "Papa Fina",
      description:
        "Papa Fina: Versátil tubérculo cultivado globalmente, esencial en la dieta, valorado por su sabor y textura en diversas preparaciones culinarias.",
      image: "https://via.placeholder.com/300x200", // Placeholder image URL, replace with actual image URL
    },
    {
      title: "Papa Agata",
      description:
        "Papa Agata: piel fina, carne amarilla, apreciada por su sabor y textura en diferentes platillos.",
      image: "https://via.placeholder.com/300x200", // Placeholder image URL, replace with actual image URL
    },
    {
      title: "Papa Orquesta",
      description:
        "Papa Orquesta: Tubérculo excepcional, reconocido por su amplia gama de formas y sabores, una verdadera variedad culinaria.",
      image: "https://via.placeholder.com/300x200", // Placeholder image URL, replace with actual image URL
    },
  ];

  return (
    <div className="App container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="flex-grow flex flex-col justify-between p-6">
              <h3 className="text-xl font-bold mt-2">{card.title}</h3>
              <p className="text-gray-700 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCard;
