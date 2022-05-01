
import './App.css';
import './tablet.css';

import { Header } from './componentes/header.js';
import { Section_1 } from './componentes/section_1.js';
import { Section_2 } from './componentes/section_2.js';
import { Section_3 } from './componentes/section_3.js';
import { Footer } from './componentes/footer.js';

function App() {
  return (
    <div id="main-container">
    <Header/>
    <Section_1/>
    <Section_2/>
    <Section_3/>
    <Footer/>
    </div>
  );
}

export default App;
