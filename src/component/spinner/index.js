import styles from './spinner.module.scss';

const Spinner = ({ children }) => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__icon}></div>
      {children}
    </div>
  );
};

export default Spinner;
