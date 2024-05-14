import React from "react";
import img1 from '../../Data/Img1.jpg'
import img2 from '../../Data/Img2.png'
import img3 from '../../Data/Img3.png'
import img4 from '../../Data/Img4.jpg'
import img5 from '../../Data/img5.jpg'
import img6 from '../../Data/Img6.jpeg'
const Service = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary text-white">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] dark:text-white sm:text-4xl md:text-[40px] text-purple-600">
                What We Offer
              </h2>
              <p className="text-base text-body-color text-white">
              Experience the seamless integration of cutting-edge gesture recognition technology with our intuitive software, empowering you to effortlessly navigate your digital world with natural hand movements
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap mx-8">
        <div class="border border-purple-600 rounded-lg shadow dark:border-purple-700 mx-10 w-[25rem] mt-10 border-4 border-double border-purple-600 rounded-2xl">
        <img class=" w-[25rem] h-[17rem]" src={img1} alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-purple-600 dark:text-white">Precision Gesture Recognition</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Our software employs advanced algorithms to accurately interpret a wide range of hand gestures, ensuring accuracy. 
        <br/><br/>
        </p>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More
        </span>
      </button>
    </div>
        </div>
        <div class="border border-purple-600 rounded-lg shadow dark:border-purple-700 mx-10 w-[25rem] mt-10 border-4 border-double border-purple-600 rounded-2xl">
        <img class="w-[25rem] h-[17rem]" src={img2} alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-purple-600 dark:text-white">Customizable Gesture Library</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tailor the software to your unique preferences and workflow with our customizable gesture library. Create and assign personalised gestures to specific actions or commands.</p>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More
        </span>
      </button>
    </div>
        </div>
        <div class="border border-purple-600 rounded-lg shadow dark:border-purple-700 mx-10 w-[25rem] mt-10 border-4 border-double border-purple-600 rounded-2xl">
        <img class="h-[17rem] w-[25rem]" src={img3} alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-purple-600 dark:text-white">Cross-Platform Compatibility</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Our software seamlessly integrates with desktop computers, laptops, tablets, and even virtual reality headsets, providing a consistent e user experience across all your devices.</p>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More
        </span>
      </button>
    </div>
        </div>
        <div class="border border-purple-600 rounded-lg shadow dark:border-purple-700 mx-10 w-[25rem] mt-10 border-4 border-double border-purple-600 rounded-2xl">
        <img class="h-[17rem] w-[25rem]" src={img4} alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-purple-600 dark:text-white">For Teachers</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">we're excited to revolutionise the classroom experience by empowering teachers with seamless control over presentations without the need to physically interact with smart boards.</p>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More
        </span>
      </button>
    </div>
        </div>

        <div class="border border-purple-600 rounded-lg shadow dark:border-purple-700 mx-10 w-[25rem] mt-10 border-4 border-double border-purple-600 rounded-2xl">
        <img class="h-[17rem] w-[25rem]" src={img5} alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-purple-600 dark:text-white">For Gamers</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Picture yourself seamlessly navigating virtual worlds, executing complex manoeuvres, and interacting with in-game elements—all with simple hand gestures.</p>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More
        </span>
      </button>
    </div>
        </div>
        <div class="border border-purple-600 rounded-lg shadow dark:border-purple-700 mx-10 w-[25rem] mt-10 border-4 border-double border-purple-600 rounded-2xl">
        <img class="h-[17rem] w-[25rem]" src={img6} alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-purple-600 dark:text-white">For individuals with special requirements</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">With our forthcoming version, we're proud to introduce an innovative solution that harnesses the power of facial gestures to cater to the needs of individuals with special requirements. </p>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More
        </span>
      </button>
    </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

// const ServiceCard = ({ icon, title, details }) => {
//   return (
//     <>
//       <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//         <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
//           <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
//             {icon}
//           </div>
//           <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
//             {title}
//           </h4>
//           <p className="text-body-color dark:text-dark-6">{details}</p>
//         </div>
//       </div>
//     </>
//   );
// };
