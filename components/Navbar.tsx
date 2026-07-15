"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Navigasi utama">
        <a className="brand" href="#beranda" onClick={closeMenu}>
          AI4<span>IDN</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
          <a href="#produk" onClick={closeMenu}>Produk</a>
          <a href="#manifesto" onClick={closeMenu}>Manifesto</a>
          <a href="#cara-kerja" onClick={closeMenu}>Cara Kerja</a>
          <a href="#tentang" onClick={closeMenu}>Tentang</a>
          <a className="nav-cta" href="#hubungi" onClick={closeMenu}>
            Hubungi AI4IDN
          </a>
        </div>
      </nav>
    </header>
  );
}
