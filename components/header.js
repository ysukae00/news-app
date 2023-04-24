import Image from 'next/image'
import Link from 'next/link';
function Header() {
    return (
        <section className="w-full h-[68px] flex">
            <div>
                <h3 className="text-white mt-[28px] ml-[70px] text-xl not-italic font-bold">RUNO</h3>
            </div>
            <ul className="text-white flex ml-[680px] mt-[28px] text-xs not-italic font-bold">
                <li className="ml-[36px]"><Link href="/">home</Link></li>
                <li className="ml-[36px]">about</li>
                <li className="ml-[36px]">articles</li>
                <li className="ml-[36px]">Contact us</li>
            </ul>
            <section className="flex">
                <div className="w-[1px] h-[20px] bg-white mt-[26px] ml-[20px]"></div>
                <Image width={32} height={32} src="/facebook.svg" />
                <div className="w-[1px] h-[20px] bg-white mt-[26px] ml-[20px]"></div>
                {/* <Image width={32} height={32} src="/twitter.png" />
                <Image width={32} height={32} src="/youtube.png" />
                <Image width={32} height={32} src="/pinterest.png"/>
                <Image width={32} height={32} src="/behance.png"/>
                <Image width={32} height={32} src="/Search Icon.png"/> */}
            </section>
        </section>
    );
}

export default Header;