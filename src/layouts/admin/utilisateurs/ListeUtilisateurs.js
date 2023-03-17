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
                                                placeholder="Search"/>
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-default">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body table-responsive p-0">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>User</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Reason</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>183</td>
                                                <td>John Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-success">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback
                                                    doner.</td>
                                            </tr>
                                            <tr>
                                                <td>219</td>
                                                <td>Alexander Pierce</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-warning">Pending</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback
                                                    doner.</td>
                                            </tr>
                                            <tr>
                                                <td>657</td>
                                                <td>Bob Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-primary">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback
                                                    doner.</td>
                                            </tr>
                                            <tr>
                                                <td>175</td>
                                                <td>Mike Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-danger">Denied</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback
                                                    doner.</td>
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

export default ListeUtilisateurs