import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Entry from '@/views/entry'

function Layout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Entry />}></Route>
      </Routes>
    </div>
  )
}

export default Layout
