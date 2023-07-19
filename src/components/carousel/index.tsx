'use client'

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Pagination, Virtual, Autoplay } from 'swiper/modules'

import './styles.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { cn } from '@/lib/utils'
import { useCallback, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = Array.from({ length: 6 }).map(
  (_, i) => `https://swiperjs.com/demos/images/nature-${i + 1}.jpg`,
)

type TCarouselProps = {
  className?: string
  images?: string[]
}

export function Carousel({ className }: TCarouselProps) {
  const sliderRef = useRef<SwiperRef>(null)
  const [initialized, setInitialized] = useState(false)

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext()
  }, [])

  return (
    <div className="relative">
      <Swiper
        ref={sliderRef}
        loop
        virtual
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Virtual, Autoplay]}
        onBeforeInit={() => setInitialized(true)}
        className={cn('w-full h-96 rounded-lg shadow-lg relative', className)}
      >
        {images.map((url) => (
          <SwiperSlide
            key={url}
            className="!flex !items-center !justify-center text-md text-center"
          >
            <img src={url} loading="lazy" alt="carolsel item" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
          </SwiperSlide>
        ))}
        <button
          className={cn(
            'absolute invisible bg-black/50 py-1 rounded-md -left-2 z-10 top-1/2 -translate-y-1/2',
            initialized && 'visible',
          )}
          onClick={handlePrev}
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
        <button
          className={cn(
            'absolute invisible bg-black/50 py-1 rounded-md -right-2 z-10 top-1/2 -translate-y-1/2',
            initialized && 'visible',
          )}
          onClick={handleNext}
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      </Swiper>
    </div>
  )
}
