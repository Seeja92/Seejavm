import React from 'react'

export default function ProductLayout({
    children,
    }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>This is search related page</h1>
      {children}
    </div>
  )
}
