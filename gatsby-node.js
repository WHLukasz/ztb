const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const portfolioProject = path.resolve('./src/templates/portfolio-project.js');
    const bookletPages = path.resolve('./src/templates/pages.js');
    const result = await graphql(`
    query GetProjects {
        allPages {
          edges {
            node {
              slug
            }
          }
        }
        allProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

    if (result.errors) {
        throw result.errors;
    }
    const projects = result.data.allProject.edges;

    // paginated index
    const projectsPerPage = 3;
    const numPages = Math.ceil(projects.length / projectsPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: path.resolve('./src/templates/index.js'),
            context: {
                limit: projectsPerPage,
                skip: i * projectsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

    // Stwórz strony statyczne dla wszystkich projektów
    projects.forEach((project, index) => {
        const previous = index === projects.length - 1 ? null : projects[index + 1].node;
        const next = index === 0 ? null : projects[index - 1].node;

        createPage({
            path: `/projekty/${project.node.slug}`,
            component: portfolioProject,
            context: {
                slug: project.node.slug,
                previous,
                next,
            },
        });
    });

    // Stwórz strony statyczne z katalogu `pages`
    const pages = result.data.allPages.edges;
    pages.forEach((page) => {
        createPage({
            path: `/${page.node.slug}`,
            component: bookletPages,
            context: {
                slug: page.node.slug
            }
        });
    });
};
