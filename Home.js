import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Home = () => {

    const[blogs, setBlogs] = useState([]);


    

    const getAllBlogs = async () => {
        try {
      
          const { data } = await axios.get("/api/v1/blog/all-blog");
       if (data?.success){
        setBlogs(data?.blogs);
       }
          
        }
        catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        getAllBlogs();
       }, []);

  return (



   

    <>
   <h1 className='text-center my-5'>
    Blogs
   </h1>


   <div className="d-flex flex-wrap">
    acha
            {blogs?.map((p) => (
              // <Link
              //   key={p._id}
              //   to={`/dashboard/admin/products/${p.slug}`}
              //   className="product-link"
              // 
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.description}...</p>
                  {/* <p className="card-text">${p.}</p> */}
                  {/* <button className='btn btn-primary ms-1' onClick={() => navigate(`/product/${p.slug}`)}>More Details</button> */}
                
                </div>
              // </Link>
            ))}
          </div>

    </>
  )
}

export default Home;