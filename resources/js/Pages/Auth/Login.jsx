//import React
import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

//import Inertia adapter
import { Inertia } from '@inertiajs/inertia';

function Login() {

    //destruct props "errors"
    const { errors } = usePage().props;

    //define state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //method "storeLogin"
    const storeLogin = async (e) => {
        e.preventDefault();

        Inertia.post('/login', {

            //data
            email: email,
            password: password,
        });
    }

    return (
        <>
            <Head>
                <title>Login Account</title>
            </Head>
            <Layout>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card border-0 rounded-3 shadow-sm">
                            <div class="card-body">
                                <h5>LOGIN</h5>
                                <hr />
                                <form onSubmit={storeLogin}>

                                    <div class="mb-3">
                                        <label class="form-label">Email Address</label>
                                        <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                    </div>
                                    {errors.email && (
                                        <div className="alert alert-danger">
                                            {errors.email}
                                        </div>
                                    )}

                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    </div>
                                    {errors.password && (
                                        <div className="alert alert-danger">
                                            {errors.password}
                                        </div>
                                    )}

                                    <button type="submit" class="btn btn-primary w-100">LOGIN</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )

}

export default Login