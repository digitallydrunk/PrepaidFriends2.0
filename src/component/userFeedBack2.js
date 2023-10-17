import React from 'react'
import imageP from '../assets/images/digital/02.jpg';
import image10 from '../assets/images/client/03.jpg';
import image11 from '../assets/images/client/04.jpg';
import image12 from '../assets/images/client/06.jpg';
import image8 from '../assets/images/client/05.jpg';
import image9 from '../assets/images/client/06.jpg';
import TinySlider from 'tiny-slider-react';
const settings = {
    container: '.tiny-three-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
}
export default function UserFeedBack2() {
    const services = [
        {
            description: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
            image: image8,
            name: 'Calvin Carlo',
            role: 'Manager'
        },
        {
            description: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
            image: image9,
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
            image: image10,
            name: 'Jemina CLone',
            role: 'Manager'
        },
        {
            description: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
            image: image11,
            name: 'Smith Vodka',
            role: 'Manager'
        },
        {
            description: '" There is now an abundance of readable dummy texts. These are usually used when a text is required. "',
            image: imageP,
            name: 'Cristino Murfi',
            role: 'Manager'
        },
        {
            description: '" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "',
            image: image12,
            name: 'Cristino Murfi',
            role: 'Manager'
        }
    ]
    return (
        <div>
            <div className="grid grid-cols-1 mt-8">
                <div className="tiny-three-item">
                    <TinySlider settings={settings}>
                        {services.map((item, index) => (

                            <div className="tiny-slide text-center" key={index}>
                                <div className="cursor-e-resize">
                                    <div className="content relative shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                                        <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                        <p className="text-slate-400">{item.description}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-3 space-x-1">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>

                                    <div className="text-center mt-5">
                                        <img src={item.image} className="h-14 w-14 rounded-full shadow-md mx-auto" alt="" />
                                        <h6 className="mt-2 font-semibold">{item.name}</h6>
                                        <span className="text-slate-400 text-sm">{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TinySlider>
                </div>
            </div>
        </div>
    )
}
