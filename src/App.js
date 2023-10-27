import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import Examples from "./components/Examples";


function App() {

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
           {CORE_CONCEPTS.map((conceptItem)=> (<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
          </ul>
        </section>
       <Examples/>
      </main>
    </div>
  );
}

export default App;
