import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formuilario from './componentes/Formulario';


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='' element={Formuilario} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
