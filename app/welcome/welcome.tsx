import { Fragment } from "react/jsx-runtime";
import Header from "~/components/Header";
import "swiper/css";
// Supports weights 100-900
import '@fontsource-variable/inter';
import '@fontsource-variable/onest';

import "swiper/less/navigation";
import "swiper/less/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
export function Welcome() {
  const resources = [
    "https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_large.jpg",
    "https://www.apple.com/id/iphone/home/images/overview/consider/safety__bwp7rsowtjiu_large.jpg",
    "https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_large.jpg",
  ];
  return (
    <Fragment>
      <Header />
      <section className=" py-24">
        <div className="container mb-9 mx-auto">
          <div className="flex mb items-center justify-between">
            <h1 className="text-6xl font-extrabold">IWorks</h1>
            <p className="text-2xl">We wok the tok not only tok the tok</p>
          </div>
        </div>

        <div className="container mx-auto">
          <video
            controls={true}
            className=" rounded-lg overflow-hidden"
            src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/large.mp4"
          />
        </div>
      </section>

      <div className="container mx-auto">
        <section>
          <h1 className="text-6xl">Tujuan Kami.</h1>
          <div className="mt-14 grid grid-cols-3 gap-6">
            {resources.map((src,index) => {
              return (
                <div key={index}>
                  <div style={{
                    backgroundSize:"cover",
                    backgroundImage:`url(${src})`,
                  }} className="relative bg-center hover:scale-105 transition-all duration-150 h-[600px] max-h-[600px] overflow-hidden rounded-4xl">
                    
                    <div className="absolute p-8 text-white top-0">
                      <h2 className="text-md  mb-2 font-bold">Ireng Team</h2>
                      <p className="text-xl font-bold -tracking-tight">
                        Lorem ipsunt molestiae minima dolorum libero vel Lorem
                        ipsum dolor sit. Lorem, ipsum do
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <span slot="container-start">Container Start</span>
            <span slot="container-end">Container End</span>
            <span slot="wrapper-start">Wrapper Start</span>
            <span slot="wrapper-end">Wrapper End</span> */}
          </div>
        </section>
      </div>
    </Fragment>
  );
}
