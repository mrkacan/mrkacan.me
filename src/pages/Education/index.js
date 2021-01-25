import React from 'react';
import ContainerBox from '../../component/ContainerBox';
import { education, userEducationData } from '../webData';
import EducationItem from '../../component/EducationItem';

const Education = () => (
  <ContainerBox
    pageKey={education.key}
  >
    <div>
      {
                userEducationData.map((item) => {
                  const {
                    id,
                    degree,
                    school,
                    fieldOfStudy,
                    schoolIcon,
                    startedDate,
                    endDate,
                  } = item;

                  return (
                    <EducationItem
                      key={`education_item_${id}`}
                      degree={degree}
                      school={school}
                      fieldOfStudy={fieldOfStudy}
                      schoolIcon={schoolIcon}
                      startedDate={startedDate}
                      endDate={endDate}
                    />
                  );
                })
            }
    </div>
  </ContainerBox>
);

export default Education;
