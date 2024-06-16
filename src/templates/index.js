import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ProjectCards from '../sections/ProjectCards';
// import { useLocation } from '@reach/router';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../style/global.css';
import AutoScrollGallery from '../components/project/AutoScrollGallery';

const IndexPage = ({ data, pageContext }) => {
  const projects = data.allProject.nodes;
  // const location = useLocation();

    // google maps
  // const mapContainerStyle = { //parametry gla google maps
  //   width: '100%',
  //   height: '400px',
  // };

  // const center = {
  //   lat: 0, // Tutaj szerokość geograficzna (latitude) firmy dla google maps
  //   lng: 0, // Tutaj długość geograficzna (longitude) firmy dla google maps
  // };

  return (
    <Layout additionalClass={['bg-light-gray md:bg-white']}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={data.site.siteMetadata.description}
        />
      </Helmet>
      <div className="image-container relative separate-container">
        <GatsbyImage
          image={getImage(data.pages.image[0] && data.pages.image[0].localFile)}
          alt="main-page-image-display"
          className="w-full h-full object-cover"
          style={{
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            position: 'relative',
          }}
        />
        <div className="title-overlay">
          <h1 className="professional-title">Zakład Transportowo-Budowlany Krzysztof Wach</h1>
        </div>
      </div>

      {/* Treść pod głównym zdjęciem */}

      <div className="my-8 separate-container">
        <AutoScrollGallery
          title="Zaufali nam"
          images={data.pages.gallery}
          />
      </div>

      <div className="bg-white py-8">
        <div className="text-left max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center">
          {/* Zdjęcie */}
          <div className="flex justify-center items-center text-center md:text-left">
            <div className="md:w-7/8">
              <div className="relative md:ml-8">
                <img
                  src="https://api.flotiq.com/image/0x0/_media-e81faf1c-cc98-4257-8eef-dabd7370ee7d.jpg"
                  alt="Firma budowlana"
                  className="rounded-md w-full md:w-4/5 lg:w-3/4 xl:w-4/5"
                  style={{ filter: 'drop-shadow(10px 5px 4px #d4af37)' }}
                />
              </div>
            </div>
          </div>
          {/* Opis firmy */}
          <div className="w-full md:w-4/5 pr-8 text-center md:text-left ml-4">
            <h1>O nas</h1>
            <p className="index-block-text text-justify">
              Jesteśmy doświadczoną firmą budowlaną, specjalizującą się w
              realizacji różnorodnych projektów. Nasza pasja do budowania
              przekłada się na najwyższą jakość naszych usług.
            </p>
            {/* Przycisk "Czytaj więcej" */}
            <Link to="/o-nas" className="btn-primary mt-4">
              Czytaj więcej
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="my-8 text-left max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center">
          {/* Opis usług */}
          <div className="w-full md:w-4/5 pr-8 text-center-mobile md:text-left ml-4">
            <h1>Usługi</h1>
            <p className="index-block-text text-justify">
              Nasza firma oferuje szeroki zakres usług budowlanych
              w tym roboty ogólnobudowlane, usługi dźwigowe,
              transport samochodowy czy wynajem sprzętu.
            </p>
            {/* Przycisk "Czytaj więcej" */}
            <Link to="/uslugi" className="btn-primary mt-4">
              Czytaj więcej
            </Link>
          </div>
          {/* Zdjęcie */}
          <div className="flex justify-center items-center text-center md:text-left">
            <div className="md:w-7/8">
              <div className="relative md:ml-8">
                <img
                  src="https://api.flotiq.com/image/0x0/_media-c2ae2906-594a-496f-875c-78b4f76944ba.jpg"
                  alt="Firma budowlana"
                  className="rounded-md w-full md:w-4/5 lg:w-3/4 xl:w-4/5"
                  style={{ filter: 'drop-shadow(10px 5px 4px #d4af37)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa Google - opcjonalnie do dodania, obecnie nie mogę zmusić do działania */}
      <div className="py-8">
        {/* <LoadScript googleMapsApiKey="tutaj klucz google maps">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript> */}
      </div>

      {/* Portfolio */}
      <div style={{ backgroundColor: '#f5f5f5' }} className="py-8 mx-auto text-center">
        <h1>Zapoznaj się z naszym portfolio:</h1>
        <ProjectCards projects={projects} />
        <Pagination
          page={pageContext.currentPage}
          numOfPages={pageContext.numPages}
          baseUrl="/ztb/"
          rounded="yes"
          prev="poprz."
          next="nast."
        />
      </div>

      {/* "kontekst zielony" */}
      <div className="bg-green-400 py-4"></div> {/* Ciemnozielony pasek nad sekcją */}
      <div className="bg-green-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Nasza troska o środowisko
          </h2>
          <p className="text-lg text-center mb-6">
            Jesteśmy zobowiązani do dbania o środowisko i podejmowania działań na rzecz zrównoważonego rozwoju.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Energia odnawialna</h3>
              <p className="text-lg">
                Wykorzystujemy energię odnawialną w naszych operacjach, aby zmniejszyć nasz wpływ na środowisko.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Recykling</h3>
              <p className="text-lg">
                Promujemy recykling i ograniczamy ilość odpadów produkcyjnych, aby ograniczyć nasz ślad węglowy.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Ochrona przyrody</h3>
              <p className="text-lg">
                Angażujemy się w projekty ochrony przyrody i działań na rzecz zachowania różnorodności biologicznej.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-400 py-4"></div> {/* Ciemnozielony pasek pod sekcją */}

      {/* Kontakt */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center">
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
  query indexQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProject(
      sort: { flotiqInternal: { createdAt: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
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
          localFile {
            publicURL
          }
        }
      }
    }
    pages(slug: {eq: "main"}) {
      slug
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
      gallery {
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
`;

export default IndexPage;
