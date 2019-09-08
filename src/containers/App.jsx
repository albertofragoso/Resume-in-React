import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Info from '../components/Info'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Loader from '../components/Loader'
import useGetData from '../hooks/useGetData'

import '../global.css'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
`

const App = () => {

  const [data] = useGetData()
  
  return !data ? <Loader /> : (
    <Main>
      <GlobalStyles />
      <Sidebar>
        <About 
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
        />
      </Sidebar>
      <Info>
        <Education data={data.education} />
        <Experience data={data.experience} />
        <Certifications data={data.certificate} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
      </Info>
    </Main>
  )
}

export default App