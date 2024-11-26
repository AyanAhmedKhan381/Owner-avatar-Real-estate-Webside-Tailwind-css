import Image from "next/image";
import { BiCalendar, BiMessage } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  blog: {
    id: number;
    date: string;
    comment: string;
    title: string;
    shortDescription: string;
    image: string;
  };
}

const Blog_Card = ({ blog }: Props) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          height={300}
          width={300}
          className="w-full h-full"
        />

        <div className="p-6 ">
           <div className="flex items-center justify-between">

            {/* 1 Calendar icon */}
             <div className="flex items-center space-x-2">
                <BiCalendar className="text-rose-500 "/>
                <span className="text-sm text-gray-700">{blog.date}</span>
             </div>

              {/* 2 Calendar icon */}
             <div className="flex items-center space-x-2">
                <BiMessage className="text-rose-500 "/>
                <span className="text-sm text-gray-700">{blog.comment}</span>
             </div>
           </div>

 {/*------ title  & short description -------*/}
         <div>
         <h1 className="mt-6 font-bold hover:underline cursor-pointer mb-2 text-lg text-gray-700">
            {blog.title}
         </h1>

         <p className="text-gray-500 text-base">
            {blog.shortDescription}
         </p>
         </div>
         
         <div className="mt-4 flex items-center space-x-2 hover:text-red-500 cursor-pointer animate-pulse">
            <span className="font-bold">Read More</span>
             <BsArrowRight/>
         </div>



        </div>

      </div>

    </div>
  );
};

export default Blog_Card;
