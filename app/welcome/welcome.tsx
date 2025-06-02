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

      {/* Section Aplikasi iWorks (Platform Pekerja-Pemberi Kerja) */}
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
            iWorks adalah platform digital yang memudahkan pencarian dan penawaran pekerjaan bagi pekerja informal. Satu klik untuk menemukan talenta, satu klik untuk mendapatkan pekerjaan.
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
              { icon: "🔍", title: "Cari Pekerjaan", desc: "Pekerja informal dapat dengan mudah menemukan pekerjaan yang sesuai dengan keahlian mereka." },
              { icon: "🤝", title: "Temukan Talenta", desc: "Pemberi kerja dapat mencari dan merekrut pekerja terpercaya dengan cepat." },
              { icon: "⚡", title: "Cepat & Efisien", desc: "Semua proses berlangsung secara digital, hemat waktu, dan praktis." },
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
