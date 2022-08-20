import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak, deleteKontak, detailKontak } from '../../actions/KontakAction'

const ListKontak = () => {

    const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer)

    const dispatch = useDispatch();

    // fungsi agar add langsung live
    useEffect(() => {
        // panggil action getlistkontak
        // console.log("1. use effect component did mount");
        dispatch(getListKontak());

    }, [dispatch])

    // fungsi agar delete langsung live
    useEffect(() => {
        if (deleteKontakResult) {
            dispatch(getListKontak())
        }
    }, [deleteKontakResult, dispatch])

    return (
        <div className='text-light'>
            <h4 className='text-start'>All Kontak</h4>
            <hr />
            <div className="row">
                <div className="col-md-4 fw-bold mb-3">Nama</div>
                <div className="col-md-4 fw-bold mb-3">No Hp</div>
                <div className="col-md-4 fw-bold mb-3">Action</div>
            </div>
            <div>
                {getListKontakResult ? (
                    getListKontakResult.map((kontak) => {
                        return (
                            <div className="row" key={kontak.id}>
                                <div className="col-md-4 mb-2">{kontak.nama}</div>
                                <div className="col-md-4 mb-2">{kontak.nohp}</div>
                                <div className="col-md-4 mb-2">
                                    <button onClick={() => dispatch(detailKontak(kontak))} className='btn btn-warning me-3'>Edit</button>
                                    <button onClick={() => dispatch(deleteKontak(kontak.id))} className='btn btn-danger'>Hapus</button>
                                </div>
                            </div>
                        )
                    })
                ) : getListKontakLoading ? (
                    <p>loading. . .</p>
                ) : (
                    <p>{getListKontakError ? getListKontakError : "data kosong"}</p>
                )}
            </div>




        </div>

    )
}

export default ListKontak