import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

function articleCard(props) {
    const { href, image, tag, title, description, createdAt } = props;
    return (
        <Link href={href}><section>
            <section className=" rounded-lg ">
                <div className="relative">
                    <Image className="mt-[40px]" width={410} height={280} src={image} />
                    <div className="absolute right-4 mt-[10px] text-white rounded-lg top-[0px]" style={{ backgroundColor: ' rgba(255, 255, 255, 0.2)' }}>
                        <h3 className="p-1 text-xs font-bold not-italic">{tag}</h3>
                    </div>
                </div>
            </section>
            <h3 className="not-italic text-xs font-normal mt-[15px]">{createdAt}</h3>
            <h3 className="mt-[20px] leading-6 max-w-[270px] not-italic font-bold text-lg">{title}</h3>
            <h3 className="mt-[20px] max-w-[310px] font-normal not-italic text-xs">{description}</h3>
        </section>
        </Link>
    );
}

export default articleCard;