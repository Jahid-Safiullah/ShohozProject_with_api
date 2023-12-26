import TopHeder from '../../Front-End-Component/TopHeder';
import Navber from '../../Front-End-Component/Navbar/Navber';
import ban from '../../assets/slider_image_bus.png'
import Marquee from "react-fast-marquee";
import BookingForm from '../../Front-End-Component/Form/BookingForm'
import BeforSeatBookingCarousel from '../../Front-End-Component/Carousel/BeforSeatBookingCarousel'
import Buy_bus_tickets_in_3_easy_steps from '../../Front-End-Component/Body/Buy_bus_tickets_in_3_easy_steps'

import Profile from '../../Front-End-Component/Body/Profile';
import Footer from '../../Front-End-Component/footer/Footer';
import ViewRouteForFront from '../../Front-End-Component/BusRoute/ViewRouteForFront'

export default function Bus() {
  return (
    <div>
      <TopHeder />
      <Navber />
      <div className='mx-3'>
        <Marquee className='bg-success p-2 mt-5  text-light border border-info rounded-pill' behavior="scroll" direction="left" >   সহজ থেকে প্রথমবার টিকেট কাটছেন? ব্যবহার করুন কুপন কোড : <span className="bg-danger rounded-pill p-1"> PROTHOM </span> <span> আর উপভোগ করুন ৳১৫০ পর্যন্ত নিশ্চিত ছাড় ! </span>
        </Marquee>
      </div>

      <div className='container  mt-4 '>
        <div className="row">
          <div className="col-md-6 col-12">
         <div className="row">
         <BookingForm />
         </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
            <img src={ban} alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <p className='p-3' style={{ borderBottom: "5px solid green", marginLeft: "30px", marginRight: "30px" }}></p>
      <div>
        <Buy_bus_tickets_in_3_easy_steps />
      </div>
      <div>
        <BeforSeatBookingCarousel />
      </div>
      <ViewRouteForFront />
      <Profile />
     
      <div><Footer /></div>


    </div>
  )
}
