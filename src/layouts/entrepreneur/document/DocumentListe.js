import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Swal from 'sweetalert'
import http from '../../../http-common';
// import axios from "axios";
import EntrepreneurLayout from '../EntrepreneurLayout';

function DocumentListe() {
    const [documenttList, setDocumentList] = useState([])

    useEffect(() => {
        fetchDocumenttList()
    }, [])

    const fetchDocumenttList = () => {
        http.get('/documents')
            .then(function (response) {
                setDocumentList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                http.post(`/document/${id}`)
                    .then(function (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Project deleted successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        fetchDocumenttList()
                    })
                    .catch(function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'An Error Occured!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
            }
        })
    }
    const getPDF = (file_name) => {
        http.get(`/download/${file_name}`, { responseType: 'arraybuffer' })
            .then(res => {
                console.log(res.data);
                const url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }));
                console.log(url);
                window.open(url, '_blank');

            }).catch(err => {
                console.log(err.response);
                //  toast.danger('Oups! Echec de téléchargent');
            })
    }

    return (
        <EntrepreneurLayout>
            <div class="content-wrapper">

                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Mes Documents</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Mes Documents</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        {/* <h3 class="card-title">Responsive Hover Table</h3> */}
                                        <div class="card-tools">
                                            <div class="input-group input-group-sm">
                                                <input type="text" name="table_search" class="form-control float-right"
                                                    placeholder="Search"/>
                                                    <div class="input-group-append">
                                                        <button type="submit" class="btn btn-default">
                                                            <i class="fas fa-search"></i>
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-body table-responsive p-0">
                                        <table class="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="col-4">Nom Document</th>
                                                    <th className="col-2">Date</th>
                                                    <th className="col-2">Etat</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {documenttList.map((document, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>{document.type}</td>
                                                            <td>{document.created_at}</td>
                                                            <td>Généré</td>
                                                            <td>

                                                                <Link
                                                                    onClick={() => getPDF(document.file)}

                                                                    className="btn btn-success mx-1">
                                                                    consulter
                                                                </Link>
                                                                <Link
                                                                    className="btn btn-primary mx-1"
                                                                >
                                                                    Telecharger
                                                                </Link>
                                                                <button
                                                                    onClick={() => handleDelete(document.id)}
                                                                    className="btn btn-danger mx-1">
                                                                    Supprimer
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </EntrepreneurLayout>
    )
}
export default DocumentListe