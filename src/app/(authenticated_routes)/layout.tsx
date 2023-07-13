import {ReactNode} from 'react'
import ProtectedRouteContext from "@/components/protectedRouteContext";


type AuthenticatedLayoutProps = {
  children: ReactNode
}

export default function AuthenticatedLayout({children}: AuthenticatedLayoutProps) {

  return (
      <ProtectedRouteContext>
        {children}
      </ProtectedRouteContext>
  )
}
