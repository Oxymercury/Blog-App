import React from 'react'
import { useState,useEffect } from 'react'
import PostForm from '../post-form/PostForm'
import Container from '../Container/Container'
import ObjService from '../../appwrite/Config'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../LoaderEditPost'

function EditPost() {
    const [Posts,setPosts] = useState(null)
    const {slug} = useParams();
    const Navigate = useNavigate();

    useEffect(() => {
        if(slug){
            ObjService.GetPost(slug).then((post) => {
                if(post){
                    setPosts(post);
                }
            })
        }
        else{
            Navigate('/');
        }
    },[slug,Navigate])
    return Posts ? (
        <div className='py-8'>
            <Container>
                <PostForm post={Posts} />
            </Container>
        </div>
      ) : <Loader />
}

export default EditPost