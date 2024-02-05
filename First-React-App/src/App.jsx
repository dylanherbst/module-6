import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from '../props Prac/propsDisplay'
import City from '../props Prac/city'
import Greet from '../props Prac/greeting'
import { Greet2 } from '../props Prac/greeting'
import FullName from '../props Prac/fullname'
import ComplexComment from '../props Prac/comment'
import DeconComment from '../deconstruction Prac/deconComment'
import CallOut from '../props Prac/fancyBox'

import MoodChanger from '../States Prac/moodChanger'
import EmojiChanger from '../States Prac/emoji'
import BirthdayTranslator from '../States Prac/TwoStates'
import LoginForm2 from '../forms Prac/New login Form'
import AddMovieForm from '../forms Prac/addMovieForm'
import MoviesList from '../Lists Prac/movieslist'


function ExampleComponent() {
  return (
    <div className="Eg Component Compenent Box">
      <h1>My first EG</h1>
      <p>My first react component</p>
    </div>
  );
}

function App() {

  
  const [count, setCount] = useState(0)
  const invalidJSX = <div><p>Para 1</p> <p>Para 2</p></div>;
  const spiderman = {name: 'spiderman', alterego: 'Peter Parker', catchPhrase: 'with great power....'};
  const spidermanJSX = (<div>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterego}</cite>
  </div>)
    const spidermanJSXFrag = (<>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterego}</cite>
    </>)
  const person = {first: "Dyaln", middle: "Quebec", last: "Herbst"}


  const commentData = {
    author: {
        name: 'John Doe',
        avatarUrl: 'https://example.com/avatar.jpg', // URL to an image
    },
    text: 'This is a great comment!',
    date: new Date()
};

  return (

    <>
{/* <MoodChanger></MoodChanger> */}

{/* <EmojiChanger></EmojiChanger>
<BirthdayTranslator></BirthdayTranslator> */}
{/* <AddMovieForm></AddMovieForm> */}
<MoviesList></MoviesList>


{/* 
<ComplexComment 
author={commentData.author} 
text={commentData.text} 
date={commentData.date} 
            /> */}

{/* <DeconComment 

author={commentData.author} 
text={commentData.text} 
date={commentData.date} 
            /> */}
{/* <MoviesList></MoviesList> */}


{/* <CallOut title="Nested React Component"
    message="Simple message with a fancy box applied via composition">
    <FullName first="Elon" last="Musk" />
    </CallOut> */}


      <div>

      {/* <FullName first={person.first} middle={person.middle} last={person.last}  />


      <FullName first="Kendrick" middle="Kuta" last="Lamar" />

      <PropsDisplayer name="Dylan" age={23} city="Perth"/>


      <Greet2 name="Dylan"></Greet2>

      <Greet name="Dylan">
    <p>This is a child paragraph</p>
</Greet>

<Greet>
    <p>No name provided</p>
</Greet> */}


      {/* <exampleComponent/> */}
         {/* state and country are not specified, will use defaults */}
    {/* <City name="Sydney" /> 
    
    {/* country is not specified, will use default */}
    {/* <City name="Melbourne" state="VIC">
      <div>child of city in Vic Melbourne</div>
    </City> */}
    
    {/* all values are specified, won't use defaults */}
    {/* <City name="Chicago" state="Illinois" country="USA" /> */}






{/* 

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    {invalidJSX}
    {spidermanJSX}
    {spidermanJSXFrag}
   <ExampleComponent/>

    


    </>
  )
}

export default App
