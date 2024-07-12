
const Card = ({ data }: any) => {

    return (
        <div className="flex flex-col gap-5 text-xl font-medium text-black px-10">
            <div className="text-4xl font-bold text-indigo-950 max-md:max-w-full">
                {data.heading}
            </div>
            <div className="mt-4 leading-10 max-md:max-w-full">
                {data.para}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {data.items.map((item: any, index: any) => (
                    <div key={index} className="flex gap-3.5 pr-5">
                        <div>{item.icon}</div>
                        <div className="my-auto">{item.title}</div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Card