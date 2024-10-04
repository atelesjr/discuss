'use client'

import { useSession } from "next-auth/react"

export default function Profile () {
  const session = useSession()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const checkSession = (session: any) => {
    if(session?.data?.user) {
      return `From Client: ${JSON.stringify(session.data.user)}`
    }
    return 'From Client: user is signed out'

  } 

  return( 
    <div>
      {checkSession(session)}
    </div>
  )
}