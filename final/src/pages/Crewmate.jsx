import { useLocation } from 'react-router-dom'
import { supabase } from '../client';
import { useState} from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom'


const Crewmate = () => {
    const location = useLocation();
    const {from} = location.state
    var count = from.upvotes
    var comments = from.comment
    const [post, setPost] = useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateVotes = async (event) => {
        event.preventDefault();
        count = count + 1
        console.log(count)
        await supabase
          .from('Crewmates')
          .update({upvotes:count})
          .eq('id', from.id);
      
        window.location = "/read";
      }

      const updateComment = async (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-useless-escape
        comments = comments.concat("\n-")
        comments = comments.concat(post.comment)
        console.log(comments)
        await supabase
          .from('Crewmates')
          .update({comment:comments})
          .eq('id', from.id);
      
        window.location = "/read";
      }

      function renderWithNewLines(text) {
        return (
          <div>
            {text.split('\n').map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))}
          </div>
        );
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
            <h1>{from.name}</h1>
            <h3>{from.time}</h3>
            <img src={from.image} height={250} width={250}></img>
            <h3>Upvotes: {from.upvotes}</h3>
            <h2>{from.speed}</h2>
            <button onClick={updateVotes}>Add Upvote</button>
            <Link to='/edit' state={{from: from}}><button>Edit Post</button></Link>
            <button className="deleteButton" onClick={deletePost}>Delete</button>
            <h2>Comment Section</h2>
            <h3>{renderWithNewLines(from.comment)}</h3>
            <form>
                <h1></h1>
                <input type="text" id="comment" name="comment" value={post.comment} onChange={handleChange} /><br />
                <input type="submit" value="Post Comment" onClick={updateComment} />
            </form>
        </div>
    );
};

export default Crewmate;