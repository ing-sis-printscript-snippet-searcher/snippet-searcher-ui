'use client'
import {ReactNode, useCallback} from "react";
import {useUser} from "@auth0/nextjs-auth0/client";
import {useRouter} from "next/navigation";
import LoadingPage from "@/components/loader";

type ProtectedRouteContextProps = {
  children: ReactNode,
}
export default function ProtectedRouteContext({children}: ProtectedRouteContextProps) {
  const {user, error, isLoading} = useUser();
  const router = useRouter()

  if (isLoading) return <LoadingPage/>
  if (error) return <div>{error.message}</div>
  if (!user) router.push('/login')

  console.log("Welcome:", user)
  return <>{children}</>
}

