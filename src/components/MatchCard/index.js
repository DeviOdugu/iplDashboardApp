// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = matchCardDetails
  const statusResult = matchStatus === 'Won' ? 'st' : 'status'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        height="100px"
        width="100px"
      />
      <p className="cT"> {competingTeam} </p>
      <p className="res"> {result} </p>
      <p className={statusResult}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
