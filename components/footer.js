import Image from 'next/image'
import Link from 'next/link';
function Footer() {
    return (
        <section className="w-full h-[400px] bg-[#212529]">
            <section className="absolute mt-[100px] right-20 grid grid-cols-4 gap-4">
                <div>
                    <h3 className="ml-[70px] text-white not-italic font-bolt text-lg">Contact the Publisher</h3>
                    <h3 className="mt-[10px] ml-[70px] not-italic font-normal text-xs text-[#E5E5E5]">mike@runo.com</h3>
                    <h3 className="mt-[12px] ml-[70px] not-italic font-normal text-xs text-[#E5E5E5]">+944 450 904 505</h3>
                </div>
                <div>
                    <h3 className="ml-[220px] text-white not-italic font-bolt text-lg">Explorate</h3>
                    <ul className="mt-[12px] ml-[220px] not-italic font-normal text-xs text-[#E5E5E5]">
                        <li className="mt-[12px]">About</li>
                        <li className="mt-[12px]">Partners</li>
                        <li className="mt-[12px]">Job Opportunities</li>
                        <li className="mt-[12px]">Advertise</li>
                        <li className="mt-[12px]">Membership</li>
                    </ul>
                </div>
                <div>
                    <h3 className="ml-[220px] text-white not-italic font-bolt text-lg">Headquarter</h3>
                    <h3 className="max-w-[114px] mt-[12px] ml-[220px] not-italic font-normal text-xs text-[#E5E5E5]">191 Middleville Road,NY 1001, Sydney Australia</h3>
                </div>
                <div>
                    <h3 className="ml-[220px] text-white not-italic font-bolt text-lg">Connections</h3>
                    <div className="flex ml-[220px] mt-[12px]">
                        <a href='facebook.com'><Image width={20} height={20} src="/facebook.svg" /></a>
                        <a href='facebook.com'><Image className="ml-[18px]" width={20} height={20} src="/twitter.svg" /></a>
                        <a href='facebook.com'><Image className="ml-[18px]" width={20} height={20} src="/youtube.svg" /></a>
                        <a href='facebook.com'><Image className="ml-[18px]" width={20} height={20} src="/pinterest.svg" /></a>
                        <a href='facebook.com'><Image className="ml-[18px]" width={20} height={20} src="/behance.svg" /></a>
                    </div>
                </div>
            </section>
            <section className=" absolute mt-[320px] w-full h-[80px] bg-[#343A40] flex justify-between">
                <h4 className="ml-[70px] mt-[32px] text-[#E5E5E5] not-italic leading-4 font-bolt text-lg">2021 | RUNO Publisher Studio</h4>
                <h4 className="mt-[30px] mr-[80px] not-italic font-normal text-base text-[#E5E5E5]">Subscribe Now</h4>
            </section>
        </section>
    );
}

export default Footer;