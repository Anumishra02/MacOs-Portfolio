<<<<<<< HEAD
=======

>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import { Check,Flag } from 'lucide-react';
import  WindowControls  from '#components/WindowControls';
const Terminal = () => {
  return (
    <>
    <div id="window-header">
      <WindowControls target="terminal"/>
      <h2>Tech Stacks</h2>
    </div>
    <div className="techstack">
      <p>
        <span className='font-bold'>@anu_mishra % </span>
        show tech stack
      </p>
      <div className="label">
<<<<<<< HEAD
        <p>Category</p>
=======
        <p className="w-32">Category</p>
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
        <p>Technologies</p>
      </div>
      <ul className="content">
        {techStack.map(({category,items})=>(
<<<<<<< HEAD
          <li key={category} className="space-y-3">
            <div className="flex items-center gap-2">
              <Check className="check" size={20} />
              <h3>{category}</h3>
            </div>
            <div className="tags flex flex-wrap gap-2 ms-10">
              {items.map((item)=>(
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
=======
          <li key={category} className="flex items-center">
            <Check className="check" size={20} />
            <h3>{category}</h3>
            <ul>
              {items.map((item,i)=>(
                <li key={i}>{item}{i<items.length-1 ? ', ' : ''}</li>
              ))}
            </ul>
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
          </li>
        ))}
      </ul>
      <div className="footnote">
        <p>
          <Check size={20} />  5 of 5 stacks loaded successfully(100%)
        </p>
        <p className="text-black">
<<<<<<< HEAD
          <Flag size={15} fill="black" /> 
=======
          <Flag size={20} fill="black" /> 
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
          Render time:6ms
        </p>
      </div>

    </div>
    </>
  )
}
const TerminalWindow=WindowWrapper(Terminal,'terminal');
<<<<<<< HEAD
export default TerminalWindow;
=======
export default TerminalWindow;
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
