import React from 'react'
import MasterLayout from '../MasterLayout'

function ListeServices() {
    return (
        <MasterLayout>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Services</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Services</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <button
                                // onClick={() => handleDelete(document.id)}
                                className="btn btn-success mx-1">
                                Ajouter service
                            </button>
                            {/* <h3 className="card-title"></h3> */}
                            <div className="card-tools">

                                <div className="input-group input-group-sm" >
                                    <input type="text" name="table_search" className="form-control float-right"
                                        placeholder="Search" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-default">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th className="col-4">Nom Service</th>
                                        <th className="col-2">Date</th>
                                        <th className="col-2">Durée</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    <tr>
                                        <td>document.type</td>
                                        <td>document.created_at</td>
                                        <td>Généré</td>
                                        <td>

                                            <a
                                                // onClick={() => getPDF(document.file)}

                                                className="btn btn-success mx-1">
                                                consulter
                                            </a>
                                            <a
                                                className="btn btn-primary mx-1"
                                            >
                                                Telecharger
                                            </a>
                                            <button
                                                // onClick={() => handleDelete(document.id)}
                                                className="btn btn-danger mx-1">
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>


        </MasterLayout>
    )
}

export default ListeServices