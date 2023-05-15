
import Image from 'next/image'
import Header from '../components/header';
import axios from "axios";
import { useEffect, useState } from "react";
import Medee from '../components/articleCard';
import Link from 'next/link';
import Heseg1 from '../components/heseg1';
import Heseg2 from '../components/heseg2';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ArticleCard from '../components/articleCard';
import BannerCard from '../components/bannerCard';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

function Home() {
  const [posts, setPosts] = useState([])
  const [newBanners, setNewBanners] = useState([]);
  const [newArticles, setNewArticles] = useState([]);


  function fetchNewArticles() {
    axios.get(`${BACKEND_URL}/posts`).then((res) => setNewArticles(res.data));
  }

  function fetchNewBanners() {
    axios.get(`${BACKEND_URL}/banners`).then((res) => setNewBanners(res.data));
  }

  useEffect(() => {
    fetchNewArticles();
    fetchNewBanners();
  }, []);
  return (
    <section className="w-full">
      <section className="ab absolute top-0 z-10 bg-black-100 w-full" style={{ backgroundColor: ' rgba(0, 0, 0, 0.2)' }}>
        <Header />
      </section>
      <section className="relative">
        <Swiper
          slidesPerView={1}
        >
          {newBanners.map((banner) => (
            <SwiperSlide>
              <BannerCard
                image={banner.image}
                title={banner.title}
                description={banner.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* <section className=''>
        <section className="">
          <div>
            <Image className="w-full h-screen object-cover" width={1000} height={1000} src="/Image.svg" />
          </div>
          <div className="ml-[70px] w-[100px] h-[24px] rounded-lg absolute top-[50%]" style={{ backgroundColor: ' rgba(255, 255, 255, 0.15)' }}>
            <h3 className="text-white text-center mt-1 text-xs font-bold not-italic">ADVANTURE</h3>
          </div>
          <div className="absolute top-[58%]">
            <h3 className="ml-[70px] max-w-[530px] text-white not-italic font-bolt text-4xl">Richird Norton photorealistic rendering as real photos</h3>
          </div>
          <section className='flex p-[10px] absolute top-[70%]'>
            <div className="">
              <p className='not-italic font-normal text-xs text-[#E5E5E5] ml-[64px]'>08.08.2021</p>
            </div>
            <div className=" top-[56%] w-[30px] h-[4] text-[#E5E5E5]"></div>
            <div className="">
              <h6 className="ml-[40px] max-w-[420px] not-italic font-normal text-xs text-[#E5E5E5]">Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</h6>
            </div>
          </section>
        </section>
      </section> */}
      <section className=''>
        <section>
          <div className='mt-[150px] ml-[70px]'>
            <h3 className='not-italic font-bolt text-4xl text-[ #495057]'>Popular topics</h3>
          </div>
          <div className='flex justify-between'>
            <ul className="text-[#495057] flex ml-[40px] mt-[28px] text-xs not-italic font-bold">
              <li className="ml-[36px]"><Link href="/">All</Link></li>
              <li className="ml-[36px]"><Link href="/">Advanture</Link></li>
              <li className="ml-[36px]"><Link href="/">Travel</Link>l</li>
              <li className="ml-[36px]"><Link href="/">Fashion</Link></li>
              <li className="ml-[36px]"><Link href="/">Technology</Link></li>
              <li className="ml-[36px]"><Link href="/">branding</Link></li>
            </ul>
            <ul className='mr-[70px] mt-[28px] text-xs not-italic font-bold text-[#495057]'>
              <li><Link href="/">View All</Link></li>
            </ul>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 ml-[70px] rounded-lg ">
          {newArticles.map((article) => (
            <ArticleCard
              href={`/articles/${article._id}`}
              tag={article?.tag}
              title={article?.title}
              image={article?.image || articleImg}
              description={article?.description}
            />
          ))}
        </section>
        {/* <section className='ml-[70px] grid grid-cols-4 gap-4'>
          <Medee href="/articles" image="https://images.unsplash.com/photo-1678951600532-588566e8e457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1678951600532-588566e8e457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" tag="ADVANTURE" createdAT="08.08.2021" title="Dream destinations to visit this year in Paris" description="Progressively incentivize cooperative systems through
                technically sound functionalities. Credibly productivate
                seamless data with flexible schemas."/>
          <Medee href="/articles" image="https://images.unsplash.com/photo-1678951600532-588566e8e457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" tag="ADVANTURE" createdAT="08.08.2021" title="Dream destinations to visit this year in Paris" description="Progressively incentivize cooperative systems through
                technically sound functionalities. Credibly productivate
                seamless data with flexible schemas."/>
          <Medee href="/articles" image="https://images.unsplash.com/photo-1678951600532-588566e8e457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" tag="ADVANTURE" createdAT="08.08.2021" title="Dream destinations to visit this year in Paris" description="Progressively incentivize cooperative systems through
                technically sound functionalities. Credibly productivate
                seamless data with flexible schemas."/>
        </section> */}
      </section>
      <section className='mt-[100px]'>
        <Heseg1 />
      </section>
      <section>
        <div className='ml-[70px] mt-[150px]'>
          <h3 className='not-italic font-bolt text-4xl text-[ #495057]'>Editor’s Pick</h3>
        </div>
      </section>
      <section className='mt-[70px] ml-[70px] grid grid-cols-4 gap-4'>
        <Heseg2 href="/articles/45656" image="/Uul.png" tag="FASION" createdAT="08.08.2021" title="Richird Norton photorealistic rendering as real photos" description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data." />
        <Heseg2 href="/articles" image="/Uul.png" tag="FASION" createdAT="08.08.2021" title="Richird Norton photorealistic rendering as real photos" description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data." />
        <Heseg2 href="/articles" image="/Uul.png" tag="FASION" createdAT="08.08.2021" title="Richird Norton photorealistic rendering as real photos" description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data." />
        <Heseg2 href="/articles" image="/Uul.png" tag="FASION" createdAT="08.08.2021" title="Richird Norton photorealistic rendering as real photos" description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data." />
      </section>
      <section className="mt-[80px]">
        <Footer />
      </section>
    </section >
  );
}

export default Home;