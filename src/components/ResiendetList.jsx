import { useEffect, useState } from "react"
import Resident from "./Resident"
import { paginationLogic } from "../util/pagination"

const FIRST_PAGE = 1
const ResiendetList = ({residents, location}) => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE)

  const {pages, residentsInPage} = paginationLogic(currentPage, residents)

  
  useEffect(() => {
    setCurrentPage(FIRST_PAGE)
  }, [location])
  

  return (
    <section className="px-3">
        {/* Lista de residentes */}
        <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6">
            {residentsInPage?.map((resident) => <Resident key={resident} residentUrl={resident}/>) }
        </section>
        {/* Paginacion */}
        <section className="flex justify-center gap-4 flex-wrap pb-8">
          {
            pages.map((page) =>( 
            <button   
            key={page}    
            onClick={()=> setCurrentPage(page)} 
            className={`bg-green-700 p-2 px-3 rounded-md opacity-50 ${currentPage ===page ? "bg-red-500 px-6 opacity-100" : "bg-green-700"}`}
            >
            {page}
            </button> 
            ))}
        </section>

    </section>
  )
}
export default ResiendetList