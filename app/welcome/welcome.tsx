import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Header from "~/components/Header";
import "swiper/css";
import "@fontsource-variable/inter";
import "@fontsource-variable/onest";
import "swiper/less/navigation";
import "swiper/less/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

export function Welcome() {
  const resources = [
    {
      img: "/img1.jpg",
      title: "Akses Mudah",
      desc: "Memudahkan pekerja informal dan pemberi kerja untuk saling terhubung secara digital.",
    },
    {
      img: "/img2.jpg",
      title: "Kemudahan Peningkatan Keahlian",
      desc: "Semakin mudah mendapatkan sertifikasi untuk mendapat lebih banyak pekerjaan.",
    },
    {
      img: "/img3.jpg",
      title: "Transparansi Pendapatan",
      desc: "Atur harga dan pendapatanmu sesuaikan dengan keahlian dan keinginanmu.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Typing effect logic
  const words = ["Paid", "Work", "Certify"];
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIdx < currentWord.length) {
      setDisplayed(currentWord.slice(0, charIdx + 1));
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 120);
    } else if (!deleting && charIdx === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIdx > 0) {
      setDisplayed(currentWord.slice(0, charIdx - 1));
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 60);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <Fragment>
      <Header />
      {/* Section Hero */}
      <section className="py-16 md:py-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Left: Description */}
            <div className="flex-1 w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">IWorks</h1>
              <div className="mb-4 text-xl sm:text-2xl font-semibold flex items-center h-10">
                Easy to&nbsp;
                <span className="text-[#2D666D] min-w-[80px] sm:min-w-[100px]">
                  {displayed}
                  <span className="border-r-2 border-[#2D666D] animate-pulse ml-1" />
                </span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                Platform digital yang menghubungkan pekerja informal dengan
                pemberi kerja secara mudah, cepat, dan aman. Temukan pekerjaan
                atau talenta terbaik hanya dalam genggaman Anda.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-700 transition"
              >
                Mulai Sekarang
              </a>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center w-full mb-8 md:mb-0">
              <img
                src="/mockups.png"
                alt="iWorks App Mockups"
                className="w-full max-h-screen rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tujuan Kami */}
      <div className="container p-4 lg:p-0 mx-auto">
        <section>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">Tujuan Kami.</h1>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, index) => (
              <div key={index}>
                <div
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${res.img})`,
                  }}
                  className="relative bg-center hover:scale-105 transition-all duration-150 h-72 sm:h-96 overflow-hidden rounded-3xl"
                >
                  {/* Add a dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/50 z-0" />
                  <div className="absolute p-6 sm:p-8 text-white top-0 z-10">
                    <h2 className="text-lg sm:text-xl mb-2 font-bold">{res.title}</h2>
                    <p className="text-base sm:text-lg font-bold -tracking-tight">
                      {res.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Aplikasi iWorks */}
      <section className="py-16 md:py-24 mt-16 md:mt-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Aplikasi iWorks
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-center mt-6 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Platform digital untuk menghubungkan pekerja informal dengan pemberi
            kerja secara mudah dan cepat.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                icon: "🔍",
                title: "Cari Pekerjaan",
                desc: "Temukan pekerjaan yang sesuai keahlian Anda.",
              },
              {
                icon: "🤝",
                title: "Temukan Talenta",
                desc: "Rekrut pekerja terpercaya dengan cepat.",
              },
              {
                icon: "⚡",
                title: "Efisien",
                desc: "Proses mudah dan praktis secara digital.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-3xl p-6 shadow-lg backdrop-blur-md flex flex-col items-center"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-center text-base sm:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Tim */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            Tim iWorks
          </motion.h2>
          {/* Top row: 3 people, Bottom row: 2 people, centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Muhammad Faiq Hudzaifah",
                role: "Project Manager",
                img: "/profile.png",
                desc: "Bertanggung jawab atas koordinasi tim, perencanaan strategis, administrasi, dan keuangan awal.",
              },
              {
                name: "Deviano Christian W.A.",
                role: "CTO / Full Stack Developer",
                img: "/profile.png",
                desc: "Bertanggung jawab atas pengembangan front-end(Web & Mobile), UI/UX, dan fungsionalitas platform.",
              },
              {
                name: "Dadan Hidayat",
                role: "CTO / Backend Specialist",
                img: "/profile.png",
                desc: "Fokus pada arsitektur back-end, desain dan manajemen database, integrasi API, dan keamanan sistem.",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="text-center group relative transition-all duration-300"
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                {/* Profile Image */}
                <div className="flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-full mb-4 shadow-lg transition-all duration-300 group-hover:opacity-0"
                  />
                  <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl p-4 sm:p-6 z-10">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-blue-700 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-700 text-xs sm:text-base">{member.desc}</p>
                  </div>
                </div>
                {/* Name & Role (shown when not hovered) */}
                <div className="transition-all duration-300 group-hover:opacity-0">
                  <h3 className="text-lg sm:text-2xl font-bold">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            {[
              {
                name: "Ahmad Rafi",
                role: "CMO / Digital Marketing",
                img: "/profile.png",
                desc: "Merancang strategi pemasaran digital, mengelola media sosial, content marketing, dan membangun kemitraan.",
              },
              {
                name: "Raka Aditya Z",
                role: "PR & Field Operations",
                img: "/profile.png",
                desc: "Melakukan sosialisasi produk ke target pengguna, membangun hubungan dengan komunitas dan stakeholder.",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="text-center group relative transition-all duration-300"
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: idx * 0.2 + 1.2 }}
              >
                {/* Profile Image */}
                <div className="flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-full mb-4 shadow-lg transition-all duration-300 group-hover:opacity-0"
                  />
                  <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl p-4 sm:p-6 z-10">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-blue-700 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-700 text-xs sm:text-base">{member.desc}</p>
                  </div>
                </div>
                {/* Name & Role (shown when not hovered) */}
                <div className="transition-all duration-300 group-hover:opacity-0">
                  <h3 className="text-lg sm:text-2xl font-bold">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Download */}
      <section className="py-16 md:py-24 bg-blue-600 text-white text-center">
        <motion.h2
          className="text-2xl sm:text-4xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Unduh Aplikasi iWorks Sekarang
        </motion.h2>
        <motion.p
          className="mb-8 text-base sm:text-lg"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Tersedia di iOS dan Android. Dapatkan kemudahan bekerja dan merekrut
          hanya dalam genggaman Anda.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold"
          >
            Download di App Store
          </a>
          <a
            href="#"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold"
          >
            Download di Play Store
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold">iWorks</h3>
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} iWorks. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a href="#" className="hover:text-gray-300">
              Tentang Kami
            </a>
            <a href="#" className="hover:text-gray-300">
              Layanan
            </a>
            <a href="#" className="hover:text-gray-300">
              Kontak
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}