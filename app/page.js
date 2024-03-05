'use client';

import { useEffect, useState } from "react";
import Loader from '@/components/Loader/Loader'
import Dashboard from "@/components/DashBoard/Dashboard";


export default function Home() {
  const [loading, setLoading] = useState( true )

  useEffect( () => {
    setTimeout( () => {
      setLoading( false )
    }, 2000 );
  }, [] )

  return (

    loading ?
      <Loader /> : <>
        <div className="mx-auto max-w-[1220px] px-2 md:px-0">
          <Dashboard />
        </div>
      </>
  )
}
