import ReactGA from 'react-ga';

const dev = process.env.NODE_ENV !== 'production';

export const initGA = () => {
  dev && console.log('GA init');
  ReactGA.initialize('XX-XXXXXXXXX-X',{debug: dev});
}

export const logPageView = () => {
  dev && console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  //For Search Query also add window.location.search
  ReactGA.pageview(window.location.pathname);
}

export const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    dev && console.log(`Logging event for Category:${category}, Action:${action} and Label:${label}`);
    ReactGA.event({ category, action, label });
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    dev && console.log(`Logging event for exception ${description} | ${fatal}`);
    ReactGA.exception({ description, fatal });
  }
}