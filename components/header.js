import Image from 'next/image'
import Link from 'next/link';
function Header() {
    return (
        <section className="w-full h-[68px] bg-transparent flex ">
            <div>
                <h3 className="text-white mt-[28px] ml-[70px] text-xl not-italic font-bold">RUNO</h3>
            </div>
            <ul className="text-white flex ml-[680px] mt-[28px] text-xs not-italic font-bold">
                <li className="ml-[36px]"><Link href="/">home</Link></li>
                <li className="ml-[36px]"><Link href="/">about</Link></li>
                <li className="ml-[36px]"><Link href="/">articles</Link></li>
                <li className="ml-[36px]"><Link href="/">Contact us</Link></li>
            </ul>
            <section className="flex">
                <div className="w-[1px] h-[20px] bg-white mt-[26px] ml-[20px]"></div>
                <a href=""><Image className="ml-[18px] mt-[25px]" width={20} height={320} src="/facebook.svg" /></a>
                <a href=""><Image className="ml-[18px] mt-[25px]" width={20} height={20} src="/twitter.svg" /></a>
                <a href=""><Image className="ml-[18px] mt-[25px]" width={20} height={20} src="/twitter.svg" /></a>
                <a href=""><Image className="ml-[18px] mt-[25px]" width={20} height={20} src="/youtube.svg" /></a>
                <a href=""><Image className="ml-[18px] mt-[25px]" width={20} height={20} src="/pinterest.svg" /></a>
                <a href=""><Image className="ml-[18px] mt-[25px]" width={20} height={20} src="/behance.svg" /></a>
                <div className="w-[1px] h-[20px] bg-white mt-[26px] ml-[20px]"></div>
                <a href=""><Image className="ml-[18px] mt-[25px]" width={20} height={20} src="/Search Icon.svg" /></a>
            </section>
        </section>
    );
}

export default Header;