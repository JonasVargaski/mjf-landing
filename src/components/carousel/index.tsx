'use client'

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import './styles.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Fancybox } from '../fancybox'

type TCarouselProps = {
  className?: string
  images: string[]
}

export function Carousel({ className, images }: TCarouselProps) {
  const sliderRef = useRef<SwiperRef>(null)
  const [initialized, setInitialized] = useState(false)
  const [domLoaded, setDomLoaded] = useState(false)

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext()
  }, [])

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <Fancybox options={{ Carousel: { infinite: false } }}>
      <div className="relative min-h-[384px]">
        {domLoaded && (
          <Swiper
            ref={sliderRef}
            loop
            autoplay={{
              delay: 13000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            onBeforeInit={() => setInitialized(true)}
            className={cn(
              'w-full h-96 rounded-lg shadow-lg relative group',
              className,
            )}
          >
            {images.map((url) => (
              <SwiperSlide
                key={url}
                className="!flex !items-center !justify-center text-md text-center relative"
              >
                <Image
                  src={url}
                  alt="carolsel item"
                  data-fancybox="gallery"
                  className="cursor-zoom-in"
                  quality={100}
                  priority
                  fill
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
              </SwiperSlide>
            ))}
            <button
              className={cn(
                'absolute opacity-0 transition-all invisible text-white bg-black/50 py-1 rounded-md -left-2 z-10 top-1/2 -translate-y-1/2 group-hover:opacity-100',
                initialized && 'visible',
              )}
              aria-label="previous slide"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button
              className={cn(
                'absolute opacity-0 transition-all invisible text-white bg-black/50 py-1 rounded-md -right-2 z-10 top-1/2 -translate-y-1/2 group-hover:opacity-100',
                initialized && 'visible',
              )}
              aria-label="next slide"
              onClick={handleNext}
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </Swiper>
        )}
      </div>
    </Fancybox>
  )
}
