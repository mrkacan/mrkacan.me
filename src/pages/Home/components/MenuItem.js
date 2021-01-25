import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { If } from 'react-if';
import PropTypes from 'prop-types';

const MenuItem = ({
  animate,
  index,
  link,
  svg,
  title,
  isPending,
}) => {
  const [showPending, setShowPending] = useState(false);

  const onMenuItemCLick = () => {
    if (!isPending) {
      history.push(link);
    } else {
      setShowPending(true);
      setTimeout(() => {
        setShowPending(false);
      }, 1000);
    }
  };

  let history = useHistory();

  return (
    <motion.div
      initial={{ opacity: animate ? 0 : 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.0 + 0.10 * index }}
      className="
                    group
                    ek-me-menu-item
                    p-3
                    m-1
                    border
                    border-menuItem
                    cursor-pointer
                     hover:bg-brandColor
                     hover:text-white
                    transition-colors
                    duration-200
                    flex
                    align-items-center
                    text-center
                    justify-center
                    items-center
                    flex-col
                    text-xs
                    "
      onClick={() => {
        onMenuItemCLick();
      }}
      onKeyPress={() => {
        onMenuItemCLick();
      }}
    >
      <If condition={!showPending}>
        <svg className="w-6 md:w-9 h-6 md:h-9">
          {svg}
        </svg>
      </If>
      <div
        className="mt-2 md:text-base"
      >
        {showPending ? 'Under Construction' : title}
      </div>
    </motion.div>
  );
};

MenuItem.propTypes = {
  animate: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  link: PropTypes.string,
  svg: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  isPending: PropTypes.bool,
};

export default MenuItem;
