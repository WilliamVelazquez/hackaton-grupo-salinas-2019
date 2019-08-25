import React, {Component} from 'react';

import HomeContent from '../components/HomeContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Home extends Component{
  render() {
    return (
      <AnalyticsLayout
        active="Home" 
        title="Italika | El motor de tu vida" 
        description="Vive la experiencia completa con Italika el Motor de tu vida." 
      >
        <HomeContent />
      </AnalyticsLayout>
    );
  }
}

export default Home;