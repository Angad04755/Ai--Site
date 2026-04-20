import Cards from "../../ui/Cards";
import { Offers_Data } from "../../data/offers_data";
function WhatWeOffer() {
    return (
        <section className="bg-black">
            <article className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-white text-[45px]">What We <span className="text-blue-500">Offer</span></h1>
            <p className="text-gray-700">Where Curiosity meets capability – AI learning that actually sticks.</p>
            </article>

            <article className="px-25 flex flex-row gap-5">
                {Offers_Data.map((data, index) => <div key={index}><Cards heading={data.heading} desc={data.desc} text={data.text}/></div>)}
            </article>
        </section>
    )
}

export default WhatWeOffer;