import React, { useEffect, useState } from 'react'
import ObjService from '../../appwrite/Config'
import Container from '../Container/Container'
import PostCard from '../PostCard'
import { Link } from 'react-router-dom';
import EmptyState from '../EmptyState';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

function Home() {
    const [Posts,setPosts] = useState([]);
    const Status = useSelector((store) => store.auth.Status);

    useEffect(() => {
        ObjService.ListPost().then((posts) => {
            if(posts){
                setPosts(posts.documents);
            }
        })
    },[])

    console.log(Posts);
    if (Posts.length === 0) {
    
            // <div className="w-full py-8 mt-4 text-center">
            //     <Container>
            //         <div className="flex flex-wrap">
            //             <div className="p-2 w-full">
            //                 <Link to='/login' className="text-2xl font-bold hover:text-gray-500 cursor-pointer">
            //                     Login to read posts
            //                 </Link>
            //             </div>
            //         </div>
            //     </Container>
            // </div>
            if(!Status){
                return (<EmptyState />)
            }
            else{
               return ( <Loading  message="Loading posts..." skeletonCount={3}/>)
            }
            
        
    }
    return (
        <div className='w-full py-8 min-h-123'>
            <Container>
                <div className='flex flex-wrap'>
                    {Posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home