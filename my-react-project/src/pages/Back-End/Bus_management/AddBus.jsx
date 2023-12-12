import React from 'react'

import { useEffect, useState } from 'react';
import { Link, RouterProvider } from "react-router-dom";
import Dashbord from '../Dashbord/Dashbord';





export default function AddBus() {



  const [name, setName] = useState('');
    const [licence, setLicence] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !licence  || !file) {
            alert("Please fill in all fields");
            return;
        }
        //let item = { name, email, phone, address, logo };

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', licence);
        formData.append('file', file);


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





  const fruits = ['aam', 'jam', 'kola', 'lichu', 'kathal'];
  const customFunction = (fruit, index) => {
    // Perform some logic (check if the length is greater than 5)
    const isLongFruit = fruit.length > 5;

    // Display different messages based on the logic
    if (isLongFruit) {
      return `The fruit name is long: ${fruit}`;
    } else {
      return `The fruit name is not long: ${fruit}`;
    }
  };
  const Math = 39;
  const English = 42;
  const Result = 30;
  return (
    <>
      <div className='container-fluid d-flex' >
        <div className='col-md-3'>
          <Dashbord />
        </div>


        <div className='bg-white col-md-9' style={{ marginTop: "88px" }} >
          {/* Bus Dashbord */}
          <div className='container card mt-3 mb-4'>
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
                      <div className='col-12 ' style={{textAlign:"end"}}>Vew More..</div>
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
          </div>


          {/* bUS Management */}


          <div className='container card '>
            <div className='card-body'>
              <div className='card-title'> Bus Management</div>
              <div className='row '>
                <div className=" col-12  col-md-3 ">
                  <div className='row  m-1 rounded shadow p-3 mb-5 bg-body'>
                    <div className='col col-md-9 bg-danger rounded'>
                    Operator 
                    </div>
                    <div className='col col-md-3'>
                      <div className='row bg-light rounded'>
                        <div className='col'><Link to="/AddOperator"><i class="fa-sharp fa-solid fa-circle-plus fa-lg" ></i></Link> </div>
                      </div>
                      <div className='row  bg-light rounded'>
                        <div className='col'><Link to="/viewOperator"><i class="fa-regular fa-eye fa-lg"></i></Link> </div>
                      </div>
                      <div className='row bg-light rounded'>
                        <div className='col'><Link to="/printOperator"><i class="fa-solid fa-print fa-lg"></i></Link> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-12  col-md-3 ">
                  <div className='row  m-1 rounded shadow p-3 mb-5 bg-body'>
                    <div className='col col-md-9 bg-danger rounded'>
                    Operator 
                    </div>
                    <div className='col col-md-3'>
                      <div className='row bg-light rounded'>
                        <div className='col'> 
                        <button type="button"  data-bs-toggle="modal" data-bs-target="#busModel" data-bs-whatever="@getbootstrap">
                          <i class="fa-sharp fa-solid fa-circle-plus fa-lg" ></i>
                          </button>
                        </div>
                      </div>
                      <div className='row  bg-light rounded'>
                        <div className='col'><Link to="/viewOperator"><i class="fa-regular fa-eye fa-lg"></i></Link> </div>
                      </div>
                      <div className='row bg-light rounded'>
                        <div className='col'><Link to="/printOperator"><i class="fa-solid fa-print fa-lg"></i></Link> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-12  col-md-3 ">
                  <div className='row  m-1 rounded shadow p-3 mb-5 bg-body'>
                    <div className='col col-md-9 bg-danger rounded'>
                    Operator 
                    </div>
                    <div className='col col-md-3'>
                      <div className='row bg-light rounded'>
                        <div className='col'><Link to="/AddOperator"><i class="fa-sharp fa-solid fa-circle-plus fa-lg" ></i></Link> </div>
                      </div>
                      <div className='row  bg-light rounded'>
                        <div className='col'><Link to="/viewOperator"><i class="fa-regular fa-eye fa-lg"></i></Link> </div>
                      </div>
                      <div className='row bg-light rounded'>
                        <div className='col'><Link to="/printOperator"><i class="fa-solid fa-print fa-lg"></i></Link> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-12  col-md-3 ">
                  <div className='row  m-1 rounded shadow p-3 mb-5 bg-body'>
                    <div className='col col-md-9 bg-danger rounded'>
                    Operator 
                    </div>
                    <div className='col col-md-3'>
                      <div className='row bg-light rounded'>
                        <div className='col'><Link to="/AddOperator"><i class="fa-sharp fa-solid fa-circle-plus fa-lg" ></i></Link> </div>
                      </div>
                      <div className='row  bg-light rounded'>
                        <div className='col'><Link to="/viewOperator"><i class="fa-regular fa-eye fa-lg"></i></Link> </div>
                      </div>
                      <div className='row bg-light rounded'>
                        <div className='col'><Link to="/printOperator"><i class="fa-solid fa-print fa-lg"></i></Link> </div>
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
                    <ul>
                      {fruits.map((fruit, index) => (
                        <li key={index.toString()}>
                          {/* Invoke the function and display the result */}
                          {customFunction(fruit, index)}
                        </li>
                      ))}
                    </ul>
                  </th>
                  <td>
                    <select>
                      {fruits.map((item, index) => {
                        return <option key={index.toString()}> Item at index{index}: {item}</option>
                      })}
                    </select>
                  </td>
                  <td>
                    {
                      Math >= 40 ? <h1>Pass</h1> : <h1>Fail</h1>
                    }
                  </td>
                  <td>
                    {
                      (() => {
                        if (Result >= 80 && Result <= 100) {
                          return <h1>A+</h1>
                        }
                        else if (Result >= 60 && Result < 80) {
                          return <h1>B</h1>
                        }
                        else if (Result >= 40 && Result < 60) {
                          return <h1>D</h1>
                        }
                        else {
                          return <h1>F</h1>
                        }

                      })()
                    }

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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        </div>
         {/* Modal */}
         <div className="modal fade" id="busModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">

                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Bus</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Bus Name:</label>
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            id="recipient-name" />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="bus-licence" className="col-form-label">Bus Licence</label>
                                        <input
                                            value={licence}
                                            onChange={(e) => setLicence(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            id="bus-licence" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="bus-image" className="col-form-label">Image:</label>
                                        <input
                                            onChange={(e) => setFile(e.target.files[0])}
                                            type="file"
                                            className="form-control"
                                            id="bus-image" />
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
      </div>
    </>
  )
}
