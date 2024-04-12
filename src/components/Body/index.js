// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="MainBodyContainer">
          {showLeftNavbar && (
            <div className="leftnav">
              <h1 className="head">Left Navbar Menu</h1>
              <ul className="ulC">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="contentContainer">
              <h1 className="head">content</h1>
              <p>
                Lorem ipsum dolor sit eiusmod tempor amet, consectetur
                adipiscing elit, sed do Incididunt ut labore et Ut enim ad minim
                veniam. dolore magna aliqua.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="rightNavbar">
              <h1 className="head headrightnav">Right Navbar</h1>
              <div className="adContainer">
                <p>Ad 1</p>
              </div>
              <div className="adContainer">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
