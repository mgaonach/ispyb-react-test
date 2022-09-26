const apiVersion = '/ispyb/api/v1';
const customApiUrl = process.env.REACT_APP_API_URL || undefined;
const isProd = process.env.NODE_ENV === 'production';
const requireHttps = process.env.REACT_APP_HTTPS === 'true';

const scheme = requireHttps ? 'https' : 'http';
const host = isProd ? '' : `${scheme}://localhost:8000`;
const baseUrl = customApiUrl || (isProd ? apiVersion : `${host}${apiVersion}`);

const config = {
  host: host,
  baseUrl: baseUrl,
};

export default config;
