function BannerCard(props) {
    return (
        <section className="relative w-full h-screen">
            <img src={props.image} alt="" className="w-full h-full" />
            <section className="absolute top-[50%] ml-14 max-w-[530px]">
                <section className="flex mb-4">
                    <section className="px-3 py-1 rounded-md" style={{backgroundColor: "rgba(255, 255, 255, 0.15)"}}>
                        <h3 className="text-white text-xs">ADVENTURE</h3>
                    </section>
                </section>
                <h3 className="text-3xl text-white tracking-wider">
                    Richird Norton photorealistic rendering as real photos
                </h3>
                <h3></h3>
            </section>
        </section>
    );
}

export default BannerCard;
