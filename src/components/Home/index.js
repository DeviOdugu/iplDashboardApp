// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

const url = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    teamCardData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({
      teamCardData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamCardData, isLoading} = this.state
    return (
      <div className="bg">
        <div className="a">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            height="35px"
            width="30px"
            className="image"
          />
          <h1 className="heading"> IPL Dashboard </h1>
        </div>
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader
                type="Oval"
                color="#ffffff"
                height={50}
                width={50}
                className="loader"
              />
            </div>
          ) : (
            <ul className="u">
              {teamCardData.map(eachItem => (
                <TeamCard key={eachItem.id} teamCardDetails={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
