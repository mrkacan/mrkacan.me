import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SkillProgressBar = ({
  text,
  value,
  color,
}) => {
  const progressBarClasses = classNames({
    [`bg-${color}`]: color,
    'bg-brandColor': !color,
    'rounded-xl h-2': true,
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="ml-1 text-sm font-light text-base">
          {text}
        </div>

        <div className="flex items-center justify-between overflow-hidden">
          <motion.div
            initial={{ width: '0%', opacity: 0 }}
            animate={{ width: `${value}%`, opacity: 1 }}
            transition={{ ease: 'linear', duration: 1 }}
            className={progressBarClasses}
          />
          <motion.div
            initial={{ translateX: -60, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ ease: 'linear', duration: 0.30, delay: 0.5 }}
            className="ml-3 text-sm"
          >
            {`${value / 10}/10`}
          </motion.div>
        </div>
      </div>
    </>
  );
};

SkillProgressBar.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default SkillProgressBar;
