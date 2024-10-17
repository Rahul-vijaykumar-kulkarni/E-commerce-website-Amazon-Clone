import {Swiper , SwiperSlide} from 'swiper/react'
import { Navigation  } from 'swiper/modules';
import { useNavigate , createSearchParams } from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation"

const CarouselCategory = () => {
  const navigate = useNavigate();

  const searchCategory =(category) => {
    navigate({
      pathname:"Search" ,
      search:`${
        createSearchParams({
          category: `${category}`,
          searchTerm: `` 
        })
      }`
    })


  };




  return (
    <div className='bg-white'>
        <div className='text-xl font-semibold p-3'>Shop By Category</div>

      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        
      
      >

        <SwiperSlide onClick={() => searchCategory("Deals")} className='cursor-pointer'>

            <img src={"../images/category_0.jpg"} alt="ct" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Amazon")} className='cursor-pointer'>

<img src={"../images/category_1.jpg"} alt="ct" />
</SwiperSlide>
<SwiperSlide onClick={() => searchCategory("Fashion")} className='cursor-pointer'>

<img src={"../images/category_2.jpg"} alt="ct" />
</SwiperSlide>
<SwiperSlide onClick={() => searchCategory("Computer")} className='cursor-pointer'>

<img src={"../images/category_3.jpg"} alt="ct" />
</SwiperSlide>
<SwiperSlide onClick={() => searchCategory("Home")} className='cursor-pointer'>

<img src={"../images/category_4.jpg"} alt="ct" />
</SwiperSlide>
<SwiperSlide onClick={() => searchCategory("Mobiles")} className='cursor-pointer'>

<img src={"../images/category_5.jpg"} alt="ct" />
</SwiperSlide>

      </Swiper>
    </div>
  )
}

export default CarouselCategory
