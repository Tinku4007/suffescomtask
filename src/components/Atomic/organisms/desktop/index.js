import React from 'react'
import Carousel from '../../atoms/Carousel'
import Image from 'next/image'
import ingredients_img from '../../../../assests/Image/quality.png'
import sustainability_img from '../../../../assests/Image/gluten.png'
import inflammation_img from '../../../../assests/Image/sourced.png'
import scooter_img from '../../../../assests/Image/scooter_img.png'
import cross_scooter_img from '../../../../assests/Image/cross_scooter_img.png'
import man_img from '../../../../assests/Image/man_img.png'
import { compareJson } from '@/data_json/CompareData'
import { howItsWorks } from '@/data_json/HowItsWorks'
import { testimonialData } from '@/data_json/TestimonialsData'
import Images from '@/constant/Images'
import { kitchenSection } from '@/data_json/KitchenData'

const Desktop = () => {
    return (
        <div>
            <div className='bg-blue-900 flex justify-center items-center py-[83px] px-5 overflow-hidden'>
                <div className='container w-full h-full relative'>
                    <Carousel heroSec={true} />
                    <div className='z-10 absolute -right-10 -bottom-12'>
                        <Image
                            src={Images.pattey_img}
                            alt="User profile"
                            width={140}
                            height={120}
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <div className='z-[1] animation'>
                        <Image
                            src={Images.pattey_img}
                            alt="User profile"
                            width={140}
                            height={120}
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>

            <section className="pt-20">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[37px] bg-[#FAF9FF] rounded-xl">
                        <div className="w-full h-full relative">
                            <Carousel item={howItsWorks} size={true} withImage={true} />
                        </div>
                        <div className='p-[22px] pb-[45px]'>
                            <h2 className="text-3xl font-bold mb-6 text-black-900">How it works</h2>
                            <div className="space-y-[58px]">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 arrow_img bg-purple-100 text-purple-500 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                                        <Image
                                            src={Images.oneSec_img}
                                            alt="Seared steak dish"
                                            width={150}
                                            height={150}
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-black-900">Customize Your Order</h3>
                                        <p className="text-[#767474] text-base">
                                            Personalize your meal by selecting portion sizes, add-ons, or any special instructions to suit your taste preferences.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 arrow_img bg-purple-100 text-purple-500 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                                        <Image
                                            src={Images.secTwo_img}
                                            alt="Seared steak dish"
                                            width={150}
                                            height={150}
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-black-900">Standard Macros vs Advanced Macros</h3>
                                        <p className="text-[#767474] text-base">
                                            Select the meal plan that is best suited for your lifestyle and helps you reach your goals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start relative">
                                    <div className="flex-shrink-0  arrow_img bg-purple-100 text-purple-500 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                                        <Image
                                            src={Images.secThree_img}
                                            alt="Seared steak dish"
                                            width={150}
                                            height={150}
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-black-900">Meals are Cooked Fresh</h3>
                                        <p className="text-[#767474] text-base">
                                            Our expert chefs prepare your meals with care, using only fresh ingredients to ensure quality and taste in every bite.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0  bg-purple-100 text-purple-500 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                                        <Image
                                            src={Images.secFour_img}
                                            alt="Seared steak dish"
                                            width={150}
                                            height={150}
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-black-900">Receive your Delivery</h3>
                                        <p className="text-[#767474] text-base">
                                            Your meal will be delivered right to your doorstep. We ensure fast and safe delivery, whether it’s contactless.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-20">
                <div className='container mx-auto bg-[#FAF9FF] rounded-xl pt-8 pb-[59px]'>
                    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-black-900 sm:text-4xl">
                            Why Choose Us
                        </h2>
                        <p className="text-[#3E0799] mt-2 text-base font-medium pt-[18px]">
                            Features and benefits of Kalofy
                        </p>
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src={ingredients_img}
                                        alt="Seared steak dish"
                                        width={70}
                                        height={''}
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <h3 className="mt-3 text-base font-semibold text-black">
                                    Only Quality Ingredients
                                </h3>
                                <p className="mt-3 text-[#807f82] text-sm font-normal">
                                    Our focus is on plant-rich, nutrient-dense ingredients so you get
                                    the most out of every meal.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src={inflammation_img}
                                        alt="Seared steak dish"
                                        width={70}
                                        height={70}
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <h3 className="mt-3 text-base font-semibold text-black">
                                    Sourced for Sustainability
                                </h3>
                                <p className="mt-3 text-[#807f82] text-sm font-normal">
                                    Our focus is on plant-rich, nutrient-dense ingredients so you get
                                    the most out of every meal.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src={sustainability_img}
                                        alt="Seared steak dish"
                                        width={70}
                                        height={70}
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <h3 className="mt-3 text-base font-semibold text-black">
                                    No Gluten, and No Inflammation
                                </h3>
                                <p className="mt-3 text-[#807f82] text-sm font-normal">
                                    Our entire menu is made without gluten or dairy products, and
                                    contains no refined sugars.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-20 px-4 bg-white">
                <div className='container mx-auto'>
                    <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
                        Let’s Compare
                    </h2>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> */}
                    <div className="md:flex gap-8 ">
                        <div className="overflow-x-auto w-full md:w-[60%]">
                            <table className="min-w-full border-collapse border border-[#FBFAFF]">
                                <thead>
                                    <tr>
                                        <th className="text-left w-[38%] py-4 px-6 bg-[#FBFAFF] text-black text-base font-semibold">
                                            FEATURES
                                        </th>
                                        <th className="py-4 px-6 w-[31%] bg-[#3e0799] text-white text-base font-semibold">
                                            KALOFY
                                        </th>
                                        <th className="py-4 px-6 w-[31%] bg-[#FBFAFF] text-black text-base font-semibold">
                                            INDUSTRY
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        "AI Meal Generation",
                                        "Nutritional Value",
                                        "Ingredient Sourcing",
                                        "Taste and Culinary Experience",
                                        "Packaging and Sustainability",
                                        "Customer Support",
                                        "Meal Variety",
                                        "Dietary Restrictions",
                                    ].map((feature, index) => (
                                        <tr key={index} className="even:bg-gray-50">
                                            <td className="py-4 px-6 border text-sm font-normal border-[#fbfaff] bg-[#fbfaff] text-gray-600">
                                                {feature}
                                            </td>
                                            <td className="py-4 px-6 border border-[#3e0799] bg-[#3e0799] text-center">
                                                {/* <span className="text-white text-xl">✔</span> */}
                                                <div className='flex justify-center'>
                                                    <Image
                                                        src={Images.roundarrow_img}
                                                        alt="Seared steak dish"
                                                        width={20}
                                                        height={''}
                                                        objectFit="cover"
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 border bg-[#fbfaff] border-[#fbfaff] text-center">
                                                <div className='flex justify-center'>
                                                    <Image
                                                        src={Images.cross_circule_img}
                                                        alt="Seared steak dish"
                                                        width={20}
                                                        height={''}
                                                        objectFit="cover"
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="w-full md:w-[40%] h-full">
                            <Carousel item={compareJson} withImage={true} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-20 bg-white relative overflow-hidden">
                <div className='container mx-auto'>
                    <h2 className="text-4xl text-center font-bold text-black-900 mb-[52px]">
                        Kitchen And Delivery Schedule
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className='w-full h-full'>
                            <Carousel item={kitchenSection} withImage={true} videoSrc={true} />
                        </div>

                        <div>
                            <p className="text-xl font-bold text-gray-800 mb-4">
                                Optimize your Kitchen Workflow and Delivery Schedules Effortlessly
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Deliveries available Monday to Saturday with customizable time slots, ensuring convenience.",
                                    "No deliveries on Sunday, providing a day for rest and preparation.",
                                    "Choose delivery times available each day except Sunday.",
                                ].map((text, index) => (
                                    <li key={index} className="flex items-center gap-[11px]">
                                        {/* <span className="text-green-500 text-lg mr-3">✔</span> */}
                                        <Image
                                            src={Images.greencheck_img}
                                            alt="Seared steak dish"
                                            width={20}
                                            height={''}
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                        <p className="text-gray-600">{text}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4 items-center mt-8">
                                {[
                                    { day: "Mon", available: true },
                                    { day: "Tue", available: true },
                                    { day: "Wed", available: true },
                                    { day: "Thu", available: true },
                                    { day: "Fri", available: true },
                                    { day: "Sat", available: true },
                                    { day: "Sun", available: false },
                                ].map((slot, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div
                                            className={`w-12 h-12 flex items-center justify-center rounded-full border`}
                                        >
                                            {slot.available ? (
                                                <Image
                                                    src={scooter_img}
                                                    alt="Seared steak dish"
                                                    width={70}
                                                    height={''}
                                                    objectFit="cover"
                                                    className="rounded-lg"
                                                />

                                            )
                                                :
                                                (
                                                    <Image
                                                        src={cross_scooter_img}
                                                        alt="Seared steak dish"
                                                        width={70}
                                                        height={''}
                                                        objectFit="cover"
                                                        className="rounded-lg"
                                                    />
                                                )
                                            }
                                        </div>
                                        <span className="mt-2 text-base font-normal text-black">{slot.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image
                        src={Images.animation_image_round}
                        alt="Seared steak dish"
                        width={250}
                        height={200}
                        objectFit="cover"
                        className="rounded-lg moving-image"
                    />
                </div>
            </section>
            <section className="bg-[#F4F1FF] mt-20">
                <div className="container mx-auto px-4 pt-5 flex flex-col items-center space-y-8 md:flex-row md:items-center md:space-x-12">
                    <div className="flex-shrink-0 relative">
                        <div className="relative overflow-hidden w-[20rem] h-72 md:w-[32rem] md:h-[27rem]">
                            <Image
                                src={man_img}
                                alt="Seared steak dish"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 testimonials">
                        <h2 className="text-3xl mb-4 md:text-4xl text-center font-bold text-black-900 text-black mb-4">
                            Testimonials
                        </h2>
                        <Carousel item={testimonialData} testimonial={true} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Desktop