import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response) => {
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Semester</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index) => {
                                        return <tr>
                                                <th scope="row">1</th>
                                                <td>121</td>
                                                <td>soniya</td>
                                                <td>acf</td>
                                                <td>fisat</td>
                                                <td> 2</td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll