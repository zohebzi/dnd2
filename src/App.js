import

const [count, setCount] = useState(0)


function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <h2>Count is {count}</h2>
      <button onClick={() => { setCount(count + 1) }}>CLICK ME</button>

    </div>
  );
}

export default App;
