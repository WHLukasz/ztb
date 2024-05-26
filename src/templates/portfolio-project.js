import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Header, Paragraph } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../layouts/layout';
import ProjectGallery from '../components/project/ProjectGallery';
import Contact from '../components/Contact';

const PortfolioProjectTemplate = ({ data }) => {
    const { project } = data;
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <Layout additionalClass={['bg-white']} style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
            <Helmet>
                <title>{project.name}</title>
                <meta name="description" content={project.description} />
            </Helmet>
            <div className="project-container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pb-10">
                <div className="project-image-container">
                    {project.headerImage[0] && (
                        <GatsbyImage
                            image={getImage(project.headerImage[0].localFile)}
                            alt={project.name}
                            className="project-image"
                        />
                    )}
                </div>
                <div className="project-text-container">
                    <Header additionalClasses={['uppercase mb-4 !text-3xl md:!text-4xl lg:!text-5xl']}>
                        {project.name}
                    </Header>
                    <Paragraph additionalClasses={['!text-base md:!text-lg font-light font-sora']} style={{ textAlign: 'justify' }}>
                        {project.description}
                    </Paragraph>
                </div>
            </div>
            <ProjectGallery
                galleryName={project.gallery_name}
                galleryDescription={project.gallery_description}
                gallery={project.gallery}
                name={project.name}
            />
            {/* stopka */}
            <div className="flex flex-wrap md:flex-nowrap justify-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-20">
                <div className="col-span-2 bg-gray-200 rounded-md p-6 shadow-md verdana-font">
                    <p className="font-bold text-2xl mb-4 text-gold">Zapraszamy do kontaktu z nami</p>
                    <p className="mb-4 text-gray-600">
                        Jesteśmy gotowi służyć pomocą i udzielić odpowiedzi na Państwa pytania. Poniżej znajdą Państwo nasze dane kontaktowe:
                    </p>
                    <div className="mb-4">
                        <p className="text-burgundy mb-2">Zakład Transportowo-Budowlany Krzysztof Wach</p>
                        <p className="text-gray-600">Adres: ul. Wspólna 23, 26-670 Pionki</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-burgundy mb-2">Skontaktuj się z nami:</p>
                        <p className="text-gray-600">Telefon: 048 612 59 10, 048 612 50 78</p>
                        <p className="text-gray-600">E-mail: <a href="mailto:ztb@ztb.com.pl" className="text-burgundy">ztb@ztb.com.pl</a></p>
                    </div>
                    <p className="text-gray-600">
                        Jesteśmy dostępni, aby zapewnić Państwu kompleksową obsługę. Czekamy na Państwa pytania i sugestie!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query PortfolioProjectBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        project(slug: { eq: $slug }) {
            id
            description
            slug
            name
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                    }
                }
            }
            gallery_name
            gallery_description
            gallery {
                extension
                url
                width
                height
                id
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                    }
                }
            }
        }
    }
`;

export default PortfolioProjectTemplate;
