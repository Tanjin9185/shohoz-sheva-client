import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useForm } from 'react-hook-form';

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
        fetch('http://localhost:5000/services')

            .then(res => res.json())
            .then(data => {
                setManageService(data);
                console.log(data);
            })
    }, [])


    //update user data
    const editClicked = (id) => {
        setServiceId(id);
        console.log(id);
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleService(data[0]);
                console.log(data[0]);
            })

    }
    //submit update data
    const onSubmit = (data) => {
        console.log("data", data);
        const p = [...singleService]
        // const editUserData = {
        //     serviceName: serviceName,
        //     price: price,
        //     description: description,
        //     imageURL: imageURL,

        // };
        // console.log("update user data", editUserData);

        // fetch(`http://localhost:5000/update/${serviceId}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(editUserData)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result) {
        //             // setIsEditClicked(false);
        //         }
        //     })

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
        id && fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(error => console.log(error))
    }

    return (
        <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar />
            </div>

            <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-center mt-5 py-5" >
                <div class="manageService">
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
                            {manageService.map(service => {
                                return <tr>
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
                                        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content" style={{ height: '500px' }}>
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>  </div>
                                                    <div class="modal-body">
                                                        <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>

                                                            <input className="form-control" name="serviceName" placeholder="Service Name" defaultValue={singleService?.serviceName} /><br />

                                                            <input className="form-control" name="price" placeholder="Price" defaultValue={singleService?.price} /> <br />

                                                            <input className="form-control" name="description" placeholder="Description" defaultValue={singleService?.description} /> <br />



                                                            <input className="form-control" name="image" type="file" defaultValue={singleService?.image} /> <br /><br />
                                                            <input type="submit" data-bs-dismiss="modal" />

                                                        </form>

                                                    </div>
                                                    {/* <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" >Update</button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* delete */}
                                        <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>  </div>
                                                    <div class="modal-body">
                                                        Are you sure you want to delete?
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(service._id)}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


};

export default ManageService;