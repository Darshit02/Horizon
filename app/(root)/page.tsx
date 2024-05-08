import HeaderBox from '@/components/header-box'
import RecentTransactions from '@/components/recent-transactions'
import RightSidebar from '@/components/right-sidebar'
import TotalBalanceBox from '@/components/total-balance-box'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async ({searchParams : {id ,page}} : SearchParamProps) => {
  const CurrentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data || [];
  const appwriteItemId = (id as string) || accounts?.data[0].appwriteItemId;

  const account = await getAccount({ appwriteItemId })

  console.log({accountsData, accounts,account})
  
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
          accounts={accountsData}
          totalBanks = {accounts?.totalBanks || 0}
          totalCurrentBalance = {accounts?.totalCurrentBalance || 0}
          />
        </header>
        <RecentTransactions
        accounts = {accountsData}
        transactions = {account?.transactions}
        appwriteItemId = {appwriteItemId}
        page={CurrentPage}
        />
      </div>
      <RightSidebar
      user = {loggedIn}
      transactions = {[]}
      banks = {accountsData?.slice(0,2)}
      />
    </section>
  )
}

export default Home