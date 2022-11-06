//import React
import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

//import Inertia adapter
import { Inertia } from '@inertiajs/inertia';

function Register() {

    //destruct props "errors"
    const { errors } = usePage().props;

    //define state
    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    //method "storeRegister"
    const storeRegister = async(e) => {
        e.preventDefault();
        
        Inertia.post('/register', {

            //data
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        });
    } 

    return (
        <>
            <Head>
                <title>Register Account</title>
            </Head>
            <Layout>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card border-0 rounded-3 shadow-sm">
                            <div class="card-body">
                                <h5>REGISTER</h5>
                                <hr />
                                <form onSubmit={storeRegister}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Full Name</label>
                                                <input type="text" class="form-control" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                                            </div>
                                            {errors.name && (
                                                <div className="alert alert-danger">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Email Address</label>
                                                <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                            </div>
                                            {errors.email && (
                                                <div className="alert alert-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Password</label>
                                                <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">Password Confirmation</label>
                                                <input type="password" class="form-control" onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Password Confirmation" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )

}

export default Register