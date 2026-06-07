import { gsap } from "gsap"
import {Draggable} from "gsap/Draggable"
import { Dock, Navbar,Welcome } from "#components" 
<<<<<<< HEAD
import { Terminal,Resume,Finder,Text,Image,Contact,Trash} from "#windows"
=======
import Terminal from "#windows/Terminal"
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538


gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
<<<<<<< HEAD
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Trash/>
      <Contact/>
=======
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
    </main>
  )
}

export default App