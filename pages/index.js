import Image from 'next/image'
import Header from '../components/header';
import axios from "axios";
import { useEffect, useState } from "react";
function Home() {
  const [posts, setPosts] = useState([])
  async function fetch() {
    await axios.get('http://localhost:8000/posts').then(data => setPosts(data.data))
  }

  useEffect(() => {
    fetch()

  }, []);
  return (
    <section className="w-full">
      <section className="absolute top-0 bg-black-100 w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <Header />
      </section>
      <section className="">
        <div>
          <Image className="w-full h-screen object-cover" width={1000} height={1000} src="/Image.svg" />
        </div>
      </section>
      <section>
        <section>
          <div className="relative">
            <Image className="mt-[40px] ml-[40px]" width={310} height={280} src="/Blog Image.svg"/>
            <div className=" mt-[10px] ml-[230px] w-[100px] h-[20px] bg-white rounded-lg absolute top-[0px]">
              <h3 className="text-center text-xs font-bold not-italic">ADVANTURE</h3>
            </div>
          </div>
        </section>
        <h3 className="not-italic text-xs font-normal mt-[15px] ml-[40px]">08.08.2021</h3>
        <h3 className="mt-[20px] ml-[40px] not-italic font-bold text-lg w-[260px]">Dream destinations to visit this year in Paris</h3>
        <h3 className="ml-[40px] mt-[20px] mb=[400px] w-[400px] font-normal not-italic text-xs">Progressively incentivize cooperative systems through
          technically sound functionalities. Credibly productivate
          seamless data with flexible schemas.</h3>
      </section>
    </section>
  );
}

export default Home;