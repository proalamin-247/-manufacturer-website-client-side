import React from 'react';

const Banner = () => {
    return (
       <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src="https://i.ibb.co/Csp2gg6/banner1.jpg" class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://i.ibb.co/L5LSDpt/banner2.jpg" class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
            </div>
       </div>
    );
};

export default Banner;