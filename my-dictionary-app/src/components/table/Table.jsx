import React from "react";
import styles from './table.module.css';
import data from '../../data';

function Table() {
    return (
<table className={styles.wordTable} >
<thead>
<tr>
<td className={styles.tableTitle}>№</td>
    <td className={styles.tableTitle}>English</td>
    <td className={styles.tableTitle}>Transcription</td>
    <td className={styles.tableTitle}>Russian</td>
</tr>
</thead>
<tbody>
{data.map((item, index) => {
    return (
        <tr className={styles.tableRow} key={item.id}>
        <td>{index + 1 + '.'}</td>
        <td>{item.english}</td>
        <td>{item.transcription}</td>
        <td>{item.russian}</td>
    </tr>
)
})}
 </tbody>
 </table>
    )
}

export default Table;