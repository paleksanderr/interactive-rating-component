import React from 'react';
import styles from '../FormCard/formcard.module.css'



export default function FormCard () {
  return (
    <div className={styles.formCard}>
      <div className={styles.formCardHeader}>
        <div className="star-btn-container">
          <button className={styles.starBtn}>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </button>
        </div>
        <div className="header-title-container">
          <h2 className={styles.headerTitle}>How did we do?</h2>
        </div>
        <div className="header-content-container">
          <p className={styles.headerContent}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.buttons}>1</button>
          <button className={styles.buttons}>2</button>
          <button className={styles.buttons}>3</button>
          <button className={styles.buttons}>4</button>
          <button className={styles.buttons}>5</button>
        </div>
        <div className={styles.submitContainer}>
          <button className={styles.buttonSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}