'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'

export default function Sidebar() {
  const {user} = useUser();
    return (
    <div>Sidebar</div>
  )
}
