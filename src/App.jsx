import { useEffect } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import Balance from './components/Balance'
import ExpenseList from './components/ExpenseList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {useSelector, useDispatch} from 'react-redux'
import { fetchtransection } from './features/tranjection/tranjectionSlice'

function App() {
  const dispatch = useDispatch() 
  const {transections} = useSelector((state) => state.expense)
  console.log(transections)
  useEffect(()=>{
    dispatch(fetchtransection())
  },[dispatch])

  return (
    <>
      <div className="App">
          <Navbar/>
          <div className="main">
            <div className="container">
                <Balance/>
                <AddForm/>
                <p className="second_heading">Your Transactions:</p>
                <div className="conatiner_of_list_of_transactions">
              {
                transections?.map(todo => (
                  <ExpenseList key={todo.id} todo={todo}/>
                ))
              }
                </div>
            </div>
          </div>
          <Footer/>
      </div>    
    </>
  )
}

export default App
