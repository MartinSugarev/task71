import "./App.css";
import Document from './Document'
import React, { useEffect, useState } from 'react'

function App() {

  const [text, SetText] = useState('')

  useEffect(() => {
    
   fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt', {
     method: 'GET'
   })
   .then(res => res.text())
   .then(data => SetText(data))

  },[])

  return (
    <Document title="Terms and Conditions" content={text} />
  );
}

export default App;
