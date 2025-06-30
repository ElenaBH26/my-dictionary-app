import React from "react";
import Table from "../table/Table";
import data from "../../data";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <h1>Таблица слов</h1>
      <Table data={data} />
    </div>
  );
}

export default Home;
