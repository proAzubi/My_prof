import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { projects } from "../assets/data/projects";

function Portfolio() {
  return (
    <ProjectContainer>
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          projectName={project.name}
          projectImage={project.image}
          categories={project.categories}
        />
      ))}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: start;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = memo(function ProjectCard({
  projectName,
  projectImage,
  categories,
}) {
  return (
    <CardContainer>
      <Link
        to={`/project/${encodeURIComponent(projectName)}`}
        style={{ textDecoration: "none" }}
      >
        <ProjectImage
          src={projectImage}
          alt={projectName}
          loading="lazy"
          decoding="async"
        />
        <TechName>{categories}</TechName>
        <ProjectName>{projectName}</ProjectName>
      </Link>
    </CardContainer>
  );
});

const CardContainer = styled.article`
  flex: 1 0 45%;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
  content-visibility: auto;
  contain-intrinsic-size: 360px;

  @media (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

const ProjectImage = styled.img`
  width: 90%;
  height: 300px;
  object-fit: cover;
  display: block;
`;

const TechName = styled.h3`
  border: 1px solid grey;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 180px;
  font-size: 17px;
  color: #ffffff;
  border-radius: 10rem;
  padding: 5px 15px;
  font-weight: 300;

  ${CardContainer}:hover & {
    background-color: #8aa51d;
    color: black;
    border-color: transparent;
  }
`;

const ProjectName = styled.p`
  margin: 0 10px 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
`;

export default Portfolio;
