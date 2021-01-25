import React from 'react';
import ContainerBox from '../../component/ContainerBox';
import { experience, userExperienceData } from '../webData';
import ExperienceItem from '../../component/ExperienceItem';

const Experience = () => (
  <ContainerBox
    pageKey={experience.key}
  >
    <div>
      {
                userExperienceData.map((item) => {
                  const {
                    id,
                    title,
                    employmentType,
                    company,
                    companyIcon,
                    startedDate,
                    endDate,
                  } = item;

                  return (
                    <ExperienceItem
                      key={`experience_item_${id}`}
                      title={title}
                      employmentType={employmentType}
                      company={company}
                      companyIcon={companyIcon}
                      startedDate={startedDate}
                      endDate={endDate}
                    />
                  );
                })
            }
    </div>
  </ContainerBox>
);

export default Experience;
