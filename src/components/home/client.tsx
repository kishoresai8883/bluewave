/*'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.jpg';
import client4 from '../../assets/client4.jpg';
import client5 from '../../assets/client5.jpg';
import client6 from '../../assets/client6.png';
import client7 from '../../assets/client7.jpg';
import client8 from '../../assets/client8.png';

const partners = [
  { name: 'Aurangabad Muncipal Corporation', logo: client1 },
  { name: 'Smart City Aurangabad', logo: client2 },
  { name: 'Superindent of Land Record Office Amravathi, Parbhani', logo: client3 },
  { name: 'Mehekar Muncipal Council', logo: client4 },
  { name: 'Officer of Settlement Commissioner & Director of Land Record', logo: client5 },
  { name: 'Smart City', logo: client6 },
  { name: 'Superindent of Land Record Office Jalgaon, Jalna', logo: client7 },
  { name: 'Electra Solutions - Solar Power Plant', logo: client8 },
];

const Clients = () => {
  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Trusted Clients</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          We proudly collaborate with top-tier companies to drive success and innovation.
        </p>

        {/* Swiper buttons *
        <button className="swiper-button-prev w-10 h-10 bg-white border border-gray-300 rounded-full shadow flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white absolute top-1/2 -left-4 z-20 cursor-pointer"></button>
        <button className="swiper-button-next w-10 h-10 bg-white border border-gray-300 rounded-full shadow flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white absolute top-1/2 -right-4 z-20 cursor-pointer"></button>


        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="max-w-7xl"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-24 object-contain hover:grayscale-0 transition duration-300"
                />
                <p className="text-sm font-medium text-gray-700 px-2">{partner.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
*/

'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.jpg';
import client4 from '../../assets/client4.jpg';
import client5 from '../../assets/client5.jpg';
import client6 from '../../assets/client6.png';
import client7 from '../../assets/client7.jpg';
import client8 from '../../assets/client8.png';

const partners = [
  { name: 'Aurangabad Muncipal Corporation', logo: client1 },
  { name: 'Smart City Aurangabad', logo: client2 },
  { name: 'Superindent of Land Record Office Amravathi, Parbhani', logo: client3 },
  { name: 'Mehekar Muncipal Council', logo: client4 },
  { name: 'Officer of Settlement Commissioner & Director of Land Record', logo: client5 },
  { name: 'Smart City', logo: client6 },
  { name: 'Superindent of Land Record Office Jalgaon, Jalna', logo: client7 },
  { name: 'Electra Solutions - Solar Power Plant', logo: client8 },
];

const Clients = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Trusted Clients</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          We proudly collaborate with top-tier companies to drive success and innovation.
        </p>

        {/* Swiper buttons */}
        <div
          ref={prevRef}
          className="swiper-button-prev-custom w-10 h-10 bg-white border border-gray-300 rounded-full shadow flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-400 absolute top-1/2 left-4 z-20 cursor-pointer"
        >
          &#10094;
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom w-10 h-10 bg-white border border-gray-300 rounded-full shadow flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-400 absolute top-1/2 right-4 z-20 cursor-pointer"
        >
          &#10095;
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="pt-6"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div className="flex flex-col items-center justify-center text-center space-y-2 px-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-24 object-contain hover:grayscale-0 transition duration-300"
                />
                <p className="text-xs md:text-sm font-medium text-gray-700 px-2">
                  {partner.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;