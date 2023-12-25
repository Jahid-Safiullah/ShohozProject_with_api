import { useEffect, useState } from 'react';
import Dahsbord from '../../Dashbord/Dashbord';
import { Link } from 'react-router-dom'
import axios from 'axios';




const AddOperator = () => {



    //--------------------------------this for get operator-----------------------------------------------------------


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch("http://localhost:8000/api/view-Operator");
                result = await result.json();
                setData(result);
                //   console.warn("result", result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);




    //--------------------------------this for Delete operator-----------------------------------------------------------

    async function deleteOperation(e, id) {
        e.preventDefault();
    
        let result = await fetch("http://localhost:8000/api/delete-Operator/" + id, {
            method: 'DELETE'
        });

        result = await result.json();
    }
    
    




    //-------------------------------this for post operator------------------------------------------------------------
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !phone || !address || !file) {
            alert("Please fill in all fields");
            return;
        }
        //let item = { name, email, phone, address, logo };

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
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
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Logo</th>
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
                                                {item.operator_name}
                                            </td>
                                            <td>
                                                {item.operator_email}
                                            </td>
                                            <td>
                                                {item.operator_phone}
                                            </td>
                                            <td>
                                                <img width="100px" height="100px" src={`http://127.0.0.1:8000/${item.operator_logo}`} alt="" />

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
                   
                    <button className='mt-2 rounded '>
                    <Link to="/BusBookingList"><i class="fa-solid fa-backward fa-xl"></i>Back</Link>
                    </button>

                </div>



                {/* Modal */}
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
                                            onChange={(e) => setName(e.target.value)}
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
                                            onChange={(e) => setFile(e.target.files[0])}
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

                
            </div>
        </div>
    );
};

export default AddOperator;