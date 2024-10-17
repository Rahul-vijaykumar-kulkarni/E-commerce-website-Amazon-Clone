import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS
import Carousel from "./Carousel";
import Homepagecard from "./Homepagecard";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Set to 2 seconds for demo
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-amazonclone-background">
        {/* Carousel skeleton */}
        {loading ? (
          <Skeleton height={500} baseColor="#d1d1d1" highlightColor="#a0a0a0" />
        ) : (
          <Carousel />
        )}

        {/* Cards with image + text skeleton */}
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {loading ? (
            Array(8)
              .fill()
              .map((_, i) => (
                <div key={i} className="m-3">
                  <Skeleton
                    height={200}
                    width="100%"
                    baseColor="#d1d1d1"
                    highlightColor="#a0a0a0"
                    style={{ marginBottom: "10px" }}
                  />
                  <Skeleton
                    width="60%"
                    height={20}
                    baseColor="#d1d1d1"
                    highlightColor="#a0a0a0"
                    style={{ marginBottom: "6px" }}
                  />
                  <Skeleton
                    width="40%"
                    height={20}
                    baseColor="#d1d1d1"
                    highlightColor="#a0a0a0"
                  />
                </div>
              ))
          ) : (
            <>
              <Homepagecard
                title={"We have a surprise"}
                img={"../images/home_grid_1.jpg"}
                link={"see t&c"}
              />
              <Homepagecard
                title={"Hello world"}
                img={"../images/home_grid_2.jpg"}
                link={"see t&c"}
              />
              <Homepagecard
                title={"We bid a surprise"}
                img={"../images/home_grid_3.jpg"}
                link={"see t&c"}
              />
              <Homepagecard
                title={"We have a gift"}
                img={"../images/home_grid_4.jpg"}
                link={"see t&c"}
              />
              <Homepagecard
                title={"Surprise"}
                img={"../images/home_grid_5.jpg"}
                link={"see t&c"}
              />
              <Homepagecard
                title={"We have a special gift"}
                img={"../images/home_grid_6.jpg"}
                link={"see t&c"}
              />
              <Homepagecard
                title={"Have a surprise"}
                img={"../images/home_grid_7.jpg"}
                link={"see t&c"}
              />
              <Homepagecard
                title={"Mega Offer"}
                img={"../images/home_grid_8.jpg"}
                link={"see t&c"}
              />
            </>
          )}

          {/* Banner image skeleton */}
          <div className="m-3 pt-8">
            {loading ? (
              <Skeleton
                height={300}
                baseColor="#d1d1d1"
                highlightColor="#a0a0a0"
              />
            ) : (
              <img
                className="xl:hidden pt-8"
                src={"../images/banner_image_2.jpg"}
              />
            )}
          </div>
        </div>

        {/* Product Carousel skeleton */}
        {loading ? (
          <Skeleton height={300} baseColor="#d1d1d1" highlightColor="#a0a0a0" />
        ) : (
          <CarouselProduct />
        )}

        {/* Category Carousel skeleton */}
        {loading ? (
          <Skeleton height={300} baseColor="#d1d1d1" highlightColor="#a0a0a0" />
        ) : (
          <CarouselCategory />
        )}

        {/* Bottom banner skeleton */}
        <div className="h-[200px]">
          {loading ? (
            <Skeleton
              height={200}
              baseColor="#d1d1d1"
              highlightColor="#a0a0a0"
            />
          ) : (
            <img
              className="h-[100%] m-auto"
              src={"../images/banner_image.jpg"}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
