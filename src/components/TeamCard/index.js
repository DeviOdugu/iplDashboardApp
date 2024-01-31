// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="card">
        <img
          src={teamImageUrl}
          alt={name}
          height="65px"
          width="55px"
          className="team-image"
        />
        <p className="name"> {name} </p>
      </li>
    </Link>
  )
}

export default TeamCard
