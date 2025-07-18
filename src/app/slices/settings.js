import {createSlice} from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        promoCenter: false,
        promoStatus:false,
        stopPromo:false,
    },
    reducers: {
        stopPromo: (state) => {
            state.stopPromo = true
        },
        promoStatus: (state) => {
            state.promoStatus = true
        },
        promoCenter: (state) => {
            state.promoCenter = !state.promoCenter
        },
    }
})

const settingsReducer = settingsSlice.reducer
export default settingsReducer
