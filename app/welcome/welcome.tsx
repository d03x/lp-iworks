import { Fragment } from "react/jsx-runtime";
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
    "https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_large.jpg",
    "https://www.apple.com/id/iphone/home/images/overview/consider/safety__bwp7rsowtjiu_large.jpg",
    "https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_large.jpg",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Fragment>
      <Header />
      {/* Section Hero */}
      <section className="py-24">
        <div className="container mb-9 mx-auto">
          <div className="flex mb items-center justify-between">
            <h1 className="text-6xl font-extrabold">IWorks</h1>
            <p className="text-2xl">We wok the tok not only tok the tok</p>
          </div>
        </div>

        <div className="container mx-auto">
          <video
            controls
            className="rounded-lg overflow-hidden"
            src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/large.mp4"
          />
        </div>
      </section>

      {/* Tujuan Kami */}
      <div className="container p-4 lg:p-0 mx-auto">
        <section>
          <h1 className="text-6xl font-extrabold">Tujuan Kami.</h1>
          <div className="mt-14 grid-cols-1 grid lg:grid-cols-3 gap-6">
            {resources.map((src, index) => (
              <div key={index}>
                <div
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${src})`,
                  }}
                  className="relative bg-center hover:scale-105 transition-all duration-150 h-[600px] max-h-[600px] overflow-hidden rounded-4xl"
                >
                  <div className="absolute p-8 text-white top-0">
                    <h2 className="text-md mb-2 font-bold">Ireng Team</h2>
                    <p className="text-xl font-bold -tracking-tight">
                      Lorem ipsunt molestiae minima dolorum libero vel Lorem ipsum dolor sit. Lorem, ipsum do
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Aplikasi iWorks */}
      <section className="py-24 mt-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-6xl font-extrabold text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Aplikasi iWorks
          </motion.h2>
          <motion.p
            className="text-xl text-center mt-6 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Platform digital untuk menghubungkan pekerja informal dengan pemberi kerja secara mudah dan cepat.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14"
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
              { icon: "🔍", title: "Cari Pekerjaan", desc: "Temukan pekerjaan yang sesuai keahlian Anda." },
              { icon: "🤝", title: "Temukan Talenta", desc: "Rekrut pekerja terpercaya dengan cepat." },
              { icon: "⚡", title: "Efisien", desc: "Proses mudah dan praktis secara digital." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-3xl p-6 shadow-lg backdrop-blur-md flex flex-col items-center"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-center">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Tim */}
      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto">
          <motion.h2 className="text-6xl font-extrabold text-center mb-12" initial="hidden" whileInView="visible" variants={fadeInUp}>
            Tim iWorks
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dadan Hidayat", role: "CEO & Founder", img: "https://avatars.githubusercontent.com/u/149863272?v=4" },
              { name: "Deviano Hidayat", role: "CTO", img: "https://avatars.githubusercontent.com/u/149863272?v=4" },
              { name: "Faiq Hidayat", role: "Head of Design", img: "https://randomuser.me/api/portraits/women/46.jpg" },
            ].map((member, idx) => (
              <motion.div key={idx} className="text-center" variants={fadeInUp} transition={{ duration: 0.4, delay: idx * 0.2 }}>
                <img src={member.img} alt={member.name} className="w-40 h-40 mx-auto rounded-full mb-4" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pricing */}
      <section className="py-24 bg-gray-100 text-gray-900">
        <div className="container mx-auto">
          <motion.h2 className="text-6xl font-extrabold text-center mb-12" initial="hidden" whileInView="visible" variants={fadeInUp}>
            Harga & Paket
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Gratis", price: "Rp 0", features: ["Akses dasar", "Cari pekerjaan", "Profil terbatas"] },
              { title: "Pro", price: "Rp 49.000/bulan", features: ["Akses penuh", "Prioritas profil", "Statistik pekerjaan"] },
              { title: "Enterprise", price: "Hubungi Kami", features: ["Integrasi kustom", "Tim support", "Analitik mendalam"] },
            ].map((plan, idx) => (
              <motion.div key={idx} className="bg-white rounded-3xl shadow-lg p-6 text-center" variants={fadeInUp} transition={{ duration: 0.4, delay: idx * 0.2 }}>
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-4xl font-extrabold mb-4">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((f, i) => <li key={i} className="mb-2">✅ {f}</li>)}
                </ul>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Pilih Paket</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Download */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <motion.h2 className="text-4xl font-bold mb-6" initial="hidden" whileInView="visible" variants={fadeInUp}>
          Unduh Aplikasi iWorks Sekarang
        </motion.h2>
        <motion.p className="mb-8" initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ delay: 0.2 }}>
          Tersedia di iOS dan Android. Dapatkan kemudahan bekerja dan merekrut hanya dalam genggaman Anda.
        </motion.p>
        <motion.div className="flex justify-center space-x-4" initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ delay: 0.4 }}>
          <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold">Download di App Store</a>
          <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold">Download di Play Store</a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">iWorks</h3>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} iWorks. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Tentang Kami</a>
            <a href="#" className="hover:text-gray-300">Layanan</a>
            <a href="#" className="hover:text-gray-300">Kontak</a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
