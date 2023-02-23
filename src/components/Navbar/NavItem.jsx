import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

function NavItem(props) {
  const { children } = props;
  return (
    <Box
      className={css`
        display: flex;
        padding-right: 1.5rem;
        flex-wrap: wrap;
        cursor: pointer;
        &:hover {
          color: #120153;
          cursor: pointer;
          transform: scale(1.2);
        }
      `}
    >
      {children}
    </Box>
  );
}

export default NavItem;

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
};
