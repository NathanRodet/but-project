import React from 'react';
import Navigation from '../components/others/Navigation';
import Footer from '../components/others/Footer';
import Programme from '../components/pages/Formation/Programme';
import Video from '../components/pages/Formation/videoFormation';
import AvantagesBUT from '../components/pages/Formation/AvantagesBUT';

const Formation = () => {
  return (
    <div className="formationContent">
      <Navigation />
      <AvantagesBUT />
      <Video />
      <Programme />
      <Footer />
    </div>
  );
};

export default Formation;