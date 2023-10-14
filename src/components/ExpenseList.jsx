import React from 'react';
import Edit from '../assets/edit.svg'
import Delete from '../assets/delete.svg'
import { DeleteTransection, tansectionAction } from '../features/tranjection/tranjectionSlice';
import {useDispatch} from 'react-redux'
import numberWithCommas from '../utils/numberWithcomas';
 

const ExpenseList = ({todo}) => {
    const disptach = useDispatch()
    const {id ,amount, name, type} = todo

    const handleDelete = (id) => {         
        disptach(DeleteTransection(id))
    }

    const edithandler = (updateexpense) => {
        disptach(tansectionAction.AddEdit(updateexpense))
    }

    return (
        <ul>
        <li className={`transaction ${type === "expense" && "expense"}  income`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {numberWithCommas(amount)}</p>
                <button className="link">
                    <img
                        className="icon"
                        src={Edit}
                        onClick={() => edithandler(todo)}
                    />
                </button>
                <button onClick={() => handleDelete(id)} className="link">
                    <img
                        className="icon"
                        src={Delete}
                    />
                </button>
            </div>
        </li>
    </ul>
    );
};

export default ExpenseList;