import styles from "./Chat.module.css";

export default function TypingIndicator() {
  return (
    <div
      className={styles.typingIndicator}
      role="status"
      aria-label="AI sedang mengetik"
    >
      <span />
      <span />
      <span />
    </div>
  );
}