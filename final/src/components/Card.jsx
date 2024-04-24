/* eslint-disable react/prop-types */
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to='/edit' state={{from: props.id}}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to='/crewmate' state={{from: props}}><h1>{props.name}</h1></Link>
          <h3>Upvotes: {props.upvotes}</h3>
          <h3 className="color">{props.time}</h3>
      </div>
  );
};

export default Card;