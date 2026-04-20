
interface CardProps {
    heading: string,
    desc: string,
    text: string,
}

function Cards({heading, desc, text}: CardProps) {
    return (
        <div>
            <div>
                <img alt="Img"/>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="text-white text-xl">{heading}</h3>
                <p className="text-left text-gray-700">{desc}</p>
                <button className="bg-gray-700 text-white py-3 px-3 rounded-xl cursor-pointer hover:scale-95 transition-all duration-200">{text}</button>
            </div>
        </div>
    )
}

export default Cards;