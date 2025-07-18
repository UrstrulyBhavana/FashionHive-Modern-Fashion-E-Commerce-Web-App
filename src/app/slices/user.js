import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: false,
        user:{}
    },
    reducers: {
              login: (state, action) => {
            state.status = true
            state.user = {
                name: action.payload.name,
                email: action.payload.email,
                role: 'customer',
                pass: action.payload.pass
            }
        }
        ,
        register: (state, action) => {
            let { user, email, pass } = action.payload;
            state.status = true
            state.user = {
                name: user,
                role: 'customer',
                email: email,
                pass: pass
            }
        },
        logout: (state) => {
            state.status = false
            state.user = {}
        }
    }
})

const userReducer = userSlice.reducer
export default userReducer


