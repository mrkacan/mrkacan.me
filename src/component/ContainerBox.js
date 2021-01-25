import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import idx from 'idx';
import { If } from 'react-if';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PAGES_DATA } from '../pages/webData';
import BackButton from './BackButton';

const PAGE_CHANGE_DURATION = 0.15;

const ContainerBox = ({
  children,
  pageKey,
  isHome,
}) => {
  const history = useHistory();

  const {
    title,
  } = idx(PAGES_DATA, _ => _[pageKey]) || {};

  const wrapperClasses = classNames({
    'm-auto shadow-2xl rounded-lg w-5/6 max-w-screen-lg overflow-hidden ek-me-container': true,
  });

  const innerWrapperClasses = classNames({
    'ek-me-inner-content-with-title': !isHome,
    'w-full h-full overflow-y-auto': true,
  });

  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: PAGE_CHANGE_DURATION }}
      className={wrapperClasses}
    >
      <If condition={!isHome}>
        <BackButton onClick={() => history.replace('/')} title={title} />
      </If>
      <div className={innerWrapperClasses}>
        {children}
      </div>
    </motion.div>
  );
};

ContainerBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageKey: PropTypes.string,
  isHome: PropTypes.bool,
};

export default ContainerBox;
