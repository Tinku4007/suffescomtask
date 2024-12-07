import Image from 'next/image';
import Link from 'next/link';
import inflammation_img from '../../../assests/Image/chowmin_img.png'
import logo from '../../../assests/Image/logo.png';
import Images from '@/constant/Images';
import Button from '../atoms/Button/Button';

export default function Footer() {
    return (
        <footer className="bg-white pt-[80px]">
            <div className="container mx-auto">
                <h2 className="text-4xl text-black-900 font-bold text-center mb-6">Subscribe for Updates</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-[#f4f1ff] pt-[14px] px-6 pb-[15px] rounded-lg text-center">
                        <h3 className="text-xl text-black-900 font-medium mb-2">Follow Us</h3>
                        <p className="text-gray-500 text-xs">Follow Us for Tasty Updates and Culinary Inspiration</p>
                        <div className="mt-9 flex justify-center flex-wrap space-x-4 text-[#3e0799]">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#3e0799] p-3 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 text-[#ebe5ff]"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.061 2.633.333 3.608 1.308.975.975 1.247 2.243 1.308 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.061 1.366-.333 2.633-1.308 3.608-.975.975-2.243 1.247-3.608 1.308-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.061-2.633-.333-3.608-1.308-.975-.975-1.247-2.243-1.308-3.608-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.061-1.366.333-2.633 1.308-3.608.975-.975 2.243-1.247 3.608-1.308 1.265-.059 1.645-.07 4.849-.07zM12 0c-3.259 0-3.667.015-4.947.072-1.533.067-2.995.348-4.062 1.415C1.462 2.554 1.074 4.016 1.007 5.549.95 6.829.935 7.237.935 10.496c0 3.259.015 3.667.072 4.947.067 1.533.348 2.995 1.415 4.062 1.067 1.067 2.529 1.348 4.062 1.415 1.28.057 1.688.072 4.947.072s3.667-.015 4.947-.072c1.533-.067 2.995-.348 4.062-1.415 1.067-1.067 1.348-2.529 1.415-4.062.057-1.28.072-1.688.072-4.947s-.015-3.667-.072-4.947c-.067-1.533-.348-2.995-1.415-4.062-1.067-1.067-2.529-1.348-4.062-1.415C15.667.015 15.259 0 12 0zm0 5.838c-3.397 0-6.162 2.765-6.162 6.162s2.765 6.162 6.162 6.162 6.162-2.765 6.162-6.162S15.397 5.838 12 5.838zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162S9.704 7.838 12 7.838s4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.44.644-1.44 1.44s.644 1.44 1.44 1.44 1.44-.644 1.44-1.44-.644-1.44-1.44-1.44z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#3e0799] p-3 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 text-[#ebe5ff]"
                                >
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.789 4.656-4.789 1.325 0 2.465.099 2.797.143v3.243h-1.918c-1.504 0-1.796.715-1.796 1.764v2.313h3.59l-.467 3.622h-3.123V24h6.127C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#3e0799] p-3 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 text-[#ebe5ff]"
                                >
                                    <path d="M22.46 6c-.77.35-1.5.59-2.28.69a4.61 4.61 0 002.02-2.57c-.89.53-1.87.92-2.93 1.13A4.39 4.39 0 0016.14 4c-2.39 0-4.32 1.92-4.32 4.3 0 .34.04.67.1.98-3.59-.18-6.78-1.9-8.92-4.5-.37.63-.57 1.36-.57 2.13 0 1.47.75 2.77 1.88 3.54a4.12 4.12 0 01-1.95-.54v.05c0 2.05 1.46 3.77 3.38 4.16-.35.09-.71.14-1.08.14-.27 0-.53-.02-.78-.07.53 1.65 2.07 2.86 3.89 2.9a8.69 8.69 0 01-5.34 1.85c-.35 0-.7-.02-1.04-.06A12.3 12.3 0 006.3 20c8 0 12.37-6.63 12.37-12.38 0-.19 0-.38-.01-.57a8.65 8.65 0 002.14-2.18z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#3e0799] p-3 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 text-[#ebe5ff]"
                                >
                                    <path d="M12 0C5.372 0 0 5.372 0 12c0 5.084 3.162 9.428 7.614 11.08-.105-.946-.199-2.398.04-3.435.223-.97 1.43-6.162 1.43-6.162s-.365-.73-.365-1.81c0-1.692.98-2.956 2.2-2.956 1.037 0 1.537.777 1.537 1.71 0 1.042-.661 2.596-1.001 4.041-.288 1.194.611 2.165 1.81 2.165 2.172 0 3.844-2.29 3.844-5.6 0-2.922-2.102-4.975-5.107-4.975-3.484 0-5.524 2.618-5.524 5.32 0 1.055.406 2.187.915 2.8.102.122.117.23.087.355-.097.383-.315 1.225-.355 1.395-.05.205-.16.25-.37.152-1.379-.64-2.247-2.657-2.247-4.287 0-3.507 2.55-6.735 7.363-6.735 3.86 0 6.856 2.752 6.856 6.425 0 3.846-2.423 6.938-5.786 6.938-1.131 0-2.194-.588-2.557-1.28 0 0-.586 2.228-.718 2.77-.217.938-.8 2.112-1.2 2.83 1.075.333 2.204.515 3.379.515 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#3e0799] p-3 rounded-full hover:[#3e0799]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6 text-[#ebe5ff]"
                                >
                                    <path d="M23.498 6.186a2.995 2.995 0 00-2.105-2.12C19.45 3.523 12 3.523 12 3.523s-7.451 0-9.394.543a3.002 3.002 0 00-2.105 2.12C0 8.122 0 12 0 12s0 3.878.501 5.814a3.005 3.005 0 002.105 2.12c1.943.544 9.394.544 9.394.544s7.451 0 9.393-.544a2.995 2.995 0 002.105-2.12C24 15.878 24 12 24 12s0-3.878-.502-5.814zm-14.679 8.97V8.846l6.432 3.154-6.432 3.156z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="bg-[#3e0799] pt-[14px] px-6 pb-[15px] rounded-lg text-center text-white">
                        <h3 className="text-xl text-white font-medium mb-2">Subscribe</h3>
                        <p className="mb-4 text-white text-xs">Be the first to know about the latest product news & get exclusive offers.</p>
                        <form className="">
                            <div className='flex bg-white p-1 rounded-xl items-center'>
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    className="px-4 py-2 outline-none rounded-full text-gray-700 w-full max-w-xs"
                                />
                                <Button bgColor='#232323' color='#fff' label='Subscribe'></Button>
                            </div>
                        </form>
                    </div>

                    <div className="bg-[#f4f1ff] pt-[14px] px-3 pb-[15px] rounded-lg">
                        <h3 className="text-xl text-black-900 font-medium mb-2 text-center">From The Blog</h3>
                        <div className='flex items-center mt-3 gap-4'>
                            <Image
                                src={Images.footer_img_food_img}
                                alt="Seared steak dish"
                                width={350}
                                height={''}
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <div>
                                <p className="text-gray-500 text-sm">Embarking on a 1-week low-carb diet can lead to a range of effects on the body and mind. By reducing your intake of carbohydrates...</p>
                                <p className="text-black font-medium text-sm pt-2">21 Aug 2024 08:30am</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[50px] grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
                    <Image
                        src={logo}
                        alt="Seared steak dish"
                        width={150}
                        height={''}
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div>
                        <h3 className="text-base text-black font-normal mb-2">Contact Us</h3>
                        <ul className="space-y-1 text-gray-500 text-sm">
                            <li><Link href="#">Subscribe</Link></li>
                            <li><Link href="#">Follow Us</Link></li>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-base text-black font-normal mb-2">How it works</h3>
                        <ul className="space-y-1 text-gray-500 text-sm">
                            <li><Link href="#">Testimonials</Link></li>
                            <li><Link href="#">Kitchen And Delivery Schedule</Link></li>
                            <li><Link href="#">Let’s Compare</Link></li>
                            <li><Link href="#">Why Choose Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-base text-black font-normal mb-2">Partnerships & Affiliates Program</h3>
                        <ul className="space-y-1 text-gray-500 text-sm">
                            <li><Link href="#">Sustainability</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms & Conditions</Link></li>
                            <li><Link href="#">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className='self-center'>
                        <h3 className="text-base text-black font-normal mb-2">We Accept</h3>
                        <Image
                        src={Images.payment_img}
                        alt="Seared steak dish"
                        width={150}
                        height={''}
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    </div>
                </div>

                <div className="text-center flex justify-between border-gray-200 py-6">
                    <p className="text-gray-500 text-sm">Copyright © 2023 Kalofy. All Rights Reserved.</p>
                    <p className="text-gray-500 text-sm underline">Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
}
