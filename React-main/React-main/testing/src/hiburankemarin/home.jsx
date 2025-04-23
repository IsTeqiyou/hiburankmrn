import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaToilet, FaParking, FaTrash, FaFireAlt, FaSwimmer, FaUtensils } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-blue-900 bg-opacity-90 text-white p-6 flex flex-col md:flex-row justify-between items-center shadow-lg">
      <h1 className="text-4xl font-bold mb-4 md:mb-0 tracking-widest">BANGKA POS🌊</h1>
      <nav className="space-x-4 md:space-x-8 text-base md:text-lg font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/detail" className="hover:underline">Detail</Link>
        <Link to="/galeri" className="hover:underline">Galeri</Link>
        <Link to="/kontak" className="hover:underline">Kontak</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="p-6 md:p-12 space-y-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white bg-blue-900 bg-opacity-90 py-16 px-6 rounded-xl shadow-xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Selamat Datang di Pantai Punggur</h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Surga tersembunyi di Bangka dengan pasir putih, laut biru, dan suasana damai untuk melepas penat.
        </p>
        <Link
          to="/detail"
          className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-100 transition"
        >
          Lihat Detail Wisata
        </Link>
      </motion.section>

      {/* Keunggulan Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-90 rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Mengapa Pantai Punggur?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <FaSwimmer className="mx-auto text-4xl text-blue-600" />
            <h3 className="text-xl font-semibold">Aktivitas Seru</h3>
            <p className="text-gray-600">Nikmati berenang, bermain pasir, dan snorkeling di perairan yang jernih.</p>
          </div>
          <div className="text-center space-y-3">
            <FaUtensils className="mx-auto text-4xl text-blue-600" />
            <h3 className="text-xl font-semibold">Kuliner Lokal</h3>
            <p className="text-gray-600">Cicipi sajian khas laut Bangka di warung-warung pinggir pantai.</p>
          </div>
          <div className="text-center space-y-3">
            <FaFireAlt className="mx-auto text-4xl text-blue-600" />
            <h3 className="text-xl font-semibold">Camping & BBQ</h3>
            <p className="text-gray-600">Tersedia tempat untuk berkemah dan membakar ikan bersama keluarga.</p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4">Siap menjelajah Pantai Punggur?</h2>
        <Link
          to="/galeri"
          className="inline-block bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow hover:bg-blue-800 transition mb-5"
        >
          Lihat Galeri
        </Link>
      </motion.section>
    </div>
  );
}


function Detail() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 md:p-10 bg-white bg-opacity-90 rounded-lg m-4 shadow-lg"
    >
      <h2 className=" text-3xl md:text-5xl font-bold text-blue-900 mb-6">Fasilitas Pantai Punggur</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-blue-800">
        <li className="flex items-center gap-3"><FaParking className="text-2xl text-blue-600" /> Area Parkir</li>
        <li className="flex items-center gap-3"><FaToilet className="text-2xl text-blue-600" /> Toilet Umum</li>
        <li className="flex items-center gap-3"><FaTrash className="text-2xl text-blue-600" /> Tempat Sampah</li>
        <li className="flex items-center gap-3"><FaFireAlt className="text-2xl text-blue-600" /> Tempat Bakar Ikan</li>
        <li className="flex items-center gap-3"><FaSwimmer className="text-2xl text-blue-600" /> Area Berenang</li>
        <li className="flex items-center gap-3"><FaUtensils className="text-2xl text-blue-600" /> Warung & Makanan</li>
      </ul>
    </motion.main>
  );
}

function Galeri() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-white bg-opacity-90 rounded-lg m-4 shadow-md"
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-6">Galeri Foto Pantai Punggur</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="scr1.png" alt="Pemandangan 1" className="rounded shadow-md" />
        <img src="scr3.png" alt="Pemandangan 2" className="rounded shadow-md" />
        <img src="2.png" alt="Wahana Seru" className="rounded shadow-md" />
        <img src="1.png" alt="Keindahan Lautan" className="rounded shadow-md" />
        <img src="scr2.png" alt="Keindahan Lautan" className="rounded shadow-md" />
        <img src="3.png" alt="Keindahan Lautan" className="rounded shadow-md" />
        <img src="scr9.png" alt="Keindahan Lautan " className ="  rounded shadow-md" />
      </div>
    </motion.main>
  );
}

function Kontak() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-white bg-opacity-90 rounded-lg m-4 shadow-md"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Hubungi Kami</h2>
      <p><strong>Alamat:</strong> Dusun Tuing, Desa Mapur, Kecamatan Riau Silip, Kabupaten Bangka.</p>
      <p><strong>Info:</strong> nasional.tempo.com</p>
      <p><strong>Email:</strong> pantai.punggur@id.com</p>
      <p><strong>No telp:</strong> None</p>
      <div className="mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.907403097769!2d110.40915211539173!3d-7.46098787564043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7a8e60f3e3ff%3A0x30b4d6b3b8b5b9e!2sLokasi%20Wisata!5e0!3m2!1sid!2sid!4v161234567890!5m2!1sid!2sid"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Peta Lokasi"
        ></iframe>
      </div>
    </motion.main>
  );
}

function App() {
  return (
    <div className="bg-[url('././scr11.jpg')] bg-cover bg-center min-h-screen">
      <div className="bg-black bg-opacity-30 min-h-screen">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;