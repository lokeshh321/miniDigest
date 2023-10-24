import './trending.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import TrendingCard from './TrendingCard';

export default function TrendingSection() {
  return (
    <section className=" projects hidden md:block" id="projects">
      <div className="flex projects__container">
        <Button
          className="projects__swiper-prev"
          style={{ backgroundColor: 'transparent', marginLeft: 50 }}
          disableRipple
        >
          <ChevronLeft size="50px" color="#9CA3AF" />
        </Button>
        <Swiper
          className="projects__swiper"
          loop
          grabCursor
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.projects__swiper-next',
            prevEl: '.projects__swiper-prev',
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
          }}
          modules={[Pagination, Navigation]}
        >
          {/* {articles.map((course) => ( */}
          <SwiperSlide>
            <TrendingCard />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard />
          </SwiperSlide>
          {/* ))} */}
        </Swiper>
        <Button
          className="projects__swiper-next"
          style={{ backgroundColor: 'transparent', marginRight: 50 }}
          disableRipple
        >
          <ChevronRight size="50px" color="#9CA3AF" />
        </Button>
      </div>
    </section>
  );
}
