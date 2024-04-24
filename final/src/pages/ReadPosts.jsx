/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { supabase } from '../client'
import Card from '../components/Card';

const ReadPosts = (props) => {
    const [crew, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Crewmates')
              .select()
              .order('created_at', { ascending: true })
        setPosts(data);
        }
        
        fetchPosts()
    }, [props]);

    return (
        <div className="ReadPosts">
            <input
                type="text"
                placeholder="Search by title or time"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {
                crew && crew.length > 0 ?
                crew
                  .filter((post) =>
                    post.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    post.time.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  // eslint-disable-next-line no-unused-vars
                  .map((crew,index) => 
                    <Card key={crew.id} name={crew.name} speed={crew.speed} color={crew.color} id={crew.id} time={crew.time} upvotes={crew.upvotes} comment={crew.comment} image={crew.image}/>
                  ) : <h2>{'No Posts Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;