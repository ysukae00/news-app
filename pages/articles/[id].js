import Header from "../../components/header";
import Heseg1 from '../../components/heseg1';
import Footer from "../../components/footer";
import Heseg2 from "../../components/heseg2";


function ArticleDetailPage() {
  return (
    <section>
      <section>
        <section className="absolute top-0 z-10 w-full" style={{ backgroundColor: ' rgba(0, 0, 0, 0.2)' }}>
          <Header />
        </section>
        <Heseg1 />
      </section>
      <section>
        <div className="w-[77px] h-[22px] rounded-md bg-[#E5E5E5] p-2">
          <h3 className="not-italic font-bolt text-[10px] text-[]">ADVENTURE</h3>
        </div>
      </section>
      <section className="w-full h-[625px] mt-[120px]" style={{ backgroundColor: 'rgba(229, 229, 229, 0.3)' }}>
        <h3 className="mt-[100px] not-italic font-bolt text-lg ml-[70px] text-[#495057]">Related Posts</h3>
        <section className='mt-[70px] ml-[70px] grid grid-cols-3 gap-4'>
          <Heseg2 href="/articles/45656" image="/Uul.png" tag="FASION" createdAT="08.08.2021" title="Richird Norton photorealistic rendering as real photos" description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data." />
          <Heseg2 href="/articles" image="/Uul.png" tag="FASION" createdAT="08.08.2021" title="Richird Norton photorealistic rendering as real photos" description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data." />
          <Heseg2 href="/articles" image="/Uul.png" tag="FASION" createdAT="08.08.2021" title="Richird Norton photorealistic rendering as real photos" description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data." />
        </section>
      </section>
      <section>
        <Footer />
      </section>
    </section >
  );
}

export default ArticleDetailPage;