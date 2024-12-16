import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://lnds.net/blog/lnds/2018/09/23/ceros-y-unos/featured.png',
    altText: '1',
    caption: '1',
    key: 1,
  },
  {
    src: 'https://i0.wp.com/erainnovator.com/wp-content/uploads/2021/05/Fortran-Programming-Language.png?fit=2560%2C1440&ssl=1',
    altText: '2',
    caption: '2',
    key: 2,
  },
  {
    src: 'https://www.esic.edu/sites/default/files/2024-02/lenguaje%20cobol.jpeg',
    altText: '3',
    caption: '3',
    key: 3,
  },
  {
    src: 'https://i.blogs.es/9bc038/kat/1366_2000.jpg',
    altText: '4',
    caption: '4',
    key: 4,
  },
  {
    src: 'https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__ea189b36-6906-46db-8767-90cb01085909&w=3840&q=75',
    altText: '5',
    caption: '5',
    key: 5,
  },
];

function Carrusel2(args) {
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

export default Carrusel2;