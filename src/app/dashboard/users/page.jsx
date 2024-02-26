
import Search from '@/dashboard/Search'
import Link from 'next/link'
import React from 'react'
import { fetchUsers } from '@/app/serverwala/data'


  const UsersPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, users } = await fetchUsers(q, page);
  return (
   <>
   <div className='m-6 p-3 '>
    <div className='flex justify-between'>
    <Search placeholder="seacrch users name" />
    <Link href=""><button className=' bg-green-700 rounded-lg p-2 hover:bg-green-50 hover:text-black'>Add New User</button></Link>
    </div>

    <table className='m-4 p-2 bg-softCol'>
    <thead>
          <tr className='flex gap-14'>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="">
                  <Image
                    src={user.img || "/nopic.webp"}
                    alt=""
                    width={40}
                    height={40}
                    className=""
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className="">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className="">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
       
    </table>
   </div>
   </>
  )
}

export default UsersPage