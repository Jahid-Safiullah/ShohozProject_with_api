import { useEffect, useState } from 'react';
import Dahsbord from '../../Dashbord/Dashbord';
import { Link } from 'react-router-dom'
import axios from 'axios';




const ViewBus = () => {



    //--------------------------------this for get Bus-----------------------------------------------------------


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch("http://localhost:8000/api/view-bus");
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
    
    




    //-------------------------------this for post Bus------------------------------------------------------------
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
      
  

    return (
        <div>
            <div className='container-fluid d-flex' >
                <div className='col-md-3'>
                    <Dahsbord />
                </div>

                <div className='bg-white col-md-9' style={{ marginTop: "88px" }} >

                    <div className="text-end p-3">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add Operator</button>
                    </div>

                    <div className='p-4 table-responsive-lg card' >
                        <table className="table table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Seats</th>
                                    <th scope="col">Operator_id</th>
                                    <th scope="col">Bus Image</th>
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
                                                {item.bus_name}
                                            </td>
                                            <td>
                                                {item.code}
                                            </td>
                                            <td>
                                                {item.total_seats}
                                            </td>
                                            <td>
                                                {item.operator_id}
                                            </td>
                                            <td>
                                                <img width="100px" height="100px" src={`http://127.0.0.1:8000/${item.image}`} alt="" />

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
        </div>
    );
};

export default ViewBus;