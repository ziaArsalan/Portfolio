import React from 'react'
import Header from './components/header/Header'
import Welcome from './blocks/welcome/Welcome'
import About from './blocks/about/About'
import Skills from './blocks/skill/Skill'
import Project from './blocks/project/Project'

export default function Main() {
    return (
        <div>
            <Header />
            <Welcome />
            <About />
            <Skills />
            <Project />
        </div>
    )
}