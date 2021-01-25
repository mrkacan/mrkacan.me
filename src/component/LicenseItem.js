import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getFormattedIssuedDate } from '../common/utils/helpers';

const LicenseItem = ({
  name,
  issueOrganization,
  organizationIcon,
  issuedDate,
  expireDate,
  licenseLink,
}) => (
  <div className="flex justify-start items-start border-b border-gray-300 p-4">
    <img
      className="object-contain w-12 mr-2"
      alt={`${name} logo`}
      src={organizationIcon}
      width={30}
      height={30}
    />
    <div className="flex flex-col">
      <div className="text-base font-medium leading-5">
        {name}
      </div>
      <div className="flex text-sm font-normal leading-5">
        <div className="">
          {issueOrganization}
        </div>
      </div>
      <div className="flex text-sm font-normal leading-5 text-gray-500">
        <div>
          {
            getFormattedIssuedDate({
              issuedDate,
              expireDate,
            })
          }
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => window.open(licenseLink)}
        onKeyPress={() => window.open(licenseLink)}
        className="flex text-sm font-normal leading-5 text-gray-600 cursor-pointer hover:text-black"
      >
        See credential
      </div>
    </div>
  </div>
);

LicenseItem.propTypes = {
  name: PropTypes.string.isRequired,
  issueOrganization: PropTypes.string.isRequired,
  organizationIcon: PropTypes.string.isRequired,
  issuedDate: PropTypes.instanceOf(moment),
  expireDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.string,
  ]),
  licenseLink: PropTypes.string.isRequired,
};

export default LicenseItem;
