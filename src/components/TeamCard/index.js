// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, imgUrl} = teamDetails

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div className="team-card">
          <img src={imgUrl} className="image" alt={name} />
          <p className="name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
