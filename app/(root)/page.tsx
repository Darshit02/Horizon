import HeaderBox from '@/components/header-box'
import RightSidebar from '@/components/right-sidebar'
import TotalBalanceBox from '@/components/total-balance-box'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser()
  return (
    // class will imported by the globals.css
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={`${loggedIn?.firstName} ${loggedIn?.lastName}` || "Guest"}
            subtext = "Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance : 1234.22},{currentBalance : 11222.22}]}
      />
    </section>
  )
}

export default Home