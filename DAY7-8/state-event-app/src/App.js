import logo from './logo.svg'
import './App.css'
import DataBindingTest from './DataBindingTest'
import PrimitiveTypeEvent from './PrimitiveTypeEvent'
import ReferTypeEvent from './ReferTypeEvent'
import Productmanager from './Productmanager'

function App() {
    return (
        <div className="App">
            <DataBindingTest></DataBindingTest>
            <PrimitiveTypeEvent></PrimitiveTypeEvent>
            <ReferTypeEvent></ReferTypeEvent>
            <hr></hr>
            <Productmanager></Productmanager>
        </div>
    )
}

export default App
