import Login from './pages/Login'
import Register from './pages/Register'
import UserBookings from './pages/CustomerDashboard/Bookings'
import ServiceDetails from './pages/ServiceDetails'
import UserFavourites from './pages/CustomerDashboard/Favourites'
import { BookingIndex } from './pages/Bookings/BookingIndex'
import BookingConfirmation from './pages/Bookings/BookingConfirmation'
import BookingPayment from './pages/Bookings/BookingPayment'
import BookingPersonalInfo from './pages/Bookings/BookingPersonalInfo'
import BookingTime from './pages/Bookings/BookingTime'
import HomePage from './pages/HomePage'
import About from './pages/About'
import CustomerDashboard from './pages/CustomerDashboard/Dashboard'
import Consultants from './pages/Consultants'
import AiAgents from './pages/AiAgents'
import Partners from './pages/Partners'
import CustomerReviews from './pages/CustomerDashboard/Reviews'
import NotFound from './pages/404'
import ConsultantDashboard from './pages/ConsultantDashboard/Dashboard'
import ConsultantBookings from './pages/ConsultantDashboard/Bookings'
import ConsultantPayouts from './pages/ConsultantDashboard/Payout'
import ConsultantHolidays from './pages/ConsultantDashboard/Holidays'
import ConsultantReviews from './pages/ConsultantDashboard/Reviews'
import ConsultantEarnings from './pages/ConsultantDashboard/Earnings'
import ConsultantSettings from './pages/ConsultantDashboard/Settings'

import BookingDetails from './pages/ConsultantDashboard/Booking-Details'




const routes =  

  [    
    {
      path:"/consultant/dashboard",
      element:<ConsultantDashboard/>
    },

    {
      path:"/consultant/bookings",
      element:<ConsultantBookings/>
    },
    {
      path:"/consultant/payouts",
      element:<ConsultantPayouts/>
    },
    {
      path:"/consultant/holidays",
      element:<ConsultantHolidays/>
    },
    {
      path:"/consultant/reviews",
      element:<ConsultantReviews/>
    },
    {
      path:"/consultant/earnings",
      element:<ConsultantEarnings/>
    },
    
    {
      path:"/consultant/settings",
      element:<ConsultantSettings/>
    },
    {
      path:"/consultant/booking-details",
      element:<BookingDetails/>
    },


    






    {
      path:"*",
      element:<NotFound/>
    },
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/consultants",
      element:<Consultants/>
    },
    {
      path:"/ai-agents",
      element:<AiAgents/>
    },
    {
      path:"/partners",
      element: <Partners/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/register",
      element: <Register/>
    },
    {
      path:"service-details",
      element: <ServiceDetails/>
    },
    {
      path:"/user/dashboard",
      element:<CustomerDashboard/>
    },
    {
      path:"/user/bookings",
      element:<UserBookings/>
    },
    {
      path:"/user/favourites",
      element:<UserFavourites/>
    },
    {
      path:"/user/customer-reviews",
      element:<CustomerReviews/>
    },
    {
      path:"/booking/location",
      element:<BookingIndex/>
    },
    {
      path:"/booking/time",
      element:<BookingTime/>
    },
    {
      path:"/booking/personalInfo",
      element:<BookingPersonalInfo/>
    },
    {
      path:"/booking/payment",
      element:<BookingPayment/>
    },
    {
      path:"/booking/confirmation",
      element:<BookingConfirmation/>
    },
  ]

export default routes