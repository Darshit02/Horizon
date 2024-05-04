import HeaderBox from '@/components/header-box'
import RightSidebar from '@/components/right-sidebar'
import TotalBalanceBox from '@/components/total-balance-box'
import React from 'react'

const Home = () => {
  const loggedIn = { 
    firstName : "Darshit",
    lastName : "Mistry",
    email : "darshitmistry2@gmail.com"
  }
  return (
    // class will imported by the globals.css
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
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