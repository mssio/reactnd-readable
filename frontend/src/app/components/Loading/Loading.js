import React from 'react'
import ReactLoading from 'react-loading'
import './styles.css'

export default function Loading () {
  return (
    <ReactLoading delay={200} type='spin' color='#222' className='react-loading' />
  )
}
