
import React from 'react'
import Image from 'next/image'
const Transaction = () => {
  return (
    <div className="bg-softCol m-2">
      <h2 className="p-3">Latest Transactions</h2>
      <table className=" ">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="">
                <Image
                  src="/nopic.webp"
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={` `}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td className='relative p-4'>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="">
                <Image
                  src="/nopic.webp"
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="">Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="">
                <Image
                  src="/nopic.webp"
                  alt=""
                  width={40}
                  height={40}
                  className=" object-cover"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={``}>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="">
                <Image
                  src="/nopic.webp"
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={``}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction