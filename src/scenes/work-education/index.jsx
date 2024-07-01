import ContentWrapper from '@/components/ContentWrapper';
import Heading from '@/components/Heading';
import React from 'react'
import Education from './education';
import Work from './work';

const WorkAndEducation = () => {
  return (
        <ContentWrapper>
            <Education></Education>
            <Work></Work>
        </ContentWrapper>
  )
}

export default WorkAndEducation;