import Header from "./components/Header";
import Button from "./components/Button";
import { Image } from "./components/Image";
import Navbar from "./components/Navbar";
// import NavItem from "./components/NavItem";



function App() {
  return (
      <div>
        <Navbar />
        <Header />
        <Button label="Add to Cart" />
        <Button label="Read more..." />
        <Button label="Register" />
        <Button label="Login" />
        <Image />
      </div>
  )
}

// import { Button1, Button2, Button3 } from "./components/Button";


// function App() {
//   return (
//       <div>
//         <Header />
//         <Button1 />
//         <Button2 />
//         <Button3 />
//         <Image />
//       </div>
//   )
// }

export default App;