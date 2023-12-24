import React from 'react'

const Services = () => {
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-NeutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-NeutralGrey'>
                    We have been working with some Fortune 500+ clients
                </p>

                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src="/src/assets/icons/Logo_1.png" alt=""/>
                    <img src="/src/assets/icons/Logo_2.png" alt=""/>
                    <img src="/src/assets/icons/Logo_3.png" alt=""/>
                    <img src="/src/assets/icons/Logo_4.png" alt=""/>
                    <img src="/src/assets/icons/Logo_5.png" alt=""/>
                    <img src="/src/assets/icons/Logo_6.png" alt=""/>
                    <img src="/src/assets/icons/Logo_7.png" alt=""/>

                </div>

            </div>

            <div>
                <h2>Manage your entire community in a single system</h2>
                <p>Who is Nextcent suitable for?
</p>
            </div>


        </div>
    )
}

export default Services
