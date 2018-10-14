import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/** Return images from assets folder */
const Image = ({ src, alt }) => (
  <React.Fragment>
    <img src={require(`../../assets/${src}.png`)} alt={alt} />
  </React.Fragment>
);

Image.propTypes = {
  /** name/path for the image */
  src: PropTypes.string.isRequired,
  /** image alternative text */
  alt: PropTypes.string.isRequired,
};

export default Image;
