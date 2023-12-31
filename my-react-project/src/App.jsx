import './App.css'
import React from 'react'

import Home from './pages/Front-End/Home'
import Bus from './pages/Front-End/Bus'
import Launch from './pages/Front-End/Launch'
import Train from './pages/Front-End/Train'
import Registraion from './pages/Front-End/Registraion'

import Error from './pages/Front-End/Error'

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from './pages/Back-End/Dashbord/Dashbord'

import AddBus from './pages/Back-End/Bus_management/AddBus'
import AddLaunch from './pages/Back-End/Launch_management/AddLaunch';
import Logout from './pages/Back-End/Logout'
import BackendHome from './pages/Back-End/Home'
import BusBookingList from './Back-End-Component/BUS/BusBookingList'
import EditBus from './Back-End-Component/BUS/EditBus';
import ViewBus from './pages/Back-End/Bus_management/Bus/viewBus';
import View_Route from './pages/Back-End/Bus_management/Route/View_Route'
import Protected from "./pages/Back-End/Protected";
import AddOperator from './pages/Back-End/Bus_management/Operator_manage/AddOperator'
import BusSearchResults from './Front-End-Component/Form/BusSearchResults'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Front-End/Login';



export default function App() {
  return (

    <>

      <BrowserRouter>


        <Routes>
          {/*--------------------------------- forntend router -------------------------------------------------------------------*/}

          <Route path="/" element={<Home />} />
          <Route path="/Bus" element={<Bus />} />
          {/* <Route path="/BookingDetails" element={<BookingDetails />}/>
                   </Route> */}
          {/* {location.state?.searchResults && (
            <Route
              path="/search_results"
              element={<BusSearchResults searchResults={location.state.searchResults} />}
            />
          )}
           </Route> */}
           {/* <Route path="/search_results" element={<BusSearchResults searchResults={location.state.searchResults}/>} /> */}
           <Route path="/search_results" element={<BusSearchResults searchResults={'searchResults'} />} />
          <Route path="/Launch" element={<Launch />} />
          <Route path="/Train" element={<Train />} />
          <Route path="/Registraion" element={<Registraion />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="/carousel" element={<Carousel />} /> */}


          {/*--------------------------------- backend router ------------------------------------------------------*/}


          <Route path="/Dashbord" element={<Protected Cmp={Dashbord} />} />
          <Route path="/AddOperator" element={<Protected Cmp={AddOperator} />} />
          <Route path="/BusBookingList" element={<Protected Cmp={AddBus} />} >
            <Route path="/BusBookingList/EditBus/:id" element={<Protected Cmp={EditBus} />} />

          </Route>
          <Route path="/BusBookingList/ViewBus" element={<Protected Cmp={ViewBus} />} />
          <Route path="/BusBookingList/View_Route" element={<Protected Cmp={View_Route} />} />
          <Route path="/LaunchManagment" element={<Protected Cmp={AddLaunch} />} />
          <Route path="/Logout" element={<Protected Cmp={Logout} />} />

          {/* <Route path="/TrainManagement" element={<TrainManagement />} /> */}

        </Routes>


      </BrowserRouter>


    </>
  )
}

