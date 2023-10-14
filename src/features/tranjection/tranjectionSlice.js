import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { UpdateTracnsection, createTracnsection, DeleteTracnsection, fetchTracnsection } from "./tranjectionApi";



// initialState 
const  initialState = {  
    isloading: false,
    isError: false,
    Error: "",
    transections: [],   
    EditTransection:{}
}
 
export const fetchtransection = createAsyncThunk("/transection", async() => {

    const response = await fetchTracnsection()
    return response

})

export const CreateTransection = createAsyncThunk("create/transection", async({Name, Amount, Type}) => {

    const response = await createTracnsection(Name, Amount, Type)
    return response

})

export const UpdateTransection = createAsyncThunk("update/transection", async({id,Name, Type, Amount}) => {

    const response = await UpdateTracnsection(id, Name, Type,Amount)
    return response

})

export const DeleteTransection = createAsyncThunk("delete/transection", async(id) => {

    const response = await DeleteTracnsection(id)
    return response

})


const transectionReducer = createSlice({
    name:"transection",
    initialState,
    reducers:{
        AddEdit: (state, action) => {
            state.EditTransection = action.payload
        },
        removeEdit: (state, action) => {
            state.EditTransection={}
        }
    },
    extraReducers: (bulder) => {
        bulder
            .addCase(fetchtransection.pending, (state) => {
                state.isloading = true
            })
            .addCase(fetchtransection.fulfilled, (state, action)=> {
                state.isloading = false
                state.transections= action.payload
            })
            .addCase(fetchtransection.rejected, (state, action)=> {
                state.isError = true,
                state.Error = action.error                 
            })
            .addCase(CreateTransection.pending, (state) => {
                state.isloading = true
            })
            .addCase(CreateTransection.fulfilled, (state, action)=> {
                state.transections.push(action.payload)              
            })
            .addCase(CreateTransection.rejected, (state, action)=> {
                state.isError = true,
                state.Error = action.error                 
            })
            .addCase(UpdateTransection.pending, (state)=> {
                state.isloading = true       
            })
            .addCase(UpdateTransection.fulfilled, (state, action)=> {
                const findUpdateIndex = state.transections.findIndex((t)  => t.id === action.payload.id)
                
                state.transections[findUpdateIndex] = action.payload
            })
            .addCase(UpdateTransection.rejected, (state, action)=> {
                state.isError = true,
                state.Error = action.error                 
            })
            .addCase(DeleteTransection.pending, (state)=> {
                state.isloading = true       
            })
            .addCase(DeleteTransection.fulfilled, (state, action)=> {
                console.log(action)
                state.transections = state.transections.filter((t) => t.id !== action.meta.arg)          
            })
            .addCase(DeleteTransection.rejected, (state, action)=> {
                state.isError = true,
                state.Error = action.error                 
            })    
  
    }
})

export default transectionReducer.reducer;
export const tansectionAction = transectionReducer.actions;
