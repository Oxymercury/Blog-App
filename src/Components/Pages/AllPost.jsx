import React from 'react'
import ObjService from '../../appwrite/Config'
import Container from '../Container/Container'
import PostCard from '../PostCard'
import { useState,useEffect } from 'react'
import Loading from '../Loading'
function AllPost() {

    const [Posts,setPosts] = useState([]);
    useEffect(() => {
        // getPost ke andr hum query pass kar sakhte if we want but humne bydefault set kar rakha hai already 
        ObjService.ListPost([]).then((posts) => {
            if(posts){
                setPosts(posts.documents);
            }
        });
    },[])

    
    if (!Posts || Posts.length === 0) {
        return <Loading message="Loading posts..." skeletonCount={3} />;
      }
  return (
    <div className='py-8 w-full min-h-123'>
        <Container>
            <div className='flex flex-wrap'>
                {Posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4' >
                        <PostCard {...post} />
                    </div>          
                ))}
            </div>

        </Container>
    </div>
  ) 
}

export default AllPost