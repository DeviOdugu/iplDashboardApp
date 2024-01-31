// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updateData = {
      teamBannerUrl: data.team_banner_url,
    }

    const {teamBannerUrl} = updateData

    const updatedLatestMatchData = {
      latestMatchDetails: data.latest_match_details,
    }

    let {latestMatchDetails} = updatedLatestMatchData

    latestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      result: latestMatchDetails.result,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      umpires: latestMatchDetails.umpires,
    }

    const updateRecentMatchData = {
      recentMatches: data.recent_matches,
    }

    let {recentMatches} = updateRecentMatchData

    recentMatches = recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeamLogo: eachMatch.competing_team_logo,
      competingTeam: eachMatch.competing_team,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      teamMatchData: {
        teamBannerUrl,
        latestMatchDetails,
        recentMatches,
      },
      isLoading: false,
    })
  }

  getBackgroundClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)

    switch (id) {
      case 'RCB':
        return 'rcb'

      case 'KKR':
        return 'kkr'

      case 'KXP':
        return 'kxp'

      case 'CSK':
        return 'csk'

      case 'RR':
        return 'rr'

      case 'MI':
        return 'mi'

      case 'SH':
        return 'srh'

      case 'DC':
        return 'dc'

      default:
        return ''
    }
  }

  render() {
    const {teamMatchData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchData
    const backgroundColors = this.getBackgroundClassName()

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-card ${backgroundColors}`}>
            <img src={teamBannerUrl} alt="team banner" className="banner-url" />
            <p className="lm"> Latest Matches </p>
            <LatestMatch
              key={latestMatchDetails.id}
              latestMatchDetails={latestMatchDetails}
            />
            <ul className="u">
              {recentMatches.map(eachData => (
                <MatchCard key={eachData.id} matchCardDetails={eachData} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
