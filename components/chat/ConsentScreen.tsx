"use client";

import { useState } from "react";

import styles from "./Chat.module.css";

type ConsentScreenProps = {
  onAccept: () => void;
};

export default function ConsentScreen({
  onAccept,
}: ConsentScreenProps) {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className={styles.consentOverlay}>
      <section
        className={styles.consentCard}
        aria-labelledby="consent-title"
      >
        <div className={styles.consentMark} aria-hidden="true">
          ✦
        </div>

        <span className={styles.consentEyebrow}>
          Ruang Curhat AI4IDN
        </span>

        <h1 id="consent-title">Sebelum kita mulai</h1>

        <p className={styles.consentOpening}>
          Terima kasih sudah datang. Kamu boleh mulai bercerita dari
          mana pun yang terasa paling nyaman.
        </p>

        <div className={styles.consentSections}>
          <article>
            <h2>Tentang ruang ini</h2>
            <p>
              Ruang Curhat membantu kamu bercerita dan merapikan
              pikiran. Layanan ini bukan psikolog, dokter, diagnosis,
              atau pengganti bantuan profesional.
            </p>
          </article>

          <article>
            <h2>Tentang percakapanmu</h2>
            <p>
              AI4IDN tidak membuat akun dan tidak menyediakan riwayat
              percakapan. Namun, saat AI mulai digunakan, pesanmu akan
              dikirim ke Gemini API untuk diproses dan mengikuti
              kebijakan data layanan tersebut.
            </p>
          </article>

          <article>
            <h2>Jaga informasi pribadimu</h2>
            <p>
              Hindari menuliskan kata sandi, PIN, nomor identitas,
              nomor rekening, alamat lengkap, atau informasi rahasia
              milikmu maupun orang lain.
            </p>
          </article>

          <article>
            <h2>Kalau situasinya terasa sangat berat</h2>
            <p>
              Jika percakapan menunjukkan adanya risiko terhadap
              keselamatanmu, Ruang Curhat akan meminta kamu segera
              menghubungi layanan darurat kesehatan.
            </p>
          </article>
        </div>

        <label className={styles.consentCheckbox}>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
          />

          <span>
            Saya sudah membaca dan memahami informasi di atas.
          </span>
        </label>

        <button
          type="button"
          className={styles.consentButton}
          disabled={!accepted}
          onClick={onAccept}
        >
          Mulai percakapan
          <span aria-hidden="true">→</span>
        </button>

        <p className={styles.consentPromise}>
          Ceritamu tetap milikmu. AI membantu berpikir. Keputusan tetap
          milikmu.
        </p>
      </section>
    </div>
  );
}