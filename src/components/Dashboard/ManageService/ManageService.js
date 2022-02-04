import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './ManageService.css'
const ManageService = () => {
    const [manageService, setManageService] = useState([]);

    const { register, handleSubmit, reset } = useForm();
    const [serviceId, setServiceId] = useState('');
    // const [isEditClicked, setIsEditClicked] = useState(false);
    const [singleService, setSingleService] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        getServices();
    }, [])

    const getServices = () => {
        fetch('https://arcane-garden-75913.herokuapp.com/services')

            .then(res => res.json())
            .then(data => {
                setManageService(data);
            })
    }
    //update user data
    const editClicked = (id) => {
        setServiceId(id);
        fetch(`https://arcane-garden-75913.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleService(data[0]);
                setServiceName(data[0].serviceName);
                setPrice(data[0].price);
                setDescription(data[0].description);
                setImageURL(data[0].imageURL);
            })

    }
    //submit update data
    const onSubmit = (data) => {
        console.log("data", data);
        const editUserData = {
            serviceName: serviceName,
            price: price,
            description: description,
            imageURL: imageURL,

        };

        fetch(`https://arcane-garden-75913.herokuapp.com/update/${serviceId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editUserData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result);
                    if (result.modifiedCount > 0) {
                        getServices()
                    }

                    // setIsEditClicked(false);
                }
            })

    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'cc901483d5af9e4fe34505b75ad00754')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const handleDelete = id => {
        fetch(`https://arcane-garden-75913.herokuapp.com/services/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount > 0) {
                    const remaining = manageService.filter(p => p._id !== id)
                    setManageService(remaining);
                }
            })

    }

    return (
        <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar />
            </div>

            <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-center mt-5 py-5" >
                <div className="manageService">
                    <h1 className="text-center mb-5">Manage Service</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {manageService.map((service, index) => {
                                return (<>

                                    <tr>
                                        <td>{service.serviceName}</td>
                                        <td>{service.description}</td>
                                        <td>{service.price}</td>
                                        <td className="flex">
                                            <span className="pe-2" data-bs-toggle="modal" data-bs-target="#edit" onClick={() => editClicked(service?._id)}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </span>

                                            <span className="ps-2" data-bs-toggle="modal" data-bs-target="#delete">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>

                                            {/* edit */}
                                            <div className="modal fade" id="edit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-update modal-xl">
                                                    <div className="modal-content" style={{ height: '700px' }}>
                                                        <div className="modal-header">
                                                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>  </div>
                                                        <div className="modal-body">
                                                            <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>

                                                                <input className="form-control" name="serviceName" onChange={(e) => setServiceName(e.target.value)} placeholder="Service Name" defaultValue={singleService?.serviceName} /><br />

                                                                <input className="form-control" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="Price" defaultValue={singleService?.price} /> <br />

                                                                <input className="form-control" name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Description" defaultValue={singleService?.description} /> <br />

                                                                <div class="text-center" style={{ height: '200px' }}>
                                                                    <img src={singleService?.imageURL} alt="" className="w-25" />
                                                                </div> <br />
                                                                <input className="form-control" name="image" onChange={handleImageUpload} type="file" defaultValue={singleService?.imageURL} /> <br /><br />

                                                                <button type="submit" data-bs-dismiss="modal">Update</button>
                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* delete */}
                                            <div className="modal fade" id="delete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>  </div>
                                                        <div className="modal-body">
                                                            Are you sure you want to delete?
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(service._id)}>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </td>

                                    </tr>
                                </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


};

export default ManageService;