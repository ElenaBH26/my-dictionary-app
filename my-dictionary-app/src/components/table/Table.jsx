import React, { useState } from "react";
import styles from "./table.module.css";
import data from "../../data";

function Table({ data, setData }) {
  const [editRowId, setEditRowId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleEditClick = (itemId) => {
    setEditRowId(itemId);

    const item = data.find((item) => item.id === itemId);
    if (item) {
      setEditValues({
        english: item.english,
        transcription: item.transcription,
        russian: item.russian,
      });
    }
  };

  const hadleInputChange = (event, itemId, field) => {
    setEditValues({
      ...editValues,
      [field]: event.target.value,
    });
  };

  const handleCancelClick = () => {
    setEditRowId(null);
    setEditValues({});
  };

  const handleSaveClick = (itemId) => {
    const newData = data.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          english: editValues.english,
          transcription: editValues.transcription,
          russian: editValues.russian,
        };
      }

      return item;
    });

    setData(newData);
    setEditRowId(null);
    setEditValues({});
  };

  return (
    <table className={styles.wordTable}>
      <thead>
        <tr>
          <td className={styles.tableTitle}>№</td>
          <td className={styles.tableTitle}>English</td>
          <td className={styles.tableTitle}>Transcription</td>
          <td className={styles.tableTitle}>Russian</td>
          <td className={styles.tableTitle}>Action</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const isEditing = editRowId === item.id;

          return (
            <tr className={styles.tableRow} key={item.id}>
              <td>{index + 1 + "."}</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editValues.english}
                    onChange={(event) =>
                      hadleInputChange(event, item.id, "english")
                    }
                    className={styles.tableInput}
                  />
                ) : (
                  item.english
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editValues.transcription}
                    onChange={(event) =>
                      hadleInputChange(event, item.id, "transcription")
                    }
                    className={styles.tableInput}
                  />
                ) : (
                  item.transcription
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editValues.russian}
                    onChange={(event) =>
                      hadleInputChange(event, item.id, "russian")
                    }
                    className={styles.tableInput}
                  />
                ) : (
                  item.russian
                )}
              </td>
              <td className={styles.modifyButton}>
                {isEditing ? (
                  <>
                    <button
                      onClick={() => handleSaveClick(item.id)}
                      className={styles.editButton}
                    >
                      Сохранить
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className={styles.editButton}
                    >
                      Отмена
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEditClick(item.id)}
                    className={styles.editButton}
                  >
                    Редактировать
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
