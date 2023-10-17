import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import ab03 from '../../assets/images/yoga/ab03.jpg';
import ab02 from '../../assets/images/yoga/ab02.jpg';
import ab01 from '../../assets/images/yoga/ab01.jpg';
import sound from '../../assets/images/yoga/sound.jpg';
import maditation from '../../assets/images/yoga/maditation.jpg';
import relaxing from '../../assets/images/yoga/relaxing.jpg';
import life_coach from '../../assets/images/yoga/life-coach.png';
import meditation from '../../assets/images/yoga/meditation.png';
import nutrition from '../../assets/images/yoga/nutrition.png';
import religious from '../../assets/images/yoga/religious.png';
import cta from '../../assets/images/yoga/cta.jpg';
import t01 from '../../assets/images/yoga/t01.jpg';
import t02 from '../../assets/images/yoga/t02.jpg';
import t03 from '../../assets/images/yoga/t03.jpg';
import t04 from '../../assets/images/yoga/t04.jpg';
import i1 from '../../assets/images/yoga/i1.jpg';
import i2 from '../../assets/images/yoga/i2.jpg';
import i3 from '../../assets/images/yoga/i3.jpg';
import i4 from '../../assets/images/yoga/i4.jpg';
import i5 from '../../assets/images/yoga/i5.jpg';
import i6 from '../../assets/images/yoga/i6.jpg';
import i7 from '../../assets/images/yoga/i7.jpg';
import i8 from '../../assets/images/yoga/i8.jpg';
import i9 from '../../assets/images/yoga/i9.jpg';
import i10 from '../../assets/images/yoga/i10.jpg';
import i11 from '../../assets/images/yoga/i11.jpg';
import i12 from '../../assets/images/yoga/i12.jpg';
import i13 from '../../assets/images/yoga/i13.jpg';
import i14 from '../../assets/images/yoga/i14.jpg';
import i15 from '../../assets/images/yoga/i15.jpg';

import Navbar from '../../component/Navbar/navbar'
import CookieModal from '../../component/cookieModal';
import FooterTwo from '../../component/Footer/footerTwo';

import TinySlider from 'tiny-slider-react';
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import * as Icon from 'react-feather';
import {FaArrowRight, BsCheckCircle} from '../../assets/icons/icons'

const settings = {
    container: '.tiny-twelve-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 12
        },

        992: {
            items: 8
        },

        767: {
            items: 6
        },

        320: {
            items: 2
        },
    },
}
const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15];

export default function IndexYoga() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpenLightbox, setisOpen] = useState(false);
    const [isOpenTab, setisOpenTab] = useState(0);
    const [isOpen, setOpen] = useState(false)

    const handleTabClick = (index) => {
        setisOpenTab(index);
    };

    const services = [
        { link: i1, image: i1 },
        { link: i2, image: i2 },
        { link: i3, image: i3 },
        { link: i4, image: i4 },
        { link: i5, image: i5 },
        { link: i6, image: i6 },
        { link: i7, image: i7 },
        { link: i8, image: i8 },
        { link: i9, image: i9 },
        { link: i10, image: i10 },
        { link: i11, image: i11 },
        { link: i12, image: i12 },
        { link: i13, image: i13 },
        { link: i14, image: i14 },
        { link: i15, image: i15 }
    ]
    const currentImage = images[currentImageIndex];
    
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const meditationData = [
        {
            image:sound,
            title:"Sound Therapy",
            desc:"Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.",
            Icon:Icon.Headphones
        },
        {
            image:maditation,
            title:"Meditation",
            desc:"Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.",
            Icon:Icon.GitMerge
        },
        {
            image:relaxing,
            title:"Mindfullness",
            desc:"Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.",
            Icon:Icon.Sun
        },
    ]
    const workData = [
       {
        image:life_coach,
        title:"Life Coaching",
        desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
       },
       {
        image:meditation,
        title:"Meditation & Yoga",
        desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
       },
       {
        image:nutrition,
        title:"Nutrition",
        desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
       },
       {
        image:religious,
        title:"Religion",
        desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
       },
    ]
    const timeData = [
        {time:"8:00AM",image:t01, title:"Dhanurasana", name:"- Calvin Carlo" },
        {time:"9:00AM",image:t02, title:"Bhujangasana", name:"- Cristina Murphy" },
        {time:"10:00AM",image:t03, title:"Sirsasana", name:"- Alice Perry" },
        {time:"11:00AM",image:t04, title:"Padmasana", name:"- Hayley Matthews" },
        {time:"2:00PM",image:i1, title:"Utthita Parsvakonasana", name:"- Calvin Carlo" },
        {time:"3:00PM",image:i2, title:"Natarajasana", name:"- Cristina Murphy" },
        {time:"4:00PM",image:i3, title:"Halasana", name:"- Alice Perry" },
        {time:"5:00PM",image:i4, title:"Vajrasana", name:"- Hayley Matthews" },
    ] 
    const teamData = [
        {image:t01, name:"Calvin Carlo", title:"Yoga Teacher"},
        {image:t02, name:"Cristina Murphy", title:"Yoga Teacher"},
        {image:t03, name:"Alice Perry", title:"Yoga Teacher"},
        {image:t04, name:"Hayley Matthews", title:"Yoga Teacher"},
    ]
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative lg:pt-64 py-36 bg-[url('../../assets/images/yoga/bg.jpg')] bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70 z-2"></div>
                <div className="container relative z-3">
                    <div className="grid grid-cols-1 mt-24">
                        <div className="text-center">
                            <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-24 w-24 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/40 text-white dark:bg-slate-900/10 dark:hover:bg-slate-900/40 transition-all duration-500">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                            </Link>

                            <h4 className="font-bold text-white text-2xl mt-6">Body & Mind</h4>
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Fitness Classes for Every Goal</h1>
                            <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-8">
                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Join Our Classes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

            <section className="relative overflow-hidden md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="grid grid-cols-12 gap-6 items-center relative">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab03} className="shadow rounded-md" alt="" />
                                        <img src={ab02} className="shadow rounded-md" alt="" />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab01} className="shadow rounded-md" alt="" />
                                    </div>
                                </div>
                                <div className="overflow-hidden after:content-[''] after:absolute after:h-[512px] after:w-[512px] after:bg-indigo-600/5 after:top-0 after:-end-5 after:-z-1 after:rounded-full"></div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="mb-6 md:text-4xl md:leading-normal text-3xl leading-normal font-semibold">The Techwind Yoga <br /> & Meditation</h3>

                                <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                                <div className="mt-6">
                                    <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-semibold text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn more <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-center">
                        <div className="md:col-span-6">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Most Popular Meditation Therapy</h3>
                        </div>

                        <div className="md:col-span-6">
                            <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-8 gap-[30px]">
                        {meditationData.map((item,index)=>{
                            const Icon = item.Icon
                            return(
                                <div key={index} className="group rounded-md shadow-md dark:shadow-gray-800 relative overflow-hidden">
                                    <img src={item.image} className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/60 group-hover:via-slate-900/40 from-slate-900 top-3/4 group-hover:top-0 transition-all duration-500"></div>

                                    <div className="absolute bottom-0 mx-auto start-0 end-0 group-hover:bottom-0 transition-all duration-500 px-6 pb-6 text-center">
                                        <Icon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 mx-auto"></Icon>

                                        <div className="mt-6">
                                            <Link to="#" className="text-xl font-semibold text-white transition-all duration-500">{item.title}</Link>

                                            <p className="text-white/50 hidden group-hover:block transition-all duration-500 ease-in-out mt-4">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">How It Work ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {workData.map((item,index)=>{
                            return(
                                <div key={index} className="group relative lg:px-6 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="h-32 w-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                            <img src={item.image} className="w-14 h-14" alt="" />
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Link to="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1">
                        <div className="relative overflow-hidden bg-indigo-600 rounded-md shadow dark:shadow-gray-700">
                            <div className="grid md:grid-cols-2 items-center gap-[30px]">
                                <div className="relative">
                                    <img src={cta} alt="" />
                                    <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-white p-4">
                                        <h4 className="leading-normal text-4xl mb-3 font-semibold">Check out some of our <br /> Yoga Poses Videos.</h4>

                                        <p className="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                                        <ul className="list-none  text-white/50 mt-4">
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 w-full table relative bg-[url('../../assets/images/yoga/bg02.jpg')] bg-center bg-fixed bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-4xl text-3xl text-white font-semibold">Yoga is the journey of the self <br /> through the self</h3>

                        <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div className="mt-8">
                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Join Our Classes</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Yoga Schedule</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="sticky top-20">
                                <ul className="flex-column text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Monday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Tuesday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Wednesday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Thursday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(4)} className={`${isOpenTab === 4 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Friday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(5)} className={`${isOpenTab === 5 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Saturday</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="myTabContent" className="bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                {isOpenTab === 0 ?
                                    <div className="relative overflow-hidden">
                                        {timeData.map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/ab01.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 1 ?
                                    <div className="relative overflow-hidden">
                                        {timeData.slice(0,5).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/ab02.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 2 ?
                                    <div className="relative overflow-hidden" >
                                        {timeData.slice(0,5).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/ab03.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 3 ? 
                                    <div className="relative overflow-hidden">
                                        {timeData.slice(0,4).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/i9.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 4 ? 
                                    <div className="relative overflow-hidden">
                                        {timeData.slice(0,6).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/bg.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 5 ?
                                    <div className="relative overflow-hidden">
                                        {timeData.slice(0,3).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="h-10 w-10 rounded-full shadow dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/i11.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Teachers</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {teamData.map((item,index)=>{
                            return(
                                <div key={index} className="lg:col-span-3 md:col-span-6">
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden shadow-md dark:shadow-gray-800">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                            <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out flex justify-center">
                                                <li><Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link></li>
                                                <li><Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-4 w-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link></li>
                                                <li><Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link></li>
                                            </ul>
                                        </div>

                                        <div className="content mt-3">
                                            <Link to="" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <div className="container-fluid relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-twelve-item">
                        <TinySlider settings={settings}>
                            {services.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="card border-0 rounded-0">
                                        <div className="card-body p-0">
                                            <div className="lightbox d-inline-block" title="">
                                                <img src={item.image} className="" onClick={() => handleImageClick(index)} alt="Yoga Asana" />
                                                <div className="overlay bg-dark"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TinySlider>

                    </div>
                    {isOpenLightbox && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                            nextSrc={images[(currentImageIndex + 1) % images.length]}

                            onCloseRequest={() => setisOpen(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}

                    <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                        <Link to="https://www.instagram.com/shreethemes/" target="_blank"className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                    </div>
                </div>
            </div>
            <FooterTwo/>
            <CookieModal />
        </>
    )
}
