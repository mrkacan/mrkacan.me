import React from 'react';
import ContainerBox from '../../component/ContainerBox';
import { licenses, licenseData } from '../webData';
import LicenseItem from '../../component/LicenseItem';

const Licenses = () => (
  <ContainerBox
    pageKey={licenses.key}
  >
    <div>
      {
        licenseData.map((item) => {
          const {
            id,
            name,
            issueOrganization,
            organizationIcon,
            issuedDate,
            expireDate,
            licenseLink,
          } = item;

          return (
            <LicenseItem
              key={`license_item_${id}`}
              name={name}
              issueOrganization={issueOrganization}
              organizationIcon={organizationIcon}
              issuedDate={issuedDate}
              expireDate={expireDate}
              licenseLink={licenseLink}
            />
          );
        })
      }
    </div>
  </ContainerBox>
);

export default Licenses;
