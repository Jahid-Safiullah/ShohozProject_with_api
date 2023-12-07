import {  useEffect, useState} from 'react';
import Dahsbord from '../../Dashbord/Dashbord';
import { Link } from 'react-router-dom'
import axios from 'axios';


const AddOperator = () => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [logo, setLogo] = useState('');


//   const handleFileChange = (e) => {
//     ;
//   };
 
  


  async function handleSubmit() {

    if (!name || !email || !phone || !address || !logo ) {
      alert("Please fill in all fields");
      return;
  }
    //let item = { name, email, phone, address, logo };
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('logo', logo,logo.name);
   

    
    //   let result = await fetch("", {

    await axios.post('http://localhost:8000/api/add-Operator',
        // body: JSON.stringify(item),
         formData,
        // headers: {
        //   "Content-Type": "application/json",
        //   "Accept": "application/json"
        // }
       { headers: 
            {
            "Content-type": "multipart/form-data",
        },
     }) .then(res => {
        console.log(res)
    })
    .catch(err => {
 
        console.log(err);
    })
    //   });

    //   result = await result.json();
    //   console.warn("result", result);
        // const response = await result.json();
        // console.log(response);
    
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
                                    <th scope="col">First</th>
                                    <th scope="col">Math</th>
                                    <th scope="col">English</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                    <th scope="row">
                                        jshi
                                    </th>
                                    <td>
                                        dasf
                                    </td>
                                    <td>
                                        afd
                                    </td>
                                    <td>
                                        dfd
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
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Operator</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form  onSubmit={handleSubmit} encType="multipart/form-data" >
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
                                            
                                            
                                            onChange={(e)=>setLogo(e.target.files[0])}
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
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button   type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOperator;