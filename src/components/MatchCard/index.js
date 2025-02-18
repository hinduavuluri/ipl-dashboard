// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchData

  const classNameStatus = matchStatus => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }

  return (
    <div className="container">
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${classNameStatus}`}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
