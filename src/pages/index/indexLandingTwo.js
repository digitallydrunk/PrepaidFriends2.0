import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import logo_icon_64 from '../../assets/images/logo-icon-64.png';
import about01 from '../../assets/images/business/about01.jpg';
import about02 from '../../assets/images/business/about02.jpg';
import image from '../../assets/images/portfolio/1.jpg';
import image1 from '../../assets/images/portfolio/2.jpg';
import image2 from '../../assets/images/portfolio/3.jpg';
import image3 from '../../assets/images/portfolio/4.jpg';
import image4 from '../../assets/images/portfolio/5.jpg';
import image5 from '../../assets/images/portfolio/6.jpg';
import image6 from '../../assets/images/portfolio/7.jpg';
import image7 from '../../assets/images/portfolio/8.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import Blog2 from '../../component/blog2';
import CookieModal from '../../component/cookieModal';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FaArrowRight,FaRegComment,HiOutlineCog6Tooth,MdApi, FiAirplay,FiCamera, TbCameraPlus, PiFlowerLight, FiPhone} from '../../assets/icons/icons'

export default function IndexLandingTwo() {
    const [isOpen, setOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImage, setIsImage] = useState(false);

    const images = [image, image1, image2, image3, image4, image5, image6, image7]

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsImage(true);
    };
    const currentImage = images[currentImageIndex];

    const servicesData = [
        {
            icon:FiAirplay,
            title:"UX / UI Design",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:MdApi,
            title:"IOS App Designer",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:TbCameraPlus,
            title:"Photography",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:PiFlowerLight,
            title:"Graphic Designer",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:HiOutlineCog6Tooth,
            title:"Web Security",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:FaRegComment,
            title:"24/7 Support",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
    ]
    const portfolioData = [
        {
            image:image,
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            image:image1,
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            image:image2,
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            image:image3,
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            image:image4,
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            image:image5,
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            image:image6,
            name:"Mockup Collection",
            title:"Abstract"
        },
        {
            image:image7,
            name:"Mockup Collection",
            title:"Abstract"
        },
    ]
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="py-36 md:py-64 w-full table relative bg-[url('../../assets/images/bg-video.png')] bg-center bg-no-repeat bg-cover">
                <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                    <iframe
                        src="https://player.vimeo.com/video/33955001?background=1&autoplay=1&loop=1&byline=0&title=0"
                        className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
                        title="Vimeo Video"
                    ></iframe>

                </div>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <img src={logo_icon_64} className="mx-auto" alt="" />
                        <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium my-6 position-relative">We Collaboration Easy & Fast</h4>

                        <p className="text-white opacity-50 mb-0 max-w-xl text-lg mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                        <div className="relative mt-8">
                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                    <Link to="#"><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
                </div>

                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-5">
                            <div className="relative">
                                <img src={about01} className="rounded-md" alt="" />

                                <div className="absolute bottom-24 end-0">
                                    <img src={about02} className="rounded-md shadow-md w-48 h-48" alt="" />
                                    <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                        <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610"
                                            className="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                        <div className="md:col-span-7">
                            <div className="lg:ms-4">
                                <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are the largest <br /> Business expert </h4>
                                <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                                <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Buy Now <i className="mdi mdi-chevron-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we offer ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                        {servicesData.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6">
                                    <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                        <Icons className='w-7 h-7'/>
                                    </div>
        
                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container-fluid relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 py-36 bg-[url('../../assets/images/team.jpg')] bg-center bg-no-repeat bg-cover">
                        <div className="absolute inset-0 bg-slate-900/70"></div>
                        <div className="container relative">
                            <div className="grid grid-cols-1 text-center">
                                <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Stop leaving money on the table.</h3>

                                <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Portfolio</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Works & Projects</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                        {portfolioData.map((item,index)=>{
                            return(
                                <div key={index} className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                    <img src={item.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="" />
                                    <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>
        
                                    <div className="content">
                                        <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                                            <Link onClick={() => handleImageClick(index)} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera className="w-4 h-4"/></Link>
                                        </div>
        
                                        <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                                            <Link to="/portfolio-detail-one" className="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-100 tag mb-0">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                        {isImage && (
                                <Lightbox
                                    mainSrc={currentImage}
                                    prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                                    nextSrc={images[(currentImageIndex + 1) % images.length]}

                                    onCloseRequest={() => setIsImage(false)}
                                    onMovePrevRequest={handleMovePrev}
                                    onMoveNextRequest={handleMoveNext}
                                />
                            )}
                    </div>
                </div>

                <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>

                <Blog2 className={"container relative md:mt-24 mt-16"} id={""} />


                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Contact us</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have Question ? Get in touch!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>

                        <div className="mt-6">
                            <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FiPhone className="me-1 text-lg"/> Contact Me</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <CookieModal />
        </>
    )
}
