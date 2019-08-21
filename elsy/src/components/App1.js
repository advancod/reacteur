import React, { Component } from 'react';
import Title from './Title';
import Card from './Card';
import Slider from './Slider1';
import CardSplitter from './CardSplitter';
import WaterRecomandation from './WaterRecomandation';
import Run from './icons/Run';
import Heart from './icons/Heart';
import Sun from './icons/Sun';
// import Drop from './icons/Drop';
// import Drink from './icons/Drink';

export default function App() {
  const [run, setRun] = React.useState(45);
  const [meteo, setMeteo] = React.useState(45);
  const [heart, setHeart] = React.useState(45);

  const toPercent = v => 0.5 + (v / 100) * 0.5;
    const waterValue = toPercent(run) * toPercent(meteo) * toPercent(heart) * 5;

  return(
    
      <div className="container">
        <Card>
          <Title />
          <WaterRecomandation waterValue={waterValue} />
          <CardSplitter />
          <Slider icon={<Run color="#F44336" />} name="Distance" unit="m" value={run} onChange={(e) => setRun(e)}/>
          <Slider icon={<Sun color="#FF9800" />} name="Météo" unit="°C" value={meteo}  onChange={(e) => setMeteo(e)}/>
          <Slider icon={<Heart color="#2196F3" />} name="Cardio" unit=" BPM" value={heart}  onChange={(e) => setHeart(e)}/>
        </Card>
      </div>
    );
  }