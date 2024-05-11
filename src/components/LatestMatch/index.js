// Write your code here
import '.index.css'

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
    umpire,
  } = latestMatchDetails

  return (
    <div className="container">
      <div className="first-card">
        <div className="card">
          <h1 className="competing-team">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="text">{venue}</p>
          <p className="text">{result}</p>
        </div>
        <img src={competingTeamLogo} className="logo" />
      </div>
      <hr />

      <p className="innings">First Innings</p>
      <p className="text">{firstInnings}</p>
      <p className="innings">Second Innings</p>
      <p className="text">{secondInnings}</p>
      <p className="innings">Man Of The Match</p>
      <p className="text">{manOfTheMatch}</p>
      <p className="innings">Umpire</p>
      <p className="text">{umpire}</p>
    </div>
  )
}
export default LatestMatch
