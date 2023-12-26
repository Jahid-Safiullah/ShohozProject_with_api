import React from 'react'
import { useEffect, useState } from 'react';

export default function ViewRouteForFront() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch("http://localhost:8000/api/view-Route");
                result = await result.json();
                setData(result);
                //   console.warn("result", result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    const showBusRoute = async (event, id) => {
        event.preventDefault();
        try {
            // Make an API call to get the individual bus route data based on the id
            const response = await fetch(`http://localhost:8000/api/view-Route/${id}`);
            const routeData = await response.json();
            
            // Log or use the data as needed
            console.log('Individual Bus Route Data:', routeData);
            
            // Add logic to display the individual bus route data (e.g., show a modal)
        } catch (error) {
            console.error('Error fetching individual bus route:', error);
        }
    };




    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mt-3">
                        <div className="row">
                            <div className="table-group-divider pt-3">
                                {
                                    data.map((item) => (
                                        <tr key={item.id} className=''>

                                            <th scope="row">
                                                {item.id}.
                                            </th>
                                            <td className='px-2'>
                                                {item.from}
                                            </td>
                                            <span className='px-2'> To </span>
                                            <td>
                                                {item.to}
                                            </td>
                                            {/* <td>
                                                {item.bus}
                                            </td>
                                            <td>
                                                {item.cost}
                                            </td>
                                            <td>
                                                {item.departure_date}
                                            </td>
                                            <td>
                                                {item.departure_time}
                                            </td> */}

                                            <td className='px-4'>
                                                <a onClick={(e) => showBusRoute(e, item.id)}><i class="fa-regular fa-eye"></i></a>

                                            </td>

                                        </tr>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="row">
                        <div className="table-group-divider pt-3">
                                {
                                    data.map((item) => (
                                        <tr key={item.id} className=''>

                                            <th scope="row">
                                                {item.id}.
                                            </th>
                                            <td className='px-2'>
                                                {item.from}
                                            </td>
                                            <span className='px-2'> To </span>
                                            <td>
                                                {item.to}
                                            </td>
                                            {/* <td>
                                                {item.bus}
                                            </td>
                                            <td>
                                                {item.cost}
                                            </td>
                                            <td>
                                                {item.departure_date}
                                            </td>
                                            <td>
                                                {item.departure_time}
                                            </td> */}

                                            <td className='px-4'>
                                                <a onClick={(e) => showBusRoute(e, item.id)}><i class="fa-regular fa-eye"></i></a>

                                            </td>

                                        </tr>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="row">
                        <div className="table-group-divider pt-3">
                                {
                                    data.map((item) => (
                                        <tr key={item.id} className=''>

                                            <th scope="row">
                                                {item.id}.
                                            </th>
                                            <td className='px-2'>
                                                {item.from}
                                            </td>
                                            <span className='px-2'> To </span>
                                            <td>
                                                {item.to}
                                            </td>
                                            {/* <td>
                                                {item.bus}
                                            </td>
                                            <td>
                                                {item.cost}
                                            </td>
                                            <td>
                                                {item.departure_date}
                                            </td>
                                            <td>
                                                {item.departure_time}
                                            </td> */}

                                            <td className='px-4'>
                                                <a onClick={(e) => showBusRoute(e, item.id)}><i class="fa-regular fa-eye"></i></a>

                                            </td>

                                        </tr>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
