import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const MakeAdmin = () => {
    const [admin, setAdmin] = useState({})
    const handleBlur = e =>{
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value
        setAdmin(newAdmin)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        const url = 'http://localhost:5000/addAdmin'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => console.log('server side response', res))
    }
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="login-box">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-secondary mb-5">Make Admin</h1>
                        <div class="user-box">
                            <input type="text" onBlur={handleBlur} name="email" required="" />
                            <label>Admin User Email</label>
                        </div>
                        <input class="buttonStyle" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;