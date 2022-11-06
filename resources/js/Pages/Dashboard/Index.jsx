//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

function Dashboard() {

    //destruct props "auth"
    const { auth } = usePage().props;

    return (
        <>
            <Head>
                <title>Dashboard - SantriKoding.com</title>
            </Head>
            <Layout>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card border-0 rounded-3 shadow-sm">
                            <div class="card-body">
                                Selamat Datang <strong>{auth.user.name}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )

}

export default Dashboard