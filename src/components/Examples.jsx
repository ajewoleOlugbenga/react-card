import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';


const Examples = () => {

    const [selectedTopic,setSelectedTopic] = useState('components')

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
    }

  return (
    <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}  onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick("jsx")}>Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
  )
}

export default Examples;
