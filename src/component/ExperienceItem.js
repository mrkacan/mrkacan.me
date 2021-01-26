import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getFormattedDateRange } from '../common/utils/helpers';
import Image from './Image';

const ExperienceItem = ({
  title,
  employmentType,
  company,
  companyIcon,
  startedDate,
  endDate,
}) => (
  <div className="flex justify-start items-start border-b border-gray-300 p-4">
    <Image
      className="object-contain w-12 mr-2"
      src={companyIcon}
      alt={`${title} logo`}
      width={30}
      height={30}
    />
    <div className="flex flex-col ">
      <div className="text-base font-medium leading-5">
        {title}
      </div>
      <div className="flex text-sm font-normal leading-5">
        <div className="">
          {company}
        </div>
        <div className="ek-me-bullet-separator">
          {employmentType}
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

ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  employmentType: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyIcon: PropTypes.string.isRequired,
  startedDate: PropTypes.instanceOf(moment),
  endDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.string,
  ]),
};
export default ExperienceItem;
