import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addKontak, getListKontak, updateKontak } from '../../actions/KontakAction'

export const AddKontak = () => {
    const [nama, setNama] = useState("")
    const [nohp, setNohp] = useState("")
    const [id, setId] = useState("")

    const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //jika id ada maka update data
        if (id) {
            dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }))
            setNama('')
            setNohp('')
            setId('')
        } else {
            //jika tidak ada maka add data
            dispatch(addKontak({ nama: nama, nohp: nohp }))
        }

    }

    useEffect(() => {
        if (addKontakResult) {
            dispatch(getListKontak())
            setNama('')
            setNohp('')
        }

    }, [addKontakResult, dispatch])

    useEffect(() => {
        if (updateKontakResult) {
            dispatch(getListKontak())
            setNama('')
            setNohp('')
        }

    }, [updateKontakResult, dispatch])

    useEffect(() => {
        if (detailKontakResult) {
            setNama(detailKontakResult.nama)
            setNohp(detailKontakResult.nohp)
            setId(detailKontakResult.id)
        }

    }, [detailKontakResult, dispatch])

    return (
        <div className='text-light'>
            <h4 className='text-start'>{id ? "Edit kontak" : "Add Kontak"}</h4>
            <hr />

            <form className='form-group mb-5' onSubmit={(e) => handleSubmit(e)}>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className='form-control text-light' value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Nama . . .' style={{ background: 'transparent', border: '3px solid white' }} />
                    </div>
                    <div className="col">
                        <input type="number" className='form-control text-light' value={nohp} onChange={(e) => setNohp(e.target.value)} placeholder='No Hp . . .' style={{ background: 'transparent', border: '3px solid white' }} />
                    </div>
                </div>
                <div className='text-end'>
                    <button className='btn text-success fw-bold text-end' style={{ width: '80px', border: '2px solid white' }} >Simpan</button>
                </div>
            </form>
        </div>
    )
}
