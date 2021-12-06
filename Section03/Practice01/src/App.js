import Test from "./Test";


function App() {

  let variable = 'qwer';



  return (
    <div>
      <h2>Let's get started!</h2>
      <Test foo={variable}> </Test>
      <Test foo={variable}> </Test>
      <Test foo={variable}> </Test>
      <Test foo={variable}> </Test>
      <Test foo={variable}> </Test>
    </div>
  );
}

export default App;
