import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import {
  BriefcaseIcon,
  ChatIcon,
  HeartIcon,
  LockIcon,
  ShieldIcon,
  SparkIcon,
  UsersIcon,
} from "@/components/Icons";

const principles = [
  {
    title: "Privasi Prioritas",
    description: "Kami merancang pengalaman yang meminimalkan data dan menjaga ruang pribadi pengguna.",
    icon: <ShieldIcon />,
  },
  {
    title: "Empati & Respek",
    description: "AI hadir untuk membantu tanpa menghakimi, merendahkan, atau mengambil alih keputusan manusia.",
    icon: <HeartIcon />,
  },
  {
    title: "Aman & Bertanggung Jawab",
    description: "Teknologi digunakan secara transparan dengan batas yang jelas dan jalur bantuan manusia.",
    icon: <LockIcon />,
  },
  {
    title: "Akses untuk Semua",
    description: "AI seharusnya mudah dipahami dan berguna bagi lebih banyak masyarakat Indonesia.",
    icon: <UsersIcon />,
  },
];

const steps = [
  ["01", "Pilih layanan", "Pilih bantuan yang paling sesuai dengan kebutuhanmu."],
  ["02", "Ceritakan kebutuhan", "Sampaikan konteksmu dengan bahasa yang nyaman."],
  ["03", "Dapatkan dukungan AI", "AI membantu menyusun pilihan, langkah, atau dokumen."],
  ["04", "Kamu tetap memutuskan", "Keputusan akhir dan kendali selalu berada di tanganmu."],
];

export default function Home() {
  return (
    <main>
      <SplashScreen />
      <Navbar />

      <section className="hero section" id="beranda">
        <div className="ambient ambient--one" />
        <div className="ambient ambient--two" />
        <div className="container hero__grid">
          <div className="hero__copy reveal">
            <div className="eyebrow">
              <span className="eyebrow__icon"><SparkIcon /></span>
              AI untuk Semua. Dampak untuk Indonesia.
            </div>

            <h1>
              <span className="hero__brand">AI4<span>IDN</span></span>
              AI untuk manusia.<br />Bukan pengganti manusia.
            </h1>

            <p className="hero__lead">
              AI4IDN membantu masyarakat Indonesia berpikir lebih jernih,
              menyiapkan langkah yang lebih baik, dan berkembang tanpa
              kehilangan kendali atas dirinya.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#produk">
                Mulai sekarang <span>→</span>
              </a>
              <a className="button button--secondary" href="#manifesto">
                Lihat manifesto
              </a>
            </div>

            <div className="hero__note">
              <ShieldIcon />
              <span>Human-first, transparan, dan bertanggung jawab.</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal--delay" aria-hidden="true">
            <div className="orbit orbit--outer" />
            <div className="orbit orbit--inner" />
            <div className="spark spark--one" />
            <div className="spark spark--two" />
            <div className="spark spark--three" />

            <div className="ai-core">
              <div className="ai-core__ring" />
              <div className="ai-core__face">
                <span className="eye" />
                <span className="eye" />
                <span className="smile" />
              </div>
            </div>

            <div className="visual-card visual-card--chat">
              <ChatIcon />
              <span>Ceritakan</span>
            </div>
            <div className="visual-card visual-card--career">
              <BriefcaseIcon />
              <span>Berkembang</span>
            </div>
            <div className="human-card">
              <div className="human-card__avatar">ID</div>
              <div>
                <strong>Manusia tetap memegang kendali</strong>
                <span>AI membantu, kamu memutuskan.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact" id="produk">
        <div className="container">
          <div className="section-heading">
            <span>Layanan utama</span>
            <h2>Dua ruang untuk kebutuhan yang nyata.</h2>
            <p>Kita memulai dengan fokus, bukan dengan fitur yang berlebihan.</p>
          </div>

          <div className="product-grid">
            <article className="product-card product-card--blue">
              <div className="product-card__icon"><ChatIcon /></div>
              <div className="status-pill">Segera hadir</div>
              <h3>Ruang Curhat</h3>
              <p className="product-card__tagline">Tempat bercerita tanpa dihakimi.</p>
              <p>
                Ruang percakapan suportif untuk membantu pengguna mengurai isi
                pikiran. Bukan dokter, bukan diagnosis, dan bukan pengganti
                bantuan profesional.
              </p>
              <button className="button button--disabled" type="button" disabled>
                Dalam pengembangan
              </button>
            </article>

            <article className="product-card product-card--green">
              <div className="product-card__icon"><BriefcaseIcon /></div>
              <div className="status-pill status-pill--green">Segera hadir</div>
              <h3>Karier Naik</h3>
              <p className="product-card__tagline">AI untuk langkah kariermu.</p>
              <p>
                Membantu menggali pengalaman, menyusun CV dan surat lamaran,
                menyiapkan wawancara, serta merancang strategi mencari kerja
                yang lebih terarah.
              </p>
              <button className="button button--disabled" type="button" disabled>
                Dalam pengembangan
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="manifesto">
        <div className="container manifesto-panel">
          <div className="manifesto-copy">
            <span className="section-kicker">Manifesto AI4IDN</span>
            <h2>Teknologi yang memperkuat manusia, bukan mengambil alih manusia.</h2>
            <p>
              Efisiensi bukan satu-satunya ukuran kemajuan. AI yang baik harus
              menjaga martabat, memperluas kemampuan, dan membiarkan manusia
              tetap memahami serta menentukan pilihannya sendiri.
            </p>
          </div>

          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle" key={principle.title}>
                <div className="principle__icon">{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="cara-kerja">
        <div className="container">
          <div className="section-heading">
            <span>Cara kerja</span>
            <h2>Sederhana, tetapi kendalinya tetap milikmu.</h2>
          </div>

          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <article className="step-card" key={number}>
                <span className="step-card__number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compact" id="tentang">
        <div className="container about-panel">
          <div>
            <span className="section-kicker">Tentang AI4IDN</span>
            <h2>Dibangun dari Indonesia, untuk kebutuhan Indonesia.</h2>
          </div>
          <p>
            AI4IDN adalah inisiatif untuk mengubah cara masyarakat menggunakan
            AI: dari sekadar mencari jawaban instan menjadi alat untuk memahami
            masalah, membangun kemampuan, dan mengambil keputusan dengan lebih
            sadar.
          </p>
        </div>
      </section>

      <section className="section" id="hubungi">
        <div className="container cta-panel">
          <div className="cta-panel__icon"><SparkIcon /></div>
          <div>
            <span className="section-kicker">Kolaborasi</span>
            <h2>Punya gagasan atau ingin terlibat?</h2>
            <p>Diskusikan kolaborasi, masukan, atau pengembangan AI4IDN.</p>
          </div>
          <a
            className="button button--primary"
            href="https://wa.me/6281118891997?text=Halo%20tim%20AI4IDN%2C%20saya%20ingin%20berdiskusi."
            target="_blank"
            rel="noreferrer"
          >
            Hubungi AI4IDN <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <a className="brand" href="#beranda">AI4<span>IDN</span></a>
            <p>AI untuk Semua.<br />Dampak untuk Indonesia.</p>
          </div>
          <div>
            <strong>Navigasi</strong>
            <a href="#produk">Produk</a>
            <a href="#manifesto">Manifesto</a>
            <a href="#tentang">Tentang</a>
          </div>
          <div>
            <strong>Informasi</strong>
            <span>Privasi</span>
            <span>Syarat penggunaan</span>
            <span>Responsible AI</span>
          </div>
          <div>
            <strong>Kontak</strong>
            <a href="mailto:alvitopranagian@gmail.com">Alvitopranagian@gmail.com</a>
            <a href="#hubungi">WhatsApp AI4IDN</a>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© 2026 AI4IDN. Seluruh hak dilindungi.</span>
          <span>Human-first AI ecosystem.</span>
        </div>
      </footer>
    </main>
  );
}
