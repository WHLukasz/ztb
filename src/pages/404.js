import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Header } from 'flotiq-components-react';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';

const NotFoundPage = () => (
    <Layout additionalClass={['bg-white']}>
        <Helmet>
            <title>Page not found</title>
        </Helmet>
        <Header alignment="center" additionalClasses={['my-20', '!py-20']}>
            Nie znaleziono strony
        </Header>
        <div className="text-center my-20 py-20">
            <Link to="/"><Button class="btn-primary" label="Wróć do strony głównej" /></Link>
        </div>
    </Layout>
);

export default NotFoundPage;
