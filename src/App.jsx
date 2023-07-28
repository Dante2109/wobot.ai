import { Box, Heading, Image } from '@chakra-ui/react'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [state,setState]=useState("null")
  return (
    <>
    <Box className="main">
      <Box className="IMG">
        <Image className="logo"src={"https://asset.brandfetch.io/idecsAv8a3/id05YuGi_Q.svg"}></Image>
      </Box>
      <Box className='Forms'>   
        <Box className='Line'></Box>  
    <form>
        <Image width={"60px"} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjdZufiEkXTPzQhIQm2wxAimRAmZ_dGjBZRSsfjEtONd8s3uU5"></Image>
        <Heading size="md" width={"200px"} fontWeight={500} >{`It's a delight to have you on board`}</Heading>
        <p style={{margin:"5px"}}>Help us know you better</p>
        <p style={{width:"160px",textAlign:"center",margin:"5px"}}>{`(This is how we optimeize Wobot as per your business needs)`}</p>
        <div className='mainform'>
          <p>Your name</p>
          <input  type="text" placeholder='e.g John Smith'/>
          <p>Company name</p>
          <input  type="text" placeholder='e.g Alpha Inc.' />
          <p>Industry</p>
          <select name="" id="" >
            <option value="Select" disabled selected hidden>Select</option>
            <option value="">Manufacturing</option>
            <option value="">Food</option>
            <option value="">Civil</option>
            <option value="">Construction</option>
            <option value="">Mining</option>
          </select>
        </div>
        <div style={{padding:"0px",marginBottom:"10px"}}>
          <p >Number of Locations</p>
          <div className='people'>
            <Box backgroundColor={state==1?"#3766e8":"#f0f0f0"} color={state==1?"white":"black"}onClick={()=>{setState(1)}} className='box'>1-20</Box>
            <Box backgroundColor={state==2?"#3766e8":"#f0f0f0"} color={state==2?"white":"black"}onClick={()=>{setState(2)}} className='box'>21-50</Box>
            <Box backgroundColor={state==3?"#3766e8":"#f0f0f0"} color={state==3?"white":"black"}onClick={()=>{setState(3)}} className='box'>51-200</Box>
            <Box backgroundColor={state==4?"#3766e8":"#f0f0f0"} color={state==4?"white":"black"}onClick={()=>{setState(4)}} className='box'>201-500</Box>
            <Box backgroundColor={state==5?"#3766e8":"#f0f0f0"} color={state==5?"white":"black"}onClick={()=>{setState(5)}} className='box'>500</Box>
          </div>
        </div>
        <input type="submit" value={"Get Started"} />
    </form>
    <Box className='Line'></Box>
     </Box>
    <p>Terms of use | Privacy Policy</p>
    </Box>
    </>
  )
}

export default App
