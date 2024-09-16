// src/components/TwoColumns.js
import React from 'react';
import clsx from 'clsx';
import styles from './TwoColumns.module.css';

const TwoColumns = ({ left, right }) => (
  <div className={clsx('container', styles.twoColumns)}>
    <div className={styles.leftColumn}>
      {left}
    </div>
    <div className={styles.rightColumn}>
      {right}
    </div>
  </div>
);

export default TwoColumns;
