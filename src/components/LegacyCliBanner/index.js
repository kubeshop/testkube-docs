import React from 'react';
import styles from './LegacyCliBanner.module.css'; // Import CSS file

const LegacyBanner = () => {
  return (
    <div className={styles.banner}>
      These CLI docs are for CLI commands available prior to the removal of legacy
      functionality as described at <a href="/articles/legacy-deprecation">Legacy Deprecation</a>. Up-to-date
      CLI docs are <a href="/cli/testkube">here</a>.
    </div>
  );
}

export default LegacyBanner;
