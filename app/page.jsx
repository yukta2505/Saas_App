import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants/index'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
        id="123"
        name="Neura the Brainy Explorer"
        topic="Neural network of the brain"
        subject="Neuroscience"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard
        id="456"
        name="Neura the Brainy Explorer"
        topic="Neural network of the brain"
        subject="Neuroscience"
        duration={30}
        color="#e5d0ff"
        />
        <CompanionCard
        id="789"
        name="Neura the Brainy Explorer"
        topic="Neural network of the brain"
        subject="Neuroscience"
        duration={30}
        color="#BDE7FF"
        />
        
      </section>

      <section className='home-section'>
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page