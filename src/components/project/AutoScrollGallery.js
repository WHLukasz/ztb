import React from 'react';
import Carousel from 'react-multi-carousel';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

const AutoScrollGallery = ({ images, title }) => {

    return (
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:px-8 pb-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
                {title}
            </h2>
            <Carousel
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500} // Szybkość auto odtwarzania (1,5s)
                transitionDuration={500}
                responsive={responsive}
                arrows={false}
            >
                {images.map((image, index) => (
                    <div className="px-2" key={index}>
                        <GatsbyImage image={getImage(image.localFile)} alt={image.id} key={image.id} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default AutoScrollGallery;
