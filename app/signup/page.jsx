'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import withAuthRedirect from '@/utils/withAuthRedirect'

const page = () => {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
    })
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwordConfirm !== user.password) {
            alert('Password do not match!')
            return
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            if(response.ok) {
                console.log(await response.json())
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='lg:w-80 mx-auto sm:p-2 lg:mt-10'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
                <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className='p-2 text-white outline-none rounded-md bg-transparent border border-[#9D69FF]' type="text" placeholder='Username' id="" />
                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className='p-2 text-white outline-none rounded-md bg-transparent border border-[#9D69FF]' type="email" placeholder='Email' id="" />
                <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='p-2 text-white outline-none rounded-md bg-transparent border border-[#9D69FF]' type="password" placeholder='Password' id="" />

                <input className='p-2 text-white outline-none rounded-md bg-transparent border border-[#9D69FF]' type="password" value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} placeholder='Confirm Password' id="" />

                <input className='p-2 rounded-md text-white py-3 bg-[#9D69FF]' type="submit" value="Signup" />
            </form>
        </div>
    )
}

export default withAuthRedirect(page)
