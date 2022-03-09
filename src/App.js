import logo from './logo.svg';
import './App.css';

import MyNewComponent from './components/MyNewComponent';
import PersonCard from './components/PersonCard';
import Message from './components/Message';

function App() {
  return (
    <div className='App'>
      <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
      <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown" />
      <PersonCard lastName="Fillmore" firstName="Millard" age={50} hairColor="Brown" />
      <PersonCard lastName="Smith" firstName="Maria" age={62} hairColor="Blonde" />
    </div>
  );
}

export default App;


// {/* <MyNewComponent someText="Hello World!" />
// <MyNewComponent someText="I am reusing this component." />
// <br />
// <div className='App-card'>
//   <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
//   <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown" />
//   <PersonCard lastName="Fillmore" firstName="Millard" age={50} hairColor="Brown" />
//   <PersonCard lastName="Smith" firstName="Maria" age={62} hairColor="Blonde" />
// </div> */}

{/* <MyNewComponent header={ "Header Prop" }>
  <p>This is a child.</p>
  <p>This is another child.</p>
  <p>This is even another child.</p>
</MyNewComponent> */}

{/* <button onClick = { () => alert("This button has been clicked.") }>Click Me!</button> */}

{/* <Message /> */}