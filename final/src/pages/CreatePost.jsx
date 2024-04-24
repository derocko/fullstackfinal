import { supabase } from '../client'
import { useState } from 'react';

const CreatePost = () => {
    const [crew, setPost] = useState({name: "", speed: "", color: "", time: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const MakePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Crewmates')
        .insert({name: crew.name, speed: crew.speed, image: crew.image, time: new Date()})
        .select();
    
        window.location = "/";
    
    }

    return (
        <div>
            <h1>Create Your Post</h1>
            <form>
                <label htmlFor="name">Title</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="speed">Content</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="image">Link To Image</label><br />
                <input type="text" id="image" name="image" onChange={handleChange} /><br />
                <br/>
                <input type="submit" value="Submit" onClick={MakePost} />
            </form>
        </div>
    )
}


export default CreatePost