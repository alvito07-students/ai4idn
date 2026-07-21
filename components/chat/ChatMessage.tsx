"use client";

import { useState } from "react";

import type { ChatMessageData } from "@/types/chat";
import styles from "./Chat.module.css";

type ChatMessageProps = {
  message: ChatMessageData;
};

function AssistantAvatar() {
  return (
    <div className={styles.assistantAvatar} aria-hidden="true">
      <span>✦</span>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M16 8V6C16 4.9 15.1 4 14 4H6C4.9 4 4 4.9 4 6V14C4 15.1 4.9 16 6 16H8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.2 16.5L19 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ChatMessage({
  message,
}: ChatMessageProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const isUser = message.role === "user";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(message.content);

      setHasCopied(true);

      window.setTimeout(() => {
        setHasCopied(false);
      }, 1800);
    } catch {
      setHasCopied(false);
    }
  }

  return (
    <article
      className={`${styles.messageRow} ${
        isUser
          ? styles.userMessageRow
          : styles.assistantMessageRow
      }`}
    >
      {!isUser && <AssistantAvatar />}

      <div className={styles.messageContent}>
        <div
          className={`${styles.messageBubble} ${
            isUser
              ? styles.userBubble
              : styles.assistantBubble
          }`}
        >
          <p>{message.content}</p>

          <time
            className={styles.messageTime}
            dateTime={message.createdAt}
          >
            {message.createdAt}
          </time>
        </div>

        {!isUser && (
          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopy}
            aria-label={
              hasCopied
                ? "Balasan berhasil disalin"
                : "Salin balasan"
            }
          >
            {hasCopied ? <CheckIcon /> : <CopyIcon />}

            <span>
              {hasCopied ? "Tersalin" : "Salin"}
            </span>
          </button>
        )}
      </div>
    </article>
  );
}