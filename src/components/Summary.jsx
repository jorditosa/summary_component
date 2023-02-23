import { useEffect, useState } from 'react'
import Button from "./Button"
import data from '../data/data.json'

function Summary() {

    const [ info, setInfo ] = useState([])

    useEffect(() => {
        setInfo(data);
    }, [])

  
  return (
    <section className="summary container">
        <h3 className="summary-heading">Summary</h3>

        { info.map( item => (
        <div className="summary-box" key={item.category}>
            <div className='summary-box-heading'>
                <img src={item.icon} alt=" `${item.category}` img" className='summary-img' />
                <h4 style={{color: `${item.color}`}}>{item.category}</h4>
            </div>
            <div className='summary-box-scoring'>
                <span className='summary-score'>{item.score}</span>
                /
                <span className='summary-score-total'>100</span>
            </div>
        </div>
            )
        )}

        <Button />
        
    </section>
  )
}

export default Summary