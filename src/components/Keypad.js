// Code Keypad Component Here

function Keypad() {
    function change() {
        console.log("Entering password...");
        
    }
  return (
    <div>
      <input type="password" onChange={change} />
    </div>
  );
}

export default Keypad;
