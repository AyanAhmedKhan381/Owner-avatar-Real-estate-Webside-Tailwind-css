

import SectionHeading from '@/components/Helper/SectionHeading'
import { blogs } from '@/data/data'
import React from 'react'
import Blog_Card from './Blog_Card'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
       <div className='w-[80%] mx-auto'>
        <SectionHeading heading='Check Our Blogs' subHeading='Latest insights and updates'/>

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
