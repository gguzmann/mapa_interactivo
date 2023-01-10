import { Map } from "./components/map/Map"
import { Points } from "./components/panels/Points"
import { Tools } from "./components/panels/Tools"
import { StoreProvider } from "./context/storeContext"

function App() {
  return (
    <StoreProvider>
      <Points/>
      <Map/>
      <Tools/>
    </StoreProvider>
  )
}

export default App
