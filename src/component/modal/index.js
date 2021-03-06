import styles from './modal.module.scss';

const Modal = ({ isOpen, children }) => {
  return (
    <div className={styles.modal} data-type={isOpen ? 'open' : 'close'}>
      <div className={styles.modal__card}>{children}</div>
    </div>
  );
};

Modal.Header = ({ title, onClose }) => {
  return (
    <header className={styles.modal__header}>
      <h1>{title}</h1>

      <button className={`btn ${styles.btn__close}`} onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </button>
    </header>
  );
};

Modal.Content = ({ children }) => {
  return <div className={styles.modal__content}>{children}</div>;
};

export default Modal;
