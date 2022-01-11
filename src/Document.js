import React, { useState, useEffect, useRef } from 'react'
import './Document.css'

export default function Document({title, content}){

    const ref = useRef()
    const [ able, SetAble ] = useState(true)

    useEffect(() => {
      console.log('Button is enabled')
    }, [able])

    const handleScroll = () => {
       // const el = document.querySelector("p")
        const scr = ref.current.scrollHeight
        const b = ref.current.scrollTop
        const c = ref.current.clientHeight

        
 
        const isAble = scr - c

        console.log(b)
        console.log(isAble)

        if(b == isAble){
            SetAble(false)
        }

    }
    return(
    <>
      <h1 className="title">{title}</h1>
      <p onScroll={handleScroll} ref={ref} className="content">{content}</p>
      <button disabled={able} >I Agree</button>
    </>
    )
}