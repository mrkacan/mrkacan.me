import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getFormattedDateRange } from '../common/utils/helpers';

const EducationItem = ({
  degree,
  school,
  fieldOfStudy,
  schoolIcon,
  startedDate,
  endDate,
}) => (
  <div className="flex justify-start items-start border-b border-gray-300 p-4">
    <img
      className="object-contain w-12 mr-2"
      alt={`${school} logo`}
      src={schoolIcon}
      width={30}
      height={30}
    />
    <div className="flex flex-col">
      <div className="text-base font-medium leading-5">
        {school}
      </div>
      <div className="flex text-sm font-normal leading-5">
        <div className="">
          {degree}
        </div>
        <div className="ek-me-bullet-separator">
          {fieldOfStudy}
        </div>
      </div>
      <div className="flex text-sm font-normal leading-5 text-gray-500">
        <div>
          {getFormattedDateRange({
            startedDate,
            endDate,
          })}
        </div>
      </div>
    </div>
  </div>
);

EducationItem.propTypes = {
  degree: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  fieldOfStudy: PropTypes.string.isRequired,
  schoolIcon: PropTypes.string.isRequired,
  startedDate: PropTypes.instanceOf(moment),
  endDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.string,
  ]),
};

export default EducationItem;
