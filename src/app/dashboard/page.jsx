
import Chart from '@/dashboard/Chart'
import Transaction from '@/dashboard/Transaction'
import Card from '@/dashboard/Card'
import React from 'react'
import Rightbar from '@/dashboard/Rightbar'

const Dashboard = () => {
  return (<>
    <div className='flex justify-between m-6 p-3'>
      <div className=''>
        <div className='flex-col  '>
          <div className='flex gap-32'>
            <div><Card/></div>
            <div><Card/></div>
            <div><Card/></div>
          </div>

          <div className='flex-col justify-between'>
            <div><Transaction /></div>
            <div><Chart /></div></div>
        </div>
      </div>

      <div><Rightbar /></div>
    </div>
  </>
  )
}

export default Dashboard