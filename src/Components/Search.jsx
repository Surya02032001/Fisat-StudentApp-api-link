import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [data, setData] = useState(
        {
         "Collegename":""  
        }
    )
    const inputHandler = (event) => {
        setData({...data,[event.target.name]:event.target.value })
    }
    const readValue = () => {
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">CollegeName</label>
                            <input type="text" className="form-control" name='Collegename'value={data.Collegename} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <button className="btn btn-success"onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search