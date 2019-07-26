import React from 'react'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Info from '../components/Info'
import Education from '../components/Education'
import Experience from '../components/Education'
import Certifications from '../components/Certifications'
import Skills from '../components/Skills'

const App = () => {
  return(
    <Main>
      <Sidebar>
        <About />
      </Sidebar>
      <Info>
        <Education />
        <Experience />
        <Certifications />
        <Skills />
      </Info>
    </Main>
  )
}

export default App