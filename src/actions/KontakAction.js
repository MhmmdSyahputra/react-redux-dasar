import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK"
export const ADD_KONTAK = "ADD_KONTAK"
export const DELETE_KONTAK = "DELETE_KONTAK"
export const DETAIL_KONTAK = "DETAIL_KONTAK"
export const UPDATE_KONTAK = "UPDATE_KONTAK"

// local
const url = "http://localhost:5000/"

// deploy
// const url = "https://my-json-server.typicode.com/MhmmdSyahputra/react-redux-dasar/"

export const getListKontak = () => {
    // console.log("2. Masuk Action");
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })

        //get api
        axios({
                method: 'GET',
                url: url + 'kontaks',
                timeout: 120000
            })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errormessage: false
                    }
                })
            })
            .catch((error) => {
                // console.log("3. gagal dapet data", error);
                //gagal get api
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}

export const addKontak = (data) => {
    // console.log("2. Masuk Action");
    return (dispatch) => {

        // loading
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })

        //get api
        axios({
                method: 'POST',
                url: url + 'kontaks',
                timeout: 120000,
                data: data
            })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errormessage: false
                    }
                })
            })
            .catch((error) => {
                // console.log("3. gagal dapet data", error);
                //gagal get api
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}

export const deleteKontak = (id) => {
    // console.log("2. Masuk Action");
    return (dispatch) => {

        // loading
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })

        //get api
        axios({
                method: 'DELETE',
                url: url + 'kontaks/' + id,
                timeout: 120000,
            })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errormessage: false
                    }
                })
            })
            .catch((error) => {
                // console.log("3. gagal dapet data", error);
                //gagal get api
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}

export const detailKontak = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

export const updateKontak = (data) => {
    // console.log("2. Masuk Action");
    return (dispatch) => {

        // loading
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errormessage: false
            }
        })

        //get api
        axios({
                method: 'PUT',
                url: url + 'kontaks/' + data.id,
                timeout: 120000,
                data: data
            })
            .then((response) => {
                // console.log("3. berhasil dapet data", response.data);
                //berhasil get api
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errormessage: false
                    }
                })
            })
            .catch((error) => {
                // console.log("3. gagal dapet data", error);
                //gagal get api
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errormessage: error.message
                    }
                })
            })
    }
}