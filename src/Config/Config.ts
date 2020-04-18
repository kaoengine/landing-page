import deepFreeze from 'deep-freeze';

const conf = {
  ga_uid: '' || process.env.GA_UID,
  /** API configuration */
  api: {
    urls: {
      authenticate: 'api/authenticate',
      authInfo: 'api/auth/info',
    }
  }
};

export const config = deepFreeze(conf) as typeof conf;
