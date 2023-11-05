import './trending.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchTrendingArticles } from '../../utils/ArticleManager';
import TrendingCard from './TrendingCard';

export default function TrendingSection() {
  const [trendingArticles, setArticles] = useState([]);

  useMemo(() => {
    fetchTrendingArticles(5).then((info) => {
      setArticles(info);
    });
  }, []);

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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
          modules={[Autoplay, Pagination, Navigation]}
        >
          {trendingArticles.map((article) => (
            <SwiperSlide>
              <TrendingCard article={article} />
            </SwiperSlide>
          ))}
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
