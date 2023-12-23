import React from 'react'

import { useEffect, useState } from 'react';
import { Link, RouterProvider } from "react-router-dom";
import Dashbord from '../Dashbord/Dashbord';
import axios from 'axios';




export default function AddBus() {

  //-------------------------------this for Add operator------------------------------------------------------------
  const [name, setNameOperator] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [f, setFileOperator] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !address || !f) {
      alert("Please fill in all fields");
      return;
    }
    //let item = { name, email, phone, address, logo };

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('file', f);


    try {
      const response = await axios.post('http://localhost:8000/api/add-Operator',
        formData,
        {
          headers:
          {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log('response:', response.data);
    }
    catch (error) {

      console.error('Error:', error);
    }
  }





  // ----------------------------------------------Add BUs----------------------------------------
  const [bus_name, setName] = useState('');
  const [code, setCode] = useState('');
  const [file, setFile] = useState(null);
  const [operator_id, setOperatorId] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };



  async function submite() {
    console.warn(bus_name, code, file, operator_id);
    const formData = new FormData();
    formData.append('bus_name', bus_name);
    formData.append('code', code);
    formData.append('image', file);
    formData.append('operator_id', operator_id);
    try {
      const response = await fetch('http://localhost:8000/api/add-Bus', {
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
    <>
      <div className='container-fluid d-flex' >
        <div className='col-md-3'>
          <Dashbord />
        </div>


        <div className='bg-white col-md-9' style={{ marginTop: "110px" }} >
          {/* Bus Dashbord */}
          {/* <div className='container card mt-3 mb-4'>
            <div className='card-body'>
              <div className='card-title'> Bus Dashbord</div>
              <div className='row'>

                <div className=" col-12 col-md-3  ">
                  <div className='row  m-1  rounded shadow p-3 mb-5 bg-body '>
                    <div className='col-8 p-2 bg-info rounded'>Booking</div>
                    <div className='col-4'>img</div>
                    <div className='row'>
                      <div className='col-12'>Total Booking</div>
                      <div className='col-12'>2</div>
                      <div className='col-12 ' style={{ textAlign: "end" }}>Vew More..</div>
                    </div>
                  </div>
                </div>
                <div className=" col-12  col-md-3 ">
                  <div className='row  m-1  rounded shadow p-3 mb-5 bg-body '>
                    <div className='col-8 p-2 bg-info rounded'>Buses</div>
                    <div className='col-4'>img</div>
                    <div className='row'>
                      <div className='col-12'>Total Booking</div>
                      <div className='col-12'>2</div>
                      <div className='col-12'>Vew More..</div>
                    </div>
                  </div>
                </div>
                <div className=" col-12  col-md-3 ">
                  <div className='row  m-1  rounded shadow p-3 mb-5 bg-body '>
                    <div className='col-8 p-2 bg-info rounded'>Routes</div>
                    <div className='col-4'>img</div>
                    <div className='row'>
                      <div className='col-12'>Total Booking</div>
                      <div className='col-12'>2</div>
                      <div className='col-12'>Vew More..</div>
                    </div>
                  </div>
                </div>
                <div className=" col-12   col-md-3 ">
                  <div className='row  m-1  rounded shadow p-3 mb-5 bg-body '>
                    <div className='col-8 p-2 bg-info rounded'>Customers</div>
                    <div className='col-4'>img</div>
                    <div className='row'>
                      <div className='col-12'>Total Booking</div>
                      <div className='col-12'>2</div>
                      <div className='col-12'>Vew More..</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div> */}


          {/* bUS Management */}


          <div className='container card '>
            <div className='card-body'>
              <div className='card-title'> Bus Management</div>
              <div className='row '>

                <div className=" col-12 m-1 col-lg-3 rounded shadow p-3 mb-2">
                  <div className='row '>
                    <div className='col-12'>
                      <div className='row'>
                        <div className='col col-md-6  rounded'>
                          <img src="src\assets\transportation.png" style={{ height: "80px" }} alt="" />
                        </div>
                        <div className='col col-md-6 border-start'>
                          <div className='row p-2'>
                            Total Copmany: 3
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-12'>
                    <div className='row border-top '>
                      <div className='col-4 p-2'> <button type="button" className='border-0' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">
                        <i class="fa-sharp fa-solid fa-circle-plus fa-lg" ></i>
                      </button></div>
                      <div className='col-4 p-2'><Link to="/AddOperator"><i class="fa-regular fa-eye fa-lg"></i></Link></div>
                      <div className='col-4 p-2'><Link to="/printOperator"><i class="fa-solid fa-print fa-lg"></i></Link></div>
                    </div>
                    </div>
                  </div>
                </div>

                <div className=" col-12 m-1 col-lg-3 rounded shadow p-3 mb-2">
                  <div className='row '>
                    <div className='col-12'>
                      <div className='row'>
                        <div className='col col-md-6  rounded'>
                        <img src="src\assets\Bus_name.jpg" style={{ height: "80px" }} alt="" />
                        </div>
                        <div className='col col-md-6 border-start'>
                          <div className='row p-2'>
                            Total Bus: 3
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-12'>
                    <div className='row border-top '>
                      <div className='col-4 p-2'>   <button className='border-0' type="button" data-bs-toggle="modal" data-bs-target="#busModel" data-bs-whatever="@getbootstrap">
                            <i class="fa-sharp fa-solid fa-circle-plus fa-lg" ></i>
                          </button>
                          </div>
                      <div className='col-4 p-2'> <Link to="/BusBookingList/ViewBus"><i class="fa-regular fa-eye fa-lg"></i></Link> </div>
                      <div className='col-4 p-2'><Link to="/printOperator"><i class="fa-solid fa-print fa-lg"></i></Link></div>
                    </div>
                    </div>
                  </div>
                </div>
                
                
                <div className=" col-12 m-1 col-lg-3 rounded shadow p-3 mb-2">
                  <div className='row '>
                    <div className='col-12'>
                      <div className='row'>
                        <div className='col col-md-6  rounded'>
                        <img src="src\assets\route.webp" style={{ height: "80px" }} alt="" />
                        </div>
                        <div className='col col-md-6 border-start'>
                          <div className='row p-2'>
                            Total Route : 3
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-12'>
                    <div className='row border-top '>
                      <div className='col-4 p-2'>  
                       <button className='border-0' type="button" data-bs-toggle="modal" data-bs-target="#routeModel" data-bs-whatever="@getbootstrap">
                            <i class="fa-sharp fa-solid fa-circle-plus fa-lg" ></i>
                        </button>
                      </div>
                      <div className='col-4 p-2'> <Link to="/BusBookingList/View_Route"><i class="fa-regular fa-eye fa-lg"></i></Link> </div>
                      <div className='col-4 p-2'><Link to="/printOperator"><i class="fa-solid fa-print fa-lg"></i></Link></div>
                    </div>
                    </div>
                  </div>
                </div>

                <div className=" col-12 m-1 col-lg-3 rounded shadow p-3 mb-2">
                  <div className='row '>
                    <div className='col-12'>
                      <div className='row'>
                        <div className='col col-md-6  rounded'>
                        <img src="src\assets\bus_bookign.jpg" style={{ height: "100px" }} alt="" />
                        </div>
                        <div className='col col-md-6 border-start'>
                          <div className='row p-2'>
                            Total Bookign: 3
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-12'>
                    <div className='row border-top '>
                      <div className='col-4 p-2'>   <button className='border-0' type="button" data-bs-toggle="modal" data-bs-target="#busModel" data-bs-whatever="@getbootstrap">
                            <i class="fa-sharp fa-solid fa-circle-plus fa-lg" ></i>
                          </button>
                          </div>
                      <div className='col-4 p-2'> <Link to="/BusBookingList/ViewBus"><i class="fa-regular fa-eye fa-lg"></i></Link> </div>
                      <div className='col-4 p-2'><Link to="/printOperator"><i class="fa-solid fa-print fa-lg"></i></Link></div>
                    </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>



          <div className="text-end p-3">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add Bus</button>
          </div>

          <div className='p-4 table-responsive-lg card' >
            <table class="table table-hover">
              <thead class="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Math</th>
                  <th scope="col">English</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">

                  </th>
                  <td>

                  </td>
                  <td>

                  </td>
                  <td>

                  </td>
                  <td>
                    <a href="">Edit</a>
                    <a href="">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>



        {/* Modal */}
        {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Start Operator Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">

                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Operator</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Operator Name:</label>
                    <input
                      value={name}
                      onChange={(e) => setNameOperator(e.target.value)}
                      type="text"
                      className="form-control"
                      id="recipient-name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-email" className="col-form-label">Email:</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="form-control"
                      id="recipient-email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-phone" className="col-form-label">Phone:</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      className="form-control"
                      id="recipient-phone" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-logo" className="col-form-label">Logo:</label>
                    <input
                      onChange={(e) => setFileOperator(e.target.files[0])}
                      type="file"
                      className="form-control"
                      id="recipient-logo" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">Address:</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      id="message-text">
                    </textarea>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Operator Model */}

        {/* Start Bus Modal */}
        <div className="modal fade" id="busModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">

                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Bus</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">


                <div className="mb-3">
                  <label htmlFor="bus-name" className="col-form-label">Bus Name:</label>
                  <input
                    value={bus_name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="bus-name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="bus-licence" className="col-form-label">Bus Licence</label>
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    type="text"
                    className="form-control"
                    id="bus-licence" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bus-image" className="col-form-label">Image:</label>
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="form-control"
                    id="bus-image"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bus-operator-name" className="col-form-label">Operator Name:</label>
                  <input
                    value={operator_id}
                    onChange={(e) => setOperatorId(e.target.value)}
                    type="number"
                    className="form-control"
                    id="bus-operator-name" />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" onClick={submite} className="btn btn-primary">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* End Bus Model */}

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
        {/* End Bus Model */}

        {/* Start Bus Modal */}
        <div className="modal fade" id="busModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">

                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Bus</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">


                <div className="mb-3">
                  <label htmlFor="bus-name" className="col-form-label">Bus Name:</label>
                  <input
                    value={bus_name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="bus-name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="bus-licence" className="col-form-label">Bus Licence</label>
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    type="text"
                    className="form-control"
                    id="bus-licence" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bus-image" className="col-form-label">Image:</label>
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="form-control"
                    id="bus-image"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bus-operator-name" className="col-form-label">Operator Name:</label>
                  <input
                    value={operator_id}
                    onChange={(e) => setOperatorId(e.target.value)}
                    type="text"
                    className="form-control"
                    id="bus-operator-name" />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" onClick={submite} className="btn btn-primary">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* End Bus Model */}
      </div>
    </>
  )
}
