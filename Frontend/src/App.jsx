/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import axios from "axios"
import Markdown from "react-markdown"

import prism from"prismjs"
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const[code,setCode] = useState( ` function sum() {
              return 1 + 1
              }`)

  useEffect(()=>{
    prism.highlightAll()
  },[])

  const [review,setReview] = useState(``)

  async function reviewCode(){
    const  response = await axios.post("http://localhost:3000/ai/get-review", {code})
    setReview(response.data)

  }



  return (
    <>
    <div className='navbar'>
    <h2> AI Powered Code Reviewer </h2>
    <h2> You Can Ask Anythings </h2>
    <h2> AI Power </h2>
    </div>
    <hr />
    
      <main>
        
        <div className="left">
          <div className="code">
          <Editor

            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code,prism.languages.javascript, "javascript")}

            padding={10}
            style={{
              fontFamily: `"Fire code", "Fira Mono", "monospace"`,
              fontSize :16,
              borderRadius:"5px",
              border:"1px solid #ddd",
              height:"100%",
              width:"100%"
            }}
            


          />

          </div>
          <div className="review" onClick={reviewCode}>Review</div>
        </div>

        <div className="right">
         <Markdown>{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
