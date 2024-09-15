"use client";
import React from 'react'
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { apiHighestScore } from '@/app/api/highestScore/route';

const highestScoreComp = () => {
    const { data: session, status } = useSession();
    const [highscore, sethighscore] = useState(0);
    useEffect(() => {
      if(session){
        console.log("session is true.... for the high comp ")
      }
    
    }, [session])
    
  return (
    <>
    <div className='my-4'>
        Highest Score : {highscore}
    </div>
    </>
  )
}

export default highestScoreComp