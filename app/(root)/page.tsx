import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Shanelle', lastName: 'Omondi', email: 'shanelleomondi@gmail.com'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type='greeting'
                title='Welcome'
                user={loggedIn?.firstName || 'Guest'}
                subtext='Access and manage your account '
                />
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1000.75}
                    />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 1200 }, {currentBalance: 1000}]}
        />
    </section>
  )
}

export default Home