import React from 'react';
import styles from './LegacyBanner.module.css'; // Import CSS file

const LegacyBanner = () => {
  return (
    <div className={styles.banner}>
      Features described in this document are being deprecated as<br/> part of
      the transition to Test Workflows - <a href="/articles/legacy-features">Read More</a>.
    </div>
  );
}

export default LegacyBanner;
