import React from 'react';

import ErrorContent from '../components/ErrorContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props;

    return (
      <AnalyticsLayout
        active={`Oh no :( Error ${statusCode}`} 
        title="¡Ups! Página no encontrada | Italika"
        description="Vive la experiencia completa con Italika el Motor de tu vida."
      >
        {
          statusCode === 404 ?
          <ErrorContent 
            msg="No pudimos encontrar la página que buscas :("
            error={statusCode}
          />
          :
          <ErrorContent 
            msg={`Ocurrió un problema :(
              Por favor intenta de nuevo en un momento
            `}
          />
        }
      </AnalyticsLayout>
    )
  }
}