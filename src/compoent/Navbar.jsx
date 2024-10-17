import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import Search from "./Search"
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'




const Navbar = () => {
const cart = useSelector((state) => state.cart.productsNumber)

  return (
    <header className='min-w-[1000px] '>
        <div  className='flex  bg-amazonclone text-white h-[60px]' >
            {/* left div */}
        <div className='flex items-center m-4' >
            <Link to={"/"}>
            <img className='h-[35px] w-[100px]' src={"../images/amazon.png"} alt="" />
            </Link>
           
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'> Deliver to</div>
                <div className='text-sm xl:text-base font-bold'>India</div>
            </div>
        
        </div>
        {/* midd div */}
        <div className='flex  grow relative items-center'>
            <Search/>
        </div>
        {/* right div */}
        <div className='flex items-center m-4'>
        <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'> Hello,Sign in</div>
                <div className='text-sm xl:text-base font-bold'>Accounts & list</div>
            </div>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'> Return</div>
                <div className='text-sm xl:text-base font-bold'>Orders</div>
            </div>
            <Link to={"/Checkout"}>
            <div className='flex pr-3 pl-3'>
                <ShoppingCartIcon className="h-[48px]"/>
                <div className="relative ">
                    <div className="absolute right-[9px] font-bold m-2 text-amazonclone-yellow">
                            {cart}
                    </div>
                </div>
                <div className="mt-7 text-xs xl:text-sm font-bold">
                    cart
                </div>
            </div>
            </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 ">
    <div>Todays Deal</div>
    <div>Customer Service</div>
    <div>Gift Card</div>
    <div>Sell</div>

      </div>
    </header>
  )
}

export default Navbar
