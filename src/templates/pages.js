import React from 'react';
import { graphql } from 'gatsby';
import { Header, Paragraph } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../layouts/layout';

const PageTemplate = ({ data }) => {
    const { pages } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>{pages.title}</title>
                <meta
                    name="description"
                    content={pages.description}
                />
            </Helmet>
            
            <div className="image-container relative">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                    }}
                />
                {pages.image[0] && (
                    <GatsbyImage
                        image={getImage(pages.image[0] && pages.image[0].localFile)}
                        alt={pages.title}
                        className="w-full h-full object-cover"
                        style={{
                            zIndex: 1,
                        }}
                    />
                )}
            </div>

            <div className="page-content flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 items-center"> 
                <div className="border-4 border-white p-6">
                    <Header
                        additionalClasses={['uppercase mb-12 text-3xl md:text-4xl lg:text-5xl']}
                    >
                        {pages.title}
                    </Header>
                    <Paragraph
                        additionalClasses={['col-span-2 bg-gray-200 rounded-md p-6 shadow-md verdana-font text-base md:text-lg']}
                    >
                        {pages.content}
                    </Paragraph>
                </div>
            </div>

            <div className="footer flex flex-wrap md:flex-nowrap justify-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-20">
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
}

export const pageQuery = graphql`
    query GetPages($slug: String) {
        pages(slug: {eq: $slug}) {
            slug
            title
            description
            image {
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
            content
        }
    }
`

export default PageTemplate;
