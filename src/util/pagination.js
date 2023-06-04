export const paginationLogic = (currentPage, residents) => {
    //Excepcion para el primer render
    if(!residents){
        return {
            pages: [1],
            residentsInPage: []
        }
    }


    //Cantidad de residentes por pagina
    const RESIDENTS_PER_PAGE = 20

    //Cantidad total de paginas totales
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

    //Residentes que van a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
    const residentsInPage = residents.slice(sliceStart, sliceEnd)

    //Generacion del arreglo de las paginas que se van a mostrar 
    const pages = []
    for(let i =1; i <= totalPages; i++) {
        pages.push(i)
    }
    return {
        residentsInPage,
        pages
    }
}