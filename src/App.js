import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Wizard from "./components/wizard/wizard";
import SideNavigation from "./components/Navigation/sideNavigation";



function App() {
  return (
      <div className="flexible-content">
          <SideNavigation/>
        <main id="content" className="p-5">
            <Wizard/>
        </main>
      </div>
  );
}

export default App;
