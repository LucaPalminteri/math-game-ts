import './style.css'
//import clock from "./clock"
import Header from "./components/Header"
import MainMath from './components/MainMath'

const app = document.querySelector<HTMLDivElement>('#app')!

app.appendChild(Header())
app.appendChild(MainMath())
