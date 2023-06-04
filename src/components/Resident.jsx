import { useEffect, useState } from "react"
import axios from 'axios'
const Resident = ({residentUrl}) => {

    const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles = {
        "Alive" : "bg-green-500",
        "Dead" : "bg-red-500",
        "unknown" : "bg-gray-400"
    }
    useEffect(() => {

        axios.get(residentUrl)
            .then(({data})=> setResidentInfo(data))
            .catch((err) => console.log(err))

    }, [])
    
  return (
    
        <article>
            <div className="relative border-2 border-green-600">
                <img src={residentInfo?.image} alt="" />
                <div className=" border-2 border-green-600 flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2 bg-black px-4 opacity-50">
                    <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>
                    {residentInfo?.status}
                </div>
            </div>
            <section className="bg-black border-2 border-green-600">
                <h4 className="p-2 text-xl font-sans md:font-serif">{residentInfo?.name}</h4>
                <ul>
                    <li className="p-2 text-gray-500">Species: <span className="pl-10 text-center text-white">{residentInfo?.species}
                        </span></li>

                        <li className="p-2 text-gray-500">Origin: <span className="pl-12 text-center text-white text-xs">{residentInfo?.origin.name}
                        </span></li>

                        <li className="p-2 text-gray-500">Times apper: <span className="pl-8 text-center text-white    ">{residentInfo?.episode.length} time
                        </span></li>
                </ul>
            </section>
        </article>
    
  )
}
export default Resident