import React from 'react';
import { userSocialAccounts } from '../pages/webData';

const SocialAccounts = () => {
  const accounts = [];

  const getSocialAccounts = () => {
    Object.keys(userSocialAccounts).forEach((key) => {
      const {
        url,
        id,
        Icon,
      } = userSocialAccounts[key];

      if (url) {
        accounts.push(
          <div
            key={id}
            className="m-4 w-6"
          >
            <Icon width={20} height={20} />
          </div>,
        );
      }
    });

    return accounts;
  };

  return (
    <div className="absolute social-icons w-full h-full">
      <div className="flex-col w-5/6">
        {getSocialAccounts()}
      </div>
    </div>
  );
};

export default SocialAccounts;
