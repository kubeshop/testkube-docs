import React from 'react';
import styles from './LegacyBanner.module.css'; // Import CSS file

const LegacyBanner = () => {
  return (
    <div className={styles.banner}>
      Features described in this document have been deprecated as of the December 2025 release of both the
      Testkube Control Plane and the Open Source Agent, <a href="/articles/legacy-deprecation">Read More</a>.
    </div>
  );
}

export default LegacyBanner;
