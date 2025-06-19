import React, { useState } from 'react';
import HeaderTitle from './components/header/HeaderTitle';
import Table from './components/table/Table';
import CardWords from './components/card/CardWords';
import CardCorousel from './components/navigation/CardCorouselBtn';
import data from './data';
import styles from './app.module.css';
import './App.css';

function App() {

const [currentCardIndex, setCurrentCardIndex] = useState(0);

const hadndlePrevCard = () => {
  setCurrentCardIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
};


  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const currenWord = data[currentCardIndex];


  return (
    <div className="App">
      <HeaderTitle />
      <Table />    
      <div className={styles.wrapper}>
       {currenWord && (
        <CardWords key={currenWord.id} word={currenWord}/>  
       )}
      </div>
      <CardCorousel 
      onPrev={hadndlePrevCard}
      onNext={handleNextCard}
      />
    </div>
  );
}

export default App;
