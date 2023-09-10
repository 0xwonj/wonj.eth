import React, { FunctionComponent } from "react";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className={styles.pageInfo}>
        {currentPage}/{totalPages}
      </span>
      <button
        className={styles.button}
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
