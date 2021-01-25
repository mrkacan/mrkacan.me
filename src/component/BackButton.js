import React from 'react';
import PropTypes from 'prop-types';

const BackButton = ({
  onClick,
  title,
}) => (
  // eslint-disable-next-line jsx-a11y/interactive-supports-focus
  <div
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    className="no-tap flex justify-enter items-center content-center ek-me-inner-content-title"
  >
    <svg
      className="
         w-10
         cursor-pointer
         select-none
         outline-none
         no-tap
    "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        className="outline-none no-tap"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
    <div className="text-lg text-black font-semi">
      {title}
    </div>
  </div>
);

BackButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default BackButton;
