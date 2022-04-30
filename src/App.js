
import './App.css';

import { Header } from './componentes/header.js';
import { Section_1 } from './componentes/section_1.js';
import { Section_2 } from './componentes/section_2.js';

function App() {
  return (
    <div id="main-container">
    <Header/>
    <Section_1/>
    <Section_2/>
    </div>
  );
}

export default App;
