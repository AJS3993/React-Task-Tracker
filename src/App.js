import Header from './components/Header'
import Tasks from './components/Tasks'

const App = (props)  => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
