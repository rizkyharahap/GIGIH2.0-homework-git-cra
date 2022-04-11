import styles from './message.module.scss';

const Message = ({ title, description, ...props }) => (
  <div className={styles.message} {...props}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Message;
