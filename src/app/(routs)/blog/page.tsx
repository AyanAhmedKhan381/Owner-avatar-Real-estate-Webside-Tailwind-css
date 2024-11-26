

import SectionHeading from '@/components/Helper/SectionHeading'
import Blog_Card from '@/components/Home/Blog_Section/Blog_Card'
import { blogs } from '@/data/data'
import React from 'react'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-black'>
       <div className='w-[80%] mx-auto mt-20'>
        <SectionHeading heading='Check Our Blogs' subHeading='Latest insights and updates'
        className='text-white'/>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center'>
           {
             blogs.map((blog)=> {
                return <div key={blog.id}>
                     {/* BlogCard */}
                       <Blog_Card blog={blog}/>
                </div>
             })
           }
        </div>

       </div>
    </div>
  )
}

export default Blog
