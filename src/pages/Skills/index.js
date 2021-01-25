import React from 'react';
import ContainerBox from '../../component/ContainerBox';
import { skills, userSkillsData } from '../webData';
import SkillProgressBar from '../../component/SkillProgressBar';

const Skills = () => (
  <ContainerBox
    pageKey={skills.key}
  >
    {
            userSkillsData.map((mainItem) => {
              const {
                id,
                title,
                data,
                color,
              } = mainItem;

              return (
                <div
                  key={`progress_component_main_${id}`}
                  className="shadow-sm p-3 mb-6"
                >
                  <div
                    className="text-base md:text-lg font-medium md:font-medium mb-4"
                  >
                    {title}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {
                                data.map((progressBarItem) => {
                                  const {
                                    id: progressBarItemId,
                                    text,
                                    value,
                                  } = progressBarItem;

                                  return (
                                    <SkillProgressBar
                                      key={`progress_component_bar_${progressBarItemId}`}
                                      text={text}
                                      value={value}
                                      color={color}
                                    />
                                  );
                                })
                            }
                  </div>
                </div>
              );
            })
        }

  </ContainerBox>
);

export default Skills;
