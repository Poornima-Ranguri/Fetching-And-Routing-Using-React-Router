import UserInfo from '../UserInfo'
import './index.css'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container" data-testid="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
