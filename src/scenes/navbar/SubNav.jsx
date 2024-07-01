import React from 'react'

const SubNav = () => {

    const sections = [
        {
            name: 'SKILLS'
        },
        {
            name: 'WORK EXPERIENCE'
        },
        {
            name: 'PROJECTS'
        },
        {
            name: 'EDUCATION'
        },
        {
            name: 'CONTACT'
        },
    ]
  return (
    <div className="flex gap-2 justify-between items-center">
      {sections.map((s) => {
        return (
          <button className="dark:text-tertiary text-xs pt-2.5 pb-2 px-4 rounded-full hover:shadow-[inset_-3px_-2px_1px_0px_#04080f,inset_1px_1px_2px_0px_#fdfdfd59]">
            {s.name}
          </button>
        );
      })}
      <button>ChatBot</button>
    </div>
  );
}

export default SubNav