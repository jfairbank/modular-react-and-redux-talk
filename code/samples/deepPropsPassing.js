{
  name: 'Jeremy',
  onChangeName: (name) => {
    updateSomeGlobalState({ name });
  }
}

const App = ({ name, onChangeName }) => (
  <AppDashboard name={name} onChangeName={onChangeName}/>
);

const AppDashboard = ({ name, onChangeName }) => (
  <Dashboard>
    <Panel>
      <User name={name} onChangeName={onChangeName}/>
    </Panel>
  </Dashboard>
);

const User = ({ name, onChangeName }) => (
  <NameTag name={name} onChange={onChangeName}/>
);
