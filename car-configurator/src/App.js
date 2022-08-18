import React, { useState } from 'react';
import ConfiguratorStarterPage from './Components/ConfiguratorStarterPage';
import ModalWindow from './Components/ModalWindow/ModalWindow';

export default function App() {
  const [modalWindowOpened, setModalWindowOpened] = useState(false);

  return (
    <div>
      <ConfiguratorStarterPage
        openModalWindow={() => setModalWindowOpened(true)}
      />
      {modalWindowOpened && (
        <ModalWindow closeModalWindow={() => setModalWindowOpened(false)} />
      )}
    </div>
  );
}
