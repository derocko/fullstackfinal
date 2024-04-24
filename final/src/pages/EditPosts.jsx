/* eslint-disable react/prop-types */
//import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../client';
import { useLocation } from 'react-router-dom'


const EditPost = ({props}) => {
    //const {id} = useParams();
    const [post, setPost] = useState([]);
    const location = useLocation()
    const {from} = location.state
    useEffect(() => {
        const fetchPosts = async () => {
            let {data} = await supabase
              .from('Crewmates')
              .select()
              .eq('id', '274')
        setPost(data);
        }
        
        fetchPosts()

    }, [props]);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crewmates')
          .update({ name: post.name, speed: post.speed,  image: post.image})
          .eq('id', from);
      
        window.location = "/";
      }

    const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crewmates')
          .delete()
          .eq('id', from); 
        window.location = "/";
      }


    return (
        <div> 
            <form>
                <h1></h1>
                <label htmlFor="name">Title</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="speed">Content</label><br />
                <input type="text" id="speed" name="speed" value={post.speed} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="image">Link To Image</label><br />
                <input type="text" id="image" name="image" value={post.image} onChange={handleChange} /><br />
                <br/>
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost