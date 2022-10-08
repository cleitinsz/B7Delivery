import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css';
import styles from './styles.module.css'

export default function Banner (){
    return(
        <div className={styles.container}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay]}
                className={styles.swiper}
            >
      <SwiperSlide className={styles.slide}><img src='/tmp/banner1.png' /></SwiperSlide>
      <SwiperSlide className={styles.slide}><img src='/tmp/banner2.png' /></SwiperSlide>
    </Swiper>
        </div>
    )
}