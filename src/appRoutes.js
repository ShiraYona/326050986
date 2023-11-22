import Date from "./date"
import All from "./all"
import { Route, Routes } from "react-router-dom";
import Prasha from "./prasha";
function AppRoutes(){
    return(
        
      <Routes>
      <Route path="/" element={<Date />}></Route>
      <Route path="/all" element={<All />}></Route>
      <Route path="/prasha" element={<Prasha />}></Route>

      </Routes>
    )
}
export default AppRoutes