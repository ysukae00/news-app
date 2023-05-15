import Image from "next/image";
import Link from "next/link";

function Heseg2(props) {
    const { href, createdAT, image, tag, title, description } = props;
    return (
        <Link href={href}>
            <section className="relative">
                <div>
                    <Image className="h-[350px] object-cover rounded-md" width={420} height={350} src={image}/>
                </div>
                <div className="absolute top-[0] ">
                    <div className="absolute right-4 mt-[10px] text-white rounded-lg" style={{ backgroundColor: ' rgba(255, 255, 255, 0.2)' }}>
                        <h3 className="p-2 text-xs font-bold not-italic">{tag}</h3>
                    </div>
                    <h5 className="mt-[160px] ml-[40px] max-w-[420px] not-italic font-normal text-xs text-[rgb(229,229,229)]">{createdAT}</h5>
                    <h3 className=" mt-[15px] ml-[40px] max-w-[270px] text-white not-italic font-bolt text-lg">{title}</h3>
                    <h5 className="mt-[15px] ml-[40px] max-w-[300px] not-italic font-normal text-xs text-[#E5E5E5]">Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</h5>
                </div>
            </section>
        </Link>
    );
}

export default Heseg2;