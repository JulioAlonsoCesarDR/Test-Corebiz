import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselView = () => {
  const imgs = [
    {
      url: "https://picsum.photos/100/300",
      title: "¡Hola! ¿Qué es lo que buscas?",
      subtitle: "Crear o migrar tu comercio electrónico?",
      id: 1,
    },
    {
      url: "https://picsum.photos/100/301",
      title: "¡Hola! ¿Qué es lo que buscas?",
      subtitle: "Crear o migrar tu comercio electrónico?",
      id: 2,
    },
    {
      url: "https://picsum.photos/100/302",
      title: "¡Hola! ¿Qué es lo que buscas?",
      subtitle: "Crear o migrar tu comercio electrónico?",
      id: 3,
    },
    {
      url: "https://picsum.photos/100/303",
      title: "¡Hola! ¿Qué es lo que buscas?",
      subtitle: "Crear o migrar tu comercio electrónico?",
      id: 4,
    },
  ];
  return (
    <>
      <Carousel>
        {imgs.map((img) => {
          return (
            <div
            key={img.id}
              className="vw-100 d-flex justify-content-center"
              style={{
                height: "300px",
                backgroundImage: `url(${img.url})`,
                backgroundSize: "cover",
              }}
            >
              <div className="container text-white mt-10 mt-5">
                <h3>{img.subtitle}</h3>
                <p>{img.title}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselView;
