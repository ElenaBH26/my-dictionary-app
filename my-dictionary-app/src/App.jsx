import React from 'react';
import HeaderTitle from './components/header/HeaderTitle';
import Table from './components/table/Table';
import CardWords from './components/card/CardWords';
import data from './data';
import styles from './app.module.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderTitle />
      <Table />    
      <div className={styles.wrapper}>
        {data.map((word) => {
          return (
            <CardWords key={word.id} word={word} />
          )
        }
      )}
      </div>
    </div>
  );
}

export default App;
