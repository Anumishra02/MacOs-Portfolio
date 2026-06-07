import { gsap } from "gsap"
import { Draggable } from "gsap/all"
import { Dock, Navbar,Welcome } from "#components" 
import { Terminal,Resume,Finder,Text,Image,Contact,Trash} from "#windows"
import Terminal from "#windows/Terminal"



gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>

      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Trash/>
      <Contact/>
    </main>
  )
}

export default App