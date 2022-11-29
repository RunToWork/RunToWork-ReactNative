import config from 'app/config.json';

const SHARE_MAP = {
  PROJECT_SYMBOL: 'gasapp',
};

const ENV_MAP = {
  development: {
    API_URL: '',
  },
  production: {
    API_URL: '',
  },
};

const NODE_ENV = 'develop';

export default {
  ...SHARE_MAP,
  ...(ENV_MAP.development || ENV_MAP[config.RN_ENV]),
  ...NODE_ENV,
};
