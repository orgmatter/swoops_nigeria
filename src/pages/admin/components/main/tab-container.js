import React from 'react';
import Typography from '@material-ui/core/Typography';
import propTypes from 'prop-types';

export function TabContainer(props) {
    return (
      <Typography component='div' style={{ padding: 8 * 3, textAlign: 'center' }}>
        {props.children}
      </Typography>
    );
  }

  TabContainer.propTypes = {
    children: propTypes.node.isRequired,
};


