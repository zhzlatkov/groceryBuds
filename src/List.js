import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="gorcery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                className="edit-btn"
                type="button"
                onClick={() => editItem(id)}
              >
                <FaEdit></FaEdit>
              </button>
              <button
                className="delete-btn"
                type="button"
                onClick={() => removeItem(id)}
              >
                <FaTrash></FaTrash>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
