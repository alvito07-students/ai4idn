"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { detectRiskLevel } from "@/lib/riskDetector";
import type { ChatMessageData } from "@/types/chat";

import ChatMessage from "./ChatMessage";
import Composer from "./Composer";
import ConsentScreen from "./ConsentScreen";
import EmergencyCard from "./EmergencyCard";
import Sidebar from "./Sidebar";
import TypingIndicator from "./TypingIndicator";
import styles from "./Chat.module.css";

const INITIAL_MESSAGE: ChatMessageData = {
  id: "welcome-message",
  role: "assistant",
  content:
    "Selamat datang. Kamu tidak perlu menyusun cerita yang sempurna. Kalau ingin, kita bisa mulai dari bagian yang paling ingin kamu ceritakan hari ini.",
  createdAt: "Sekarang",
};

const MOCK_RESPONSES = [
  "Terima kasih sudah menceritakannya. Aku ingin memahami situasinya dengan lebih tepat. Bagian mana yang paling banyak menguras pikiranmu sekarang?",
  "Dari yang kamu ceritakan, sepertinya ada beberapa hal yang terjadi bersamaan. Kita tidak harus membahas semuanya sekaligus. Mana yang ingin kamu uraikan lebih dahulu?",
  "Situasi itu terdengar cukup menguras tenaga. Sebelum mencari jalan keluar, boleh ceritakan apa yang sudah kamu coba dan apa yang terjadi setelahnya?",
  "Aku tidak ingin terburu-buru menyimpulkan. Dalam percakapan ini, apa yang paling kamu butuhkan: didengarkan, membantu merapikan pikiran, atau mempertimbangkan langkah berikutnya?",
];

const ATTENTION_RESPONSE =
  "Dari yang kamu ceritakan, situasinya terdengar cukup berat dan sepi untuk kamu hadapi sendiri. Aku ingin memahami lebih tepat: apa yang paling membuatmu merasa sendirian saat ini?";

const MEDIUM_RISK_RESPONSE =
  "Terima kasih sudah mengatakan ini dengan jujur. Aku ingin memastikan aku tidak salah memahami. Saat kamu mengatakan ingin menghilang atau tidak kuat lagi, apakah kamu sedang merasa ingin menyakiti dirimu sendiri?";

const HIGH_RISK_RESPONSE =
  "Terima kasih sudah mau menceritakan hal ini. Dari yang kamu tuliskan, aku khawatir dengan keselamatanmu saat ini. Tolong segera hubungi layanan darurat kesehatan yang tampil di atas agar ada seseorang yang dapat mendampingimu secara langsung.";

function getCurrentTime() {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function createMessage(
  role: ChatMessageData["role"],
  content: string,
): ChatMessageData {
  return {
    id: `${role}-${Date.now()}-${Math.random()
      .toString(16)
      .slice(2)}`,
    role,
    content,
    createdAt: getCurrentTime(),
  };
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 5L8 12L15 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AssistantAvatar() {
  return (
    <div className={styles.assistantAvatar} aria-hidden="true">
      <span>✦</span>
    </div>
  );
}

export default function ChatShell() {
  const [messages, setMessages] = useState<ChatMessageData[]>([
    INITIAL_MESSAGE,
  ]);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasAcceptedConsent, setHasAcceptedConsent] =
    useState(false);
  const [showEmergencyCard, setShowEmergencyCard] =
    useState(false);

  const responseIndexRef = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const responseTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (responseTimerRef.current) {
        clearTimeout(responseTimerRef.current);
      }
    };
  }, []);

  function scheduleAssistantResponse(content: string) {
    setIsTyping(true);

    responseTimerRef.current = setTimeout(() => {
      const assistantMessage = createMessage(
        "assistant",
        content,
      );

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);

      setIsTyping(false);
      responseTimerRef.current = null;
    }, 1100);
  }

  function handleSend() {
    const cleanMessage = draft.trim();

    if (!cleanMessage || isTyping) {
      return;
    }

    const riskLevel = detectRiskLevel(cleanMessage);
    const userMessage = createMessage("user", cleanMessage);

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setDraft("");

    if (riskLevel === "high") {
      setShowEmergencyCard(true);
      scheduleAssistantResponse(HIGH_RISK_RESPONSE);
      return;
    }

    if (riskLevel === "medium") {
      scheduleAssistantResponse(MEDIUM_RISK_RESPONSE);
      return;
    }

    if (riskLevel === "attention") {
      scheduleAssistantResponse(ATTENTION_RESPONSE);
      return;
    }

    const selectedResponse =
      MOCK_RESPONSES[
        responseIndexRef.current % MOCK_RESPONSES.length
      ];

    responseIndexRef.current += 1;

    scheduleAssistantResponse(selectedResponse);
  }

  function handleNewChat() {
    if (responseTimerRef.current) {
      clearTimeout(responseTimerRef.current);
      responseTimerRef.current = null;
    }

    setMessages([INITIAL_MESSAGE]);
    setDraft("");
    setIsTyping(false);
    setSidebarOpen(false);
    setShowEmergencyCard(false);
    responseIndexRef.current = 0;
  }

  return (
    <div className={styles.chatApp}>
      {!hasAcceptedConsent && (
        <ConsentScreen
          onAccept={() => setHasAcceptedConsent(true)}
        />
      )}

      {showEmergencyCard && (
  <div
    className={styles.emergencyOverlay}
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        setShowEmergencyCard(false);
      }
    }}
  >
    <EmergencyCard
      onClose={() => setShowEmergencyCard(false)}
    />
  </div>
)}

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={handleNewChat}
      />

      <main className={styles.chatMain}>

        <header className={styles.chatHeader}>
          <div className={styles.chatHeaderLeft}>
            <Link
              href="/"
              className={styles.mobileBackButton}
              aria-label="Kembali ke beranda AI4IDN"
            >
              <BackIcon />
            </Link>

            <button
              type="button"
              className={styles.mobileMenuButton}
              onClick={() => setSidebarOpen(true)}
              aria-label="Buka menu"
              aria-expanded={sidebarOpen}
            >
              <MenuIcon />
            </button>

            <div className={styles.chatIdentity}>
              <div
                className={styles.chatIdentityIcon}
                aria-hidden="true"
              >
                <span>✦</span>
              </div>

              <div>
                <h1>Ruang Curhat</h1>

                <span className={styles.chatStatus}>
                  <i />
                  Beta
                </span>
              </div>
            </div>
          </div>
        </header>

        <section
          className={styles.messagesArea}
          aria-label="Percakapan Ruang Curhat"
          aria-live="polite"
        >
          <div className={styles.messagesContainer}>
            <div className={styles.sessionIntro}>
              <span className={styles.sessionBadge}>
                Ruang yang tenang untuk bercerita
              </span>

              <h2>Hari ini bagaimana?</h2>

              <p>
                Tidak perlu mencari kata yang sempurna. Kamu boleh mulai
                dari bagian yang paling ingin kamu ceritakan.
              </p>

              {messages.length === 1 && (
                <div className={styles.suggestionChips}>
                  <button
                    type="button"
                    onClick={() => setDraft("Aku lagi capek.")}
                  >
                    Aku lagi capek
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setDraft("Aku bingung soal pekerjaan.")
                    }
                  >
                    Bingung soal kerja
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setDraft("Aku merasa sendirian.")
                    }
                  >
                    Aku merasa sendirian
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setDraft(
                        "Bantu aku merapikan pikiranku.",
                      )
                    }
                  >
                    Bantu aku berpikir
                  </button>
                </div>
              )}
            </div>

            <div className={styles.messagesList}>
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                />
              ))}

              {isTyping && (
                <div
                  className={`${styles.messageRow} ${styles.assistantMessageRow}`}
                >
                  <AssistantAvatar />

                  <div
                    className={`${styles.messageBubble} ${styles.assistantBubble}`}
                  >
                    <TypingIndicator />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </section>

        <footer className={styles.composerArea}>
          <div className={styles.composerContainer}>
            <Composer
              value={draft}
              disabled={isTyping}
              onChange={setDraft}
              onSend={handleSend}
            />

            <p className={styles.safetyDisclaimer}>
              Ruang ini bukan pengganti psikolog, dokter, atau layanan
              darurat.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}