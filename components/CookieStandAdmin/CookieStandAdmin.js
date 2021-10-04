import Head from '../Head/Head'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { useState } from 'react'

export default function CookieStandAdmin() {

      // const [data, updateData] = useState('');
  const [locations, setLocations] = useState([])

  function locationCreateHandler(event){
    event.preventDefault();
    
    const location = {
      location: event.target.location.value,
      id: locations.length
    }
    console.log('location', location)
    setLocations([...locations, location]);
  }
  
    return (
      <div>
        <Head />
        <Header />
        <Main givenLocation={locationCreateHandler} tableData={locations} />
        <Footer locationCount={locations.length} />
      </div>
    )
  }
