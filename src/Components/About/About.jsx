import React from "react";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-purple-800 pb-4 ">About Us</h1>
                    <p className="font-normal text-base leading-6 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum eaque, fugiat omnis, alias velit, officiis dolores adipisci eum iusto ipsam qui perferendis voluptatem mollitia totam vitae dolore eius animi illum consectetur minus. Voluptas earum facere sapiente harum illo, qui repudiandae unde modi assumenda voluptatem suscipit accusantium, neque repellat facilis animi a? Quam repudiandae modi, ad quos aperiam doloremque vitae. Ducimus quod placeat quia itaque error assumenda soluta sit reprehenderit mollitia quas pariatur, deleniti, vel obcaecati animi non. Fuga eos odio, rem, in quos accusantium sint harum placeat ea deserunt a, consequatur omnis quas iste provident? Assumenda consequuntur ipsum quia.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-purple-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-white ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eaque tenetur iusto cum fugiat impedit blanditiis, reprehenderit tempora in nesciunt quasi et officiis vero ducimus necessitatibus fuga distinctio. Aut voluptates voluptatibus hic illo ea obcaecati, deleniti qui, quas cumque explicabo nisi? Ea at officia asperiores tempora corrupti voluptate expedita assumenda!</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-white mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-white mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-white mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-white mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
