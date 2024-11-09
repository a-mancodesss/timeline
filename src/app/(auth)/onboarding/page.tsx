import AccountProfile from '@/components/forms/AccountProfile'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const OnBoardingPage = async() => {
    const user = await currentUser()
    const userInfo = {}
    const userData ={
        id:user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name:userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl || "",
    }
  return (
  <main className='mx-auto max-w-3xl flex-col justify-start px-10  py-20'>

    <div className='head-text'>OnBoardingPage</div>
    <p className='mt-3 text-base-regular text-light-2'>Complete your profile now.</p>
    <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile user={userData} btnTitle={"Continue"}/>
    </section>
  </main>
  )
}

export default OnBoardingPage