import React from 'react'
import { useChatStore } from '../store/useChatStore';


const HomePage = () => {
  const { seletedUser } = useChatStore();
  return (
    <div>
      home
    </div>
  )
}

export default HomePage
