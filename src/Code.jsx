import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const Code = () => {
  const {code} = useParams()
  const [display, setDisplay] = React.useState(false)
  const codeMap = {
    '1023': 'food0',
    '1123': 'food1',
    '1223': 'food2',
    '1323': 'food3',
    '1423': 'food4',
    '1523': 'food5',
    '1623': 'food6'
  } 

  React.useEffect(() => {
    const fetchCoupon = async() => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/coupon')
        console.log(res.data.result)
        if(!res.data.result.includes(codeMap[code])){
          window.alert('Sorry! Coupon already taken')
        }else if(res.data.result.includes(codeMap[code])){
          setDisplay(true)
        }
        localStorage.setItem('coupon', code)
        await axios.delete(`http://localhost:5000/api/v1/coupon/${codeMap[code]}`)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCoupon()
  }, [])
  return (
    <div className='h-screen bg-green-800'>
      <h1 className='text-center text-white text-8xl font-bold'>{display && code}</h1>
    </div>
  )
}

export default Code