import React from 'react';
import PropTypes from 'prop-types';
import { PAGES_DATA } from '../../webData';
import MenuItem from './MenuItem';

const Menu = ({
  animate,
}) => {
  const menu = [];

  Object.keys(PAGES_DATA).forEach((key, index) => {
    const item = PAGES_DATA[key];
    const {
      link,
      svg,
      title,
      isPending,
      key: itemKey,
    } = item;

    menu.push(<MenuItem
      animate={animate}
      key={itemKey}
      index={index}
      link={link}
      svg={svg}
      title={title}
      isPending={isPending}
    />);
  });

  return menu;
};

Menu.propTypes = {
  animate: PropTypes.bool.isRequired,
};

export default Menu;
