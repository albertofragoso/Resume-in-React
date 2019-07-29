import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Info from '../components/Info'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import useGetData from '../hooks/useGetData'

const App = () => {

  const [data] = useGetData()
  
  return !data ? <h1>Loading... </h1> : (
    <Main>
      <Sidebar>
        <About 
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
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