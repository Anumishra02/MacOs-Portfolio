import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import { Check, Flag } from 'lucide-react';
import WindowControls from '#components/WindowControls';

const Terminal = () => {
  const total = techStack.length;

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stacks</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@anu_mishra % </span>
          show tech stack
        </p>

        {/* header row — ONE Category, ONE Technologies */}
        <div className="label">
          <span className="col-check" />
          <span className="col-cat">Category</span>
          <span className="col-tech">Technologies</span>
        </div>

        {/* data rows */}
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="stack-row">
              <Check className="col-check check" size={18} />
              <span className="col-cat">{category}</span>
              <span className="col-tech">{items.join(', ')}</span>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={18} /> {total} of {total} stacks loaded successfully (100%)
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" />
            <Flag size={20} fill="black" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;