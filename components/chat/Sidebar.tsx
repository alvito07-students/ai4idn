"use client";

import Link from "next/link";

import styles from "./Chat.module.css";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  onNewChat: () => void;
};

function CloseIcon() {
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
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.5 18.2L4 20V7.5C4 5.57 5.57 4 7.5 4H16.5C18.43 4 20 5.57 20 7.5V14.5C20 16.43 18.43 18 16.5 18H7.5V18.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 7V5.8C9 4.81 9.81 4 10.8 4H13.2C14.19 4 15 4.81 15 5.8V7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="4"
        y="7"
        width="16"
        height="12"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Sidebar({
  open,
  onClose,
  onNewChat,
}: SidebarProps) {
  return (
    <>
      <button
        type="button"
        className={`${styles.sidebarBackdrop} ${
          open ? styles.sidebarBackdropVisible : ""
        }`}
        aria-label="Tutup menu"
        onClick={onClose}
      />

      <aside
        className={`${styles.sidebar} ${
          open ? styles.sidebarOpen : ""
        }`}
        aria-label="Navigasi Ruang Curhat"
      >
        <div className={styles.sidebarTop}>
          <Link
            href="/"
            className={styles.sidebarLogo}
            onClick={onClose}
            aria-label="Kembali ke halaman utama AI4IDN"
          >
            <span>AI4</span>
            <strong>IDN</strong>
          </Link>

          <button
            type="button"
            className={styles.sidebarCloseButton}
            onClick={onClose}
            aria-label="Tutup sidebar"
          >
            <CloseIcon />
          </button>
        </div>

        <button
          type="button"
          className={styles.newChatButton}
          onClick={() => {
            onNewChat();
            onClose();
          }}
        >
          <PlusIcon />
          <span>Chat baru</span>
        </button>

        <nav className={styles.sidebarNavigation}>
          <p className={styles.sidebarLabel}>Layanan</p>

          <Link
            href="/curhat"
            className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}
            onClick={onClose}
          >
            <span className={styles.sidebarItemIcon}>
              <ChatIcon />
            </span>

            <span>
              <strong>Ruang Curhat</strong>
              <small>Tempat bercerita</small>
            </span>
          </Link>

          <div
            className={`${styles.sidebarItem} ${styles.sidebarItemDisabled}`}
            aria-disabled="true"
          >
            <span className={styles.sidebarItemIcon}>
              <BriefcaseIcon />
            </span>

            <span>
              <strong>Karier Naik</strong>
              <small>Segera hadir</small>
            </span>
          </div>
        </nav>

        <div className={styles.sidebarHistory}>
          <div className={styles.sidebarHistoryHeader}>
            <p className={styles.sidebarLabel}>Riwayat</p>
            <span>Tidak disimpan</span>
          </div>

          <div className={styles.emptyHistory}>
            <p>Belum ada riwayat percakapan.</p>
            <small>Sesi ini hanya tersimpan sementara di halaman.</small>
          </div>
        </div>

        <div className={styles.sidebarFooter}>
          <div className={styles.privacyNotice}>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 3L19 6V11C19 15.42 16.08 19.55 12 21C7.92 19.55 5 15.42 5 11V6L12 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 12L11.2 13.7L14.8 10.1"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>
              <strong>Mode simulasi</strong>
              <small>Belum terhubung dengan AI.</small>
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}