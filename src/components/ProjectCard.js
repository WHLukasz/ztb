import React from 'react';
import { Link } from 'gatsby';
import { Card } from 'flotiq-components-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProjectCard = ({ onClick, name, excerpt, image, slug }) => {
    const imageSize = { width: 296, height: 296 };
    return (
        <Link to={`/projekty/${slug}`} className="basis-full md:basis-2/4 lg:basis-1/4">
            <Card
                onClick={onClick}
                bordered={false}
                additionalClasses={['cursor-pointer bg-white']}
                style={{ height: '380px' }}
            >
                {image && (
                    <GatsbyImage
                        image={getImage(image)}
                        alt={name}
                        imgClassName={['order-1 lg:order-2']}
                        imageadditionalprops={imageSize}
                        style={{ height: '200px' }}
                    />
                )}
                <Card.Body additionalClasses={['px-0 md:px-0']}>
                    <div>
                        <Card.Title
                            additionalClasses={['uppercase text-xl md:text-2xl line-clamp-2']}
                            style={{ height: '60px' }}
                        >
                            {name}
                        </Card.Title>
                        <Card.Text
                            additionalClasses={['text-sm md:text-base font-sora font-light line-clamp-1']}
                            style={{ height: '50px' }}
                        >
                            <span dangerouslySetInnerHTML={{ __html: excerpt }} />
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default ProjectCard;
