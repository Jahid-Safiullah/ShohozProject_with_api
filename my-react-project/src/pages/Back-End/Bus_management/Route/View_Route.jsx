import React from 'react'
import { useEffect, useState } from 'react';
import Dahsbord from '../../Dashbord/Dashbord';
import { Link } from 'react-router-dom'
import axios from 'axios';



export default function View_Route() {
 
    //--------------------------------this for get Route-----------------------------------------------------------


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




    //--------------------------------this for Delete Bus-----------------------------------------------------------

    async function deleteOperation(e, id) {
        e.preventDefault();
    
        let result = await fetch("http://localhost:8000/api/delete-Operator/" + id, {
            method: 'DELETE'
        });

        result = await result.json();
    }
    
    




    // ----------------------------------------------Add Route----------------------------------------
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [bus, setBus] = useState(null);
    const [cost, setCost] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');
  
 
  
    async function RoteSubmite() {
      console.warn(from, to, bus,cost, departureDate, departureTime);
      const formData = new FormData();
      formData.append('from', from);
      formData.append('to', to);
      formData.append('bus', bus);
      formData.append('cost', cost);
      formData.append('departureDate', departureDate);
      formData.append('departureTime', departureTime);
      try {
        const response = await fetch('http://localhost:8000/api/view-Route', {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          const text = await response.text();
          console.error('Error submitting form:', text);
          return;
        }
  
        const data = await response.json();
        alert('Data has been saved successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
      
  

    return (
        <div>
            <div className='container-fluid d-flex' >
                <div className='col-md-3'>
                    <Dahsbord />
                </div>

                <div className='bg-white col-md-9' style={{ marginTop: "88px" }} >

                    <div className="text-end p-3">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#routeModel" data-bs-whatever="@getbootstrap">Add Operator</button>
                    </div>

                    <div className='p-4 table-responsive-lg card' >
                        <table className="table table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Bus</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Departure Date</th>
                                    <th scope="col">Departure Time</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {
                                    data.map((item) => (
                                        <tr key={item.id}>

                                            <th scope="row">
                                                {item.id}
                                            </th>
                                            <td>
                                                {item.from}
                                            </td>
                                            <td>
                                                {item.to}
                                            </td>
                                            <td>
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
                                            </td>
                                            
                                            <td>
                                                <a ><i class="fa-solid fa-pen-to-square fa-lg"></i></a>
                                                <a onClick={(e) => deleteOperation(e ,item.id)}><i class="fa-solid fa-trash-can fa-lg"></i></a>
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>



            {/* Start Rotue Modal */}
        <div className="modal fade" id="routeModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">

                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Route</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">


                <div className="mb-3">
                  <label htmlFor="form" className="col-form-label">From :</label>
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    type="text"
                    className="form-control"
                    id="from" />
                </div>

                <div className="mb-3">
                  <label htmlFor="to" className="col-form-label">To : </label>
                  <input
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    type="text"
                    className="form-control"
                    id="to" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bus" className="col-form-label">Bus:</label>
                  <input
                    value={bus}
                    onChange={(e) => setBus(e.target.value)}
                    type="text"
                    className="form-control"
                    id="bus" />
                </div>

                <div className="mb-3">
                  <label htmlFor="cost" className="col-form-label">Cost :</label>
                  <input
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    type="number"
                    className="form-control"
                    id="cost" />
                </div>

                <div className="mb-3">
                  <label htmlFor="departure-date" className="col-form-label">Departure Date:</label>
                  <input
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    type="date"
                    className="form-control"
                    id="departure-date" />
                </div>

                <div className="mb-3">
                  <label htmlFor="departure-time" className="col-form-label">Departure Time:</label>
                  <input
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                    type="time"
                    className="form-control"
                    id="departure-time" />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" onClick={RoteSubmite} className="btn btn-primary">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* End Route Model */}

                
            </div>
        </div>
    );
}
