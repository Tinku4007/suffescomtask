'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import Button from '../Button/Button';
import Images from '@/constant/Images';

const Carousel = ({ withImage, item, size, videoSrc, testimonial, heroSec }) => {
    const renderHeroSlide = () => (
        <>
            {['1', '2'].map((_, idx) => (
                <SwiperSlide key={idx}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                        <div className="text-white space-y-6 md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-[700] leading-[1.2] !leading-[1.2] ">
                                Fresh, Nutritious Meals Delivered Directly to your Door
                            </h1>
                            <p className="text-lg md:text-base font-light">
                                Healthy Fresh, nutritious meals crafted for your well-being—savor delicious, balanced dishes that make healthy eating simple and enjoyable.
                            </p>
                            <Button label='Get Started' borderColor="white" bgColor="transparent" />
                        </div>
                        <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-lg">
                            <video className="rounded-lg object-cover w-full h-full" autoPlay loop muted playsInline>
                                <source src="https://media.istockphoto.com/id/180617222/video/adding-a-sprinkle-of-cheese-on-pizza.mp4?s=mp4-640x640-is&k=20&c=S7sp2zrwfn8pi4yjFy74CAQI9Z12pkL7arVqw9RzgWg=" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </>
    );

    const renderTestimonialSlides = () => (
        <>
            {item?.map((slideImage, index) => (
                <SwiperSlide key={`${index}-testimonial`}>
                    <div className="w-full">
                        <p className="text-gray-400 text-[15px] mb-4">{slideImage.title}</p>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={slideImage?.imgSrc}
                                    alt="User profile"
                                    width={60}
                                    height={60}
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                                <div>
                                    <h4 className="text-sm font-medium text-black">{slideImage?.name}</h4>
                                    <p className="text-sm text-[#7a787f]">{slideImage?.desitation}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-1 mt-3">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5 text-[#219653]"
                                        >
                                            <path d="M12 17.27l6.18 3.73-1.64-7.19 5.46-4.73-7.25-.62L12 2 9.25 8.46l-7.25.62 5.46 4.73-1.64 7.19L12 17.27z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-black text-sm font-semibold ml-2">5.5</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </>
    );

    const renderWithImageSlides = () => (
        <>
            {item?.map((slideImage, index) => (
                <SwiperSlide key={`${index}-withImage`}>
                    <div className="relative w-full flex items-center justify-end h-full rounded-lg overflow-hidden">
                        {videoSrc ? (
                            <video className="rounded-lg object-cover w-full h-full" autoPlay loop muted playsInline>
                                <source src={slideImage.img} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : slideImage?.img ? (
                            <Image
                                src={slideImage?.img}
                                alt="Carousel Image"
                                layout={size ? 'fill' : undefined}
                                height={size ? undefined : 500}
                                width={size ? undefined : 500}
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        ) : null}
                    </div>
                </SwiperSlide>
            ))}
        </>
    );

    return (
        <div className={`${heroSec ? '' : 'h-full w-full'}`}>
            <Swiper
                modules={[Navigation, Scrollbar, A11y, EffectFade, Autoplay]}
                navigation={heroSec}
                className="mySwiper w-full h-full"
                slidesPerView={1}
                spaceBetween={20}
                effect={withImage ? 'fade' : undefined}
                fadeEffect={{ crossFade: true }}
                speed={testimonial ? 4000 : heroSec ? 3000 : 1500}
                loop
                autoplay={
                    heroSec
                        ? false
                        : {
                            delay: 1000,
                            disableOnInteraction: false,
                        }
                }
            >
                {heroSec && !withImage && renderHeroSlide()}
                {testimonial && renderTestimonialSlides()}
                {withImage && renderWithImageSlides()}
            </Swiper>
        </div>
    );
};

export default Carousel;
