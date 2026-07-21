"use client";

import {
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
} from "react";

import styles from "./Chat.module.css";

type ComposerProps = {
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
};

export default function Composer({
  value,
  disabled = false,
  onChange,
  onSend,
}: ComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = "0px";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
  }, [value]);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!disabled && value.trim()) {
      onSend();
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();

      if (!disabled && value.trim()) {
        onSend();
      }
    }
  }

  const canSend = value.trim().length > 0 && !disabled;

  return (
    <form className={styles.composerForm} onSubmit={handleSubmit}>
      <div className={styles.composerBox}>
        <textarea
        autoFocus
          ref={textareaRef}
          className={styles.composerTextarea}
          value={value}
          disabled={disabled}
          rows={1}
          maxLength={3000}
          placeholder="Tulis apa yang ingin kamu ceritakan..."
          aria-label="Tulis pesan"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className={styles.sendButton}
          type="submit"
          disabled={!canSend}
          aria-label="Kirim pesan"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 19V5M12 5L6.5 10.5M12 5L17.5 10.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <p className={styles.composerHint}>
        Enter untuk mengirim · Shift + Enter untuk baris baru
      </p>
    </form>
  );
}