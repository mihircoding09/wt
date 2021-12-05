import React from 'react'
import {details} from '../helpers/TranscationHistory'
import Transactionitems from '../components/Transactionitems'
import "../styles/History.css";

function History() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Transaction History</h1>  
            <div className="menuList">{details.map  ((task)=>{
                return <div key={task.id}><Transactionitems date={task.date} car={task.car} amount={task.amount}stat={task.stat}/></div>
            })}</div>
          

            
        </div>
           )
    
}

export default History
