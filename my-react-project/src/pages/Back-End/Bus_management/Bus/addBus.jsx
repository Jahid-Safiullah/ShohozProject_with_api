import { useEffect, useState } from 'react';
import Dahsbord from '../../Dashbord/Dashbord';
import { Link } from 'react-router-dom'
import axios from 'axios';




const AddBus = () => {



    //--------------------------------this for get operator-----------------------------------------------------------


    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let result = await fetch("http://localhost:8000/api/view-Operator");
    //             result = await result.json();
    //             setData(result);
    //             //   console.warn("result", result);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);




    //--------------------------------this for Delete operator-----------------------------------------------------------

    // async function deleteOperation(e, id) {
    //     e.preventDefault();
    
    //     let result = await fetch("http://localhost:8000/api/delete-Operator/" + id, {
    //         method: 'DELETE'
    //     });

    //     result = await result.json();
    // }
    
    




    //-------------------------------this for post bus------------------------------------------------------------
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
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
           
          

                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            onChange={(e) => setPhone(e.target.value)}
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
     
    );
};

export default AddBus;