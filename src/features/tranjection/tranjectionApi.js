import Axios from "../../utils/Axios"

export const fetchTracnsection = async() => {

    const response = await Axios.get("/transactions");

    return response.data

}
export const createTracnsection = async(Name, Amount, Type) => {

    const response = await Axios.post("/transactions", {
        name: Name,
        amount: parseInt(Amount),
        type: Type
    });

    return response.data

}
export const UpdateTracnsection = async(id, Name, Type,Amount) => {
   
    const response = await Axios.put(`/transactions/${id}`, {
       name:  Name,
       type: Type,
       amount: Amount
    });

    return response.data

}
export const DeleteTracnsection = async(id) => {

    const response = await Axios.delete(`/transactions/${id}`);

    return response.data

}