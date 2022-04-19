import styles from './message.module.scss';

const Message = ({ title, description, ...props }) => (
  <div className={styles.message} {...props} role="contentinfo">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Message;
