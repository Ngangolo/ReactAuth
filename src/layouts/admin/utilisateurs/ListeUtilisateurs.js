import React from 'react'
import MasterLayout from '../MasterLayout'

function ListeUtilisateurs() {
    return (
        <MasterLayout>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Utilisateurs</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Utilisateurs</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
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


                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table m-0">
                                    <thead>
                                        <tr>
                                            <th className="col-2">Nom</th>
                                            <th className="col-3">E-mail</th>
                                            <th className="col-2">Status</th>
                                            <th className="col-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Koné N'gangolo</td>
                                            <td>konengangolo54@gmail.com</td>
                                            <td><span class="badge badge-success">accepter</span></td>
                                            <td >
                                                <button
                                                    // onClick={() => getPDF(document.file)}

                                                    className="btn btn-success mx-1">
                                                    Accepter
                                                </button>
                                                <button
                                                    className="btn btn-primary mx-1"
                                                >
                                                    Telecharger
                                                </button>
                                                <button
                                                    // onClick={() => handleDelete(document.id)}
                                                    className="btn btn-danger mx-1">
                                                    Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OR1848</td>
                                            <td>Samsung Smart TV</td>
                                            <td><span class="badge badge-warning">en attente</span></td>
                                            <td>
                                                <button
                                                    // onClick={() => getPDF(document.file)}

                                                    className="btn btn-success mx-1">
                                                    Accepter
                                                </button>
                                                <button
                                                    className="btn btn-primary mx-1"
                                                >
                                                    Telecharger
                                                </button>
                                                <button
                                                    // onClick={() => handleDelete(document.id)}
                                                    className="btn btn-danger mx-1">
                                                    Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OR7429</td>
                                            <td>iPhone 6 Plus</td>
                                            <td><span class="badge badge-danger">refuser</span></td>
                                            <td>
                                                <button
                                                    // onClick={() => getPDF(document.file)}

                                                    className="btn btn-success mx-1">
                                                    Accepter
                                                </button>
                                                <button
                                                    className="btn btn-primary mx-1"
                                                >
                                                    Telecharger
                                                </button>
                                                <button
                                                    // onClick={() => handleDelete(document.id)}
                                                    className="btn btn-danger mx-1">
                                                    Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>OR7429</td>
                                            <td>Samsung Smart TV</td>
                                            <td><span class="badge badge-info">Processing</span></td>
                                            <td>
                                                <button
                                                    // onClick={() => getPDF(document.file)}

                                                    className="btn btn-success mx-1">
                                                    Accepter
                                                </button>
                                                <button
                                                    className="btn btn-primary mx-1"
                                                >
                                                    Telecharger
                                                </button>
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
            </div>


        </MasterLayout>
    )
}

export default ListeUtilisateurs