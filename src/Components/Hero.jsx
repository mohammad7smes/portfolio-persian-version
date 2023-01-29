import pme from "../assets/img/photome.jpg"
import github from "../assets/img/github-1.svg"
import github2 from "../assets/img/github-2.svg"
import instagram from "../assets/img/instagram.png"

import logo from "../assets/img/logo.webp"
import phone from "../assets/img/phone.png"
import info from "../assets/img/info.png"
import dArrow from "../assets/img/down-arrow.png"

import nodejs from "../assets/img/node-js-icon.png"
import reactico from "../assets/img/react-js-icon.png"
import mongo from "../assets/img/mongodb-icon.png"
import express from "../assets/img/express-js-icon.png"

import { Link } from "react-router-dom";


const Hero = () => {


    return (
        <>
            <nav className={`flex justify-between p-5  `}>
                <div className="logo">
                    <a href="#"><img src={logo} alt="" className="w-[50px]" /></a>
                </div>
                <ul className="flex w-[30%] justify-evenly md:w-[10%]">
                    <li>
                        <Link to="/Contact">
                            <img src={phone} alt="" className="w-[30px] md:w-[40px]" />
                        </Link>
                    </li>
                </ul>
            </nav >


            <section className=" flex flex-col items-center mt-10 md:flex-row md:justify-around">

                <div className="mb-16 text-center md:mt-[10%] lg:mt-[5%]">
                    <h1 className="text-4xl bg-btnColor p-2 nastaliq-font md:text-6xl">میلیون ها کیلومتر اسکرول کردم</h1>
                    <h1 className="text-5xl bg-btnColor p-2 mt-10 nastaliq-font md:text-7xl">تا به هدفم نزدیکتر شوم</h1>
                    <h1 className="text-4xl bg-btnColor p-2 mt-8 nastaliq-font md:text-6xl md:mt-10">این داستان همچنان ادامه دارد</h1>
                </div>

                <div className="flex flex-col items-center mt-10">
                    <img src={pme} alt="" className="w-[250px] rounded-[50%] shadow-lg" />
                    <h1 className="mt-5 text-white text-2xl font-bold">محمد اسمعیلزاده    </h1>
                    <h2>توسعه دهنده فرانت اند</h2>

                    <div className="icons flex mt-7">
                        <a href="https://github.com/mohammad7smes" className="mt-1"><img src={github} alt="" className="text-white w-[40px]" /></a>
                        <a href="https://instagram.com/mohammad.esmilzadeh"><img src={instagram} alt="" className="text-white w-[50px]" /></a>
                    </div>
                    <Link to="/Contact" className=" bg-blue-600  mt-5 p-2 rounded-lg  justify-self-center hover:bg-btnColor hover:transition-colors focus:border focus:border-blue-500"> سفارش پروژه</Link>
                </div>




            </section>

            <div className="flex justify-center mb-[10%]">
                <button type="button" className="anime-downUp">
                    <img src={dArrow} alt="down-arrow" className="w-[80px]" />
                </button>
            </div>

            <div className="mt-[5rem] w-[70%] mx-auto ">
                <h1 className="text-4xl mb-5">درباره من</h1>
                <p className="text-justify text-xl leading-8 md:text-2xl">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>

            <div className="mt-[5rem] w-[70%] mx-auto">
                <h1 className="text-4xl mb-5"> مهارت ها</h1>
                <div className="flex flex-col  md:justify-evenly ">
                    <div className="flex my-2 justify-evenly">
                        <img src={reactico} alt="" className="w-[60px]" />
                        <img src={nodejs} alt="" className="w-[50px]" />

                    </div>
                    <div className="flex my-2 justify-evenly">
                        <div>
                            <img src={mongo} alt="" className="w-[50px] h-[60px]" />
                        </div>
                        <div>
                            <img src={express} alt="" className="w-[70px] h-[40px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[5rem] w-[100%] flex items-center  h-[100px]">
                <Link to="/Contact" className="mx-auto bg-blue-600  mt-5 p-2 rounded-lg  justify-self-center hover:bg-btnColor hover:transition-colors focus:border focus:border-blue-500"> تماس با من و سفارش پروژه </Link>
            </div>

            <footer className="border-y h-[100px] border-blue-600 flex ">
                <h1 className="mx-auto mt-10">تمامی حقوق محفوظ است <span>&copy;</span> <span>{new Date().getFullYear()}</span> اسمعیلزاده</h1>
            </footer>
        </>
    )
}

export default Hero