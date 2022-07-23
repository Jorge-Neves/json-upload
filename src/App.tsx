import React, { FC } from 'react';
import { StateMachineProvider, createStore } from 'little-state-machine';
import Form from './components/Form';

createStore({
  JSONData: null,
});

const App: FC = () => {
  return (
    <StateMachineProvider>
      <div>
        <Form />
      </div>
    </StateMachineProvider>
  );
};

export default App;
