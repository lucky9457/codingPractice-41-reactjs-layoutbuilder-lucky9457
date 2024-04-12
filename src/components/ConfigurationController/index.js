// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const togleContent = event => {
        onToggleShowContent(event.target.value)
      }

      const toggleRight = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      const toggleleftnav = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      return (
        <div className="controllerContainer">
          <h1 className="layoutHeader">Layout</h1>
          <form>
            <div className="divInputCont">
              <input
                checked={showContent}
                onChange={togleContent}
                id="contentCheckbox"
                type="checkbox"
                className="input"
              />
              <label htmlFor="contentCheckbox" className="contentLabel">
                Content
              </label>
            </div>

            <div className="divInputCont">
              <input
                checked={showLeftNavbar}
                onChange={toggleleftnav}
                id="Leftnavbar"
                type="checkbox"
                className="input"
              />
              <label htmlFor="Leftnavbar" className="contentLabel">
                Left Navbar
              </label>
            </div>

            <div className="divInputCont">
              <input
                checked={showRightNavbar}
                onChange={toggleRight}
                id="rightnavbar"
                type="checkbox"
                className="input"
              />
              <label htmlFor="rightnavbar" className="contentLabel">
                Right Navbar
              </label>
            </div>
          </form>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
