import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imagePlaceholder from '../assets/images/imagePlaceholder.jpg';

const Image = ({
  width,
  height,
  src,
  alt,
}) => {
  const [isError, setIsError] = useState(false);
  const onImageError = () => {
    setIsError(true);
  };
  return (
    <img
      className="object-contain w-12 mr-2"
      src={isError ? imagePlaceholder : src}
      alt={alt}
      width={width}
      height={height}
      onError={onImageError}
    />
  );
};

Image.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
