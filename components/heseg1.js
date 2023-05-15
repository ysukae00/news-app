import Image from "next/image";

function Heseg1() {
    return (
        <section className="relative">
            <div>
                <Image className="w-full h-screen object-cover" width={1000} height={1000} src="/dalai.png" />
            </div>
            <div className="absolute top-[0] ">
                <div className="ml-[660px] w-[100px] h-[24px] rounded-lg absolute top-[50%]" style={{ backgroundColor: ' rgba(255, 255, 255, 0.15)' }}>
                    <h3 className="text-white text-center mt-1 text-xs font-bold not-italic">FASION</h3>
                </div>
                <h3 className=" mt-[320px] ml-[440px] max-w-[530px] text-center text-white not-italic font-bolt text-4xl">Richird Norton photorealistic rendering as real photos</h3>
                <h5 className="mt-[20px] ml-[492px] max-w-[420px] text-center not-italic font-normal text-xs text-[#E5E5E5]">Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</h5>
                <h5 className="mt-[32px] ml-[492px] max-w-[420px] text-center not-italic font-normal text-xs text-[#E5E5E5]">08.08.2021</h5>
            </div>
            <div>

            </div>
        </section>
    );
}

export default Heseg1;