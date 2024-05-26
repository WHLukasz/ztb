import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectCards = ({ projects }) => {
    return (
        <div className="max-w-4xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 project-cards-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="w-full">
                        <ProjectCard
                            slug={project.slug}
                            image={project.headerImage[0].localFile}
                            name={project.name}
                            excerpt={project.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCards;
