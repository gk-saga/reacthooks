
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { HookUseState } from './pages/HookUseState'
import { HookUseEffect } from './pages/HookUseEffect'
import { HookUseContext } from './pages/HookUseContext'
import { HookUseReducer } from './pages/UseReducer/HookUseReducer'
import { HookUseRef } from './pages/HookUseRef'
import HookUseMemo from './pages/HookUseMemo'
import HookUseCallback from './pages/UseCallback/HookUseCallback'
import { UserApiData } from './pages/API/userApiData'
import { HeroSection } from './pages/tailwind/HeroSection'

function App() {

  return (
    <> 
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/use-state' element={<HookUseState />} />
          <Route path='/use-effect' element={<HookUseEffect />} />
          <Route path='/use-context' element={<HookUseContext />} />
          <Route path='/use-reducer' element={<HookUseReducer />} />
          <Route path='/use-ref' element={<HookUseRef />} />
          <Route path='/use-memo' element={<HookUseMemo />} />
          <Route path='/user-data' element={<UserApiData />} />
          <Route path='/use-callback' element={<HookUseCallback />} />
          <Route path='/hero' element={<HeroSection />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
