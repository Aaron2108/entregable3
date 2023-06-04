const Location = ({location, setLocation}) => {
    
    const handleSumit = (e) => {
    const newLocation = e.target.newLocation.value

    useEffect(() => {
      const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
  
      axios.get(URL)
        .then(({data}) => setLocation(data))
        .catch((err) => console.log(err))
      
    }, [])
      
    }
  return (
    <section className="text-center py-16">
        {/* Input de busqueda */}
          <form onSubmit={handleSumit}>
            <input  id="newLocation" className="text-white border-2 border-green-600 text-center mb-10 p-1 bg-black" placeholder="Type a location Id..." type="text" />
            <button className="border-2 border-green-600 p-1 bg-green-600">Search <i className='bx bx-search'></i></button>
          </form>
        {/* Info Location */}
        <section className="">
            <h2 className="pb-4 text-green-600">{location?.name}</h2>
            
            <ul className="grid grid-cols-3 gap-4 justify-center ">
                <li className="p-1 text-center text-green-600">Type: {location?.type}</li>
                <li className="p-1 text-center text-green-600">Dimension: {location?.dimension}</li>
                <li className="p-1 text-center text-green-600">Population: {location?.residents.length}</li>
            </ul>
          
        </section>
    </section>
  )
}
export default Location