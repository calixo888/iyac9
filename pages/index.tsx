import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Grid from '../components/Grid'

export default function Home() {
  return (
    <div className="bg">
      // Background svg, potential animation

      <Navbar />

      <div className="mural">
        // digitalized mural w/ tooltips
      </div>
      
      // Mural Timelapse video embed

      <Grid /> // overflow

    </div>
  )
}

