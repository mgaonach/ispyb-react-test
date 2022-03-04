const apiVersion = '/api/v1';

const config = {
  /* eslint-disable no-nested-ternary */
  baseUrl: process.env.BASE_URL
    ? process.env.BASE_URL
    : process.env.NODE_ENV !== 'production'
    ? process.env.REACT_APP_HTTPS
      ? `https://localhost:8000${apiVersion}`
      : `http://localhost:8000${apiVersion}`
    : apiVersion,
};

export default config;
