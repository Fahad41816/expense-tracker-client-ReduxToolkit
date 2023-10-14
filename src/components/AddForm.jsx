import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { CreateTransection, UpdateTransection, tansectionAction } from '../features/tranjection/tranjectionSlice';

const AddForm = () => {

    const dispatch = useDispatch()
    const {EditTransection} = useSelector((state)=> state.expense)

    // state 
    const [Name, setName] = useState("")
    const [Type, setType] = useState("")
    const [Amount, setAmount] = useState(0)
    const [Editmode, setEditmode] = useState(false)
 

    useEffect(()=>{
        if(EditTransection.id){
            setName(EditTransection.name)
            setType(EditTransection.type)
            setAmount(EditTransection.amount)
            setEditmode(true)
        }else{
            setName("")
            setType("")
            setAmount("")
            setEditmode(false)
        }
    },[EditTransection])

    const reset = () => {
        setName("")
        setType("")
        setAmount("")
    }

    const typeHandler = (e) => {
        setType(e.target.value)  
    }

    const formhandler = (e) => {

       e.preventDefault()
 
       dispatch(CreateTransection({Name, Amount, Type}))
       reset()

    }

    const updateHandler = (e) => {
         
        e.preventDefault()
        dispatch(UpdateTransection({
            id : EditTransection.id ,
            Name,
            Type,
            Amount}))
        reset() 
        setEditmode(false)
    }
 
    const cancleEdit = () => {

        dispatch(tansectionAction.removeEdit())

    }
    
    return (
    <div className="form">
        <h3>Add new transaction</h3>

       <form onSubmit={ Editmode? updateHandler : formhandler }>
            <div className="form-group">
                    <label htmlFor="transaction_name">Name</label>
                    <input
                        type="text"
                        name="transaction_name"
                        placeholder="My Salary"
                        value={Name}
                        onChange={e => setName(e.target.value) }
                        required
                    />
            </div>

            <div className="form-group radio" onChange={typeHandler}>
                <label htmlFor="transaction_type">Type</label>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="income"
                        name="transaction_type"
                        checked={Type === "income"}         
                        required                                
                    />
                    <label htmlFor="transaction_type">Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="transaction_type"
                        checked={Type === "expense"}    
                        placeholder="Expense"
                        required
                    />
                    <label htmlFor="transaction_type">Expense</label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="transaction_amount">Amount</label>
                <input
                    type="number"
                    placeholder="300"
                    name="transaction_amount"
                    value={Amount}
                    onChange={e=> setAmount(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="btn"> {Editmode ? "update" : "Add" } Transaction</button>

            {
                Editmode ? <button onClick={cancleEdit} className="btn cancel_edit">Cancel Edit</button> : ""
            }
            
       </form>
    </div>
    );
};

export default AddForm;