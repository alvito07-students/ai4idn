"use client";

import styles from "./Chat.module.css";

type EmergencyCardProps = {
  onClose: () => void;
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

function PhoneIcon() {
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
        d="M8.2 4.5L10.1 8.7L8.3 10.2C9.25 12.18 10.82 13.75 12.8 14.7L14.3 12.9L18.5 14.8V18C18.5 19.1 17.6 20 16.5 20C9.6 20 4 14.4 4 7.5C4 6.4 4.9 5.5 6 5.5L8.2 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EmergencyCard({
  onClose,
}: EmergencyCardProps) {
  return (
    <section
      className={styles.emergencyModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="emergency-title"
      aria-describedby="emergency-description"
    >
      <button
        type="button"
        className={styles.emergencyCloseButton}
        onClick={onClose}
        aria-label="Tutup informasi bantuan darurat"
      >
        <CloseIcon />
      </button>

      <div className={styles.emergencyMark} aria-hidden="true">
        <PhoneIcon />
      </div>

      <span className={styles.emergencyEyebrow}>
        Bantuan segera tersedia
      </span>

      <h2 id="emergency-title">
        Tolong hubungi layanan darurat sekarang.
      </h2>

      <p
        id="emergency-description"
        className={styles.emergencyLead}
      >
        Dari yang kamu ceritakan, aku khawatir dengan
        keselamatanmu. Situasi seperti ini membutuhkan bantuan
        manusia secara langsung.
      </p>

      <p className={styles.emergencyInstruction}>
        Tolong hubungi salah satu layanan resmi berikut sekarang:
      </p>

      <div className={styles.emergencyServices}>
        <article className={styles.emergencyService}>
          <div className={styles.emergencyServiceInfo}>
            <strong>Healing119.id</strong>
            <span>Kementerian Kesehatan Republik Indonesia</span>
            <small>
              Dukungan awal kesehatan jiwa dan situasi krisis.
            </small>
          </div>

          <a
            href="tel:119"
            className={styles.emergencyCallButton}
          >
            <PhoneIcon />

            <span>
              Telepon 119
              <small>Pilih ekstensi 8</small>
            </span>
          </a>
        </article>

        <article className={styles.emergencyService}>
          <div className={styles.emergencyServiceInfo}>
            <strong>PSC 119</strong>
            <span>Layanan darurat kesehatan</span>
            <small>
              Untuk kondisi yang membutuhkan bantuan segera.
            </small>
          </div>

          <a
            href="tel:119"
            className={styles.emergencyCallButton}
          >
            <PhoneIcon />

            <span>Hubungi 119</span>
          </a>
        </article>
      </div>

      <p className={styles.emergencyClosing}>
        Kamu boleh menutup halaman ini dan tetap melanjutkan
        percakapan. Namun, aku tetap berharap kamu menghubungi
        layanan tersebut sekarang.
      </p>

      <button
        type="button"
        className={styles.emergencyContinueButton}
        onClick={onClose}
      >
        Kembali ke percakapan
      </button>
    </section>
  );
}