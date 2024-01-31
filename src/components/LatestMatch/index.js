// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-card">
      <div className="ct">
        <p className="compete"> {competingTeam} </p>
        <p className="date"> {date} </p>
        <p className="venue"> {venue} </p>
        <p className="result"> {result} </p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="ctl"
        />
      </div>
      <div>
        <h1 className="finnings"> First Innings </h1>
        <p className="finn"> {firstInnings} </p>
        <h1 className="sinnings"> Second Innings </h1>
        <p className="sinn"> {secondInnings} </p>
        <h1 className="motm"> Man Of The Match </h1>
        <p className="mtm"> {manOfTheMatch} </p>
        <h1 className="umpi"> Umpires </h1>
        <p className="ump"> {umpires} </p>
      </div>
    </div>
  )
}

export default LatestMatch
