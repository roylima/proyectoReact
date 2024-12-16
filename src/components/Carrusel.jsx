import React, { useState } from 'react';
import "./Carrusel.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/introduccion-a-java-que-es-y-por-que-aprenderlo.jpg',
    altText: 'Java',
    caption: 'Java',
    key: 1,
  },
  {
    src: 'https://cdn.bap-software.net/2024/06/14204324/What-is-Python-3.12_11zon.webp',
    altText: 'Python',
    caption: 'Python',
    key: 2,
  },
  {
    src: 'https://cdn-ckjba.nitrocdn.com/XvHIXtRQMUYzLjoXbfBpiwAcydcSSOVj/assets/images/optimized/rev-81f45bc/www.ciat.edu/wp-content/uploads/2022/12/c-sharp-blog.jpeg',
    altText: 'C#',
    caption: 'C#',
    key: 3,
  },
  {
    src: 'https://raw.githubusercontent.com/exegeses/Javascript-dsd-0-45935/main/imagenes/javascript.jpg',
    altText: 'JavaScript',
    caption: 'JavaScript',
    key: 4,
  },

];

function Carrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrusel;