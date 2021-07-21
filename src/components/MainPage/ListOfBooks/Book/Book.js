import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./Book.module.css";
import {
  deleteBook,
  startEditedBook,
} from "../../../../redux/reducers/bookSlicer";
import EditBook from "./EditBook";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBookConst = useCallback(() => {
    dispatch(deleteBook(book.id));
  });
  const startEditedBookConst = useCallback(() => {
    dispatch(startEditedBook(book.id));
  });

  return (
    <div>
      {book.edited ? (
        <div className={style.border}>
          <EditBook book={book} />
        </div>
      ) : (
        <div className={style.border}>
          <Link className={style.item} to={`/items/${book.id}`}>
            <div className={style.book}>{book.name}</div>
            <div className={style}>Author: {book.author}</div>
            <div className={style}>Year of publication: {book.year}</div>
          </Link>
          <div className={style.editBlock}>
            <button
              type="button"
              onClick={startEditedBookConst}
              className={style.edit}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={deleteBookConst}
              className={style.delete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any),
};

export default Book;
