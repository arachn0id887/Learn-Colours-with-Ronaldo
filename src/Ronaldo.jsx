import { useState, useEffect } from "react";

function Ronaldo() {
  const [color, setColor] = useState(() => localStorage.getItem("color") || "Select")
  const [img, setImg] = useState(() => localStorage.getItem("img") || "")

  useEffect(() => {localStorage.setItem("img", img)}, [img]);
  useEffect(() => {localStorage.setItem("color", color)}, [color]);

  function handleColorChange(event) {
    setColor(event.target.value)
  }

  useEffect(() => {
    if(color === "Select"){
      document.querySelector("img").style.display = "none"
    } else {
      document.querySelector("img").style.display = "block"
      setImg(`assets/${color}.jpg`)
      localStorage.setItem("img", img)
    }
  }, [color])

  return (
    <>
    <div>
      <h1> Choose your colour:</h1>
      <select value={color} onChange={handleColorChange} >
      {['Select', 'black', 'blue', 'green', 'grey', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'].map((color) => (
        <option key={color}>
         {color}
        </option>
       ))}
     </select>
      <br />
      <img src={img} alt="CR7" />
    </div>
    </>
  )
}

export default Ronaldo;
