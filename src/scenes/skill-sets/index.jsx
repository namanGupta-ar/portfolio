import Redux from "@/assets/icons/Redux";
import ContentWrapper from "@/components/ContentWrapper";
import Heading from "@/components/Heading";
import Skill from "@/components/Skill";
import React from "react";

const SkillsWrapper = ({heading,children}) => (
  <div className="w-full px-[20px] md:px-0 md:w-auto">
    <p className="text-center text-primary mb-4">{heading}</p>
    <div className="flex justify-between flex-grow md:gap-10">
      {children}
    </div>
  </div>
);

const SkillSet = () => {
  return (
    <ContentWrapper>
      <Heading>SHOWCASING SKILLSET</Heading>
      <div className="flex flex-col gap-8 justify-between items-center w-full md:flex-row">
        <SkillsWrapper heading="Front End">
            <Skill text="HTML" iconClass="fa-brands fa-html5" />
            <Skill text="CSS" iconClass="fa-brands fa-css3-alt" />
            <Skill text="REACT" iconClass="fa-brands fa-react" />
            <Skill text="VUE" iconClass="fa-brands fa-vuejs" />
            <Skill text="JS" iconClass="fa-brands fa-js" />
        </SkillsWrapper>
        <SkillsWrapper heading="Tools">
            <Skill text="GIT" iconClass="fa-brands fa-gitlab" />
            <Skill text="GITHUB" iconClass="fa-brands fa-github" />
            <Skill text="Node" iconClass="fa-brands fa-node-js" />
            <Skill text="FIREBASE" iconClass="fa-solid fa-fire" />
            <Skill text="REDUX" icon={<Redux height={40} width={40} />} />
        </SkillsWrapper>
      </div>
      <SkillsWrapper heading="Others">
          <Skill text="GIT" iconClass="fa-brands fa-gitlab" />
          <Skill text="GITHUB" iconClass="fa-brands fa-github" />
          <Skill text="Node" iconClass="fa-brands fa-node-js" />
          <Skill text="FIREBASE" iconClass="fa-solid fa-fire" />
          <Skill text="REDUX" icon={<Redux height={40} width={40} />} />
      </SkillsWrapper>
    </ContentWrapper>
  );
};

export default SkillSet;
