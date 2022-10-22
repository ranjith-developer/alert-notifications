// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="notifications-container">
    <h1 className="heading">Alert Notifications</h1>
    <Notification>
      <div className="main-container">
        <div className="notification-card">
          <div className="alert-container">
            <AiFillCheckCircle className="success-icon" />
            <h1 className="success">Success</h1>
          </div>
          <p className="text">You can access all the files in the folder</p>
        </div>
        <div className="close">
          <GrFormClose />
        </div>
      </div>
      <div className="main-container">
        <div className="notification-card">
          <div className="alert-container">
            <RiErrorWarningFill className="error-icon" />
            <h1 className="error">Error</h1>
          </div>
          <p className="text">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
        <div className="close">
          <GrFormClose />
        </div>
      </div>
      <div className="main-container">
        <div className="notification-card">
          <div className="alert-container">
            <MdWarning className="warning-icon" />
            <h1 className="warning">Warning</h1>
          </div>
          <p className="text">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
        <div className="close">
          <GrFormClose />
        </div>
      </div>
      <div className="main-container">
        <div className="notification-card">
          <div className="alert-container">
            <MdInfo className="info-icon" />
            <h1 className="info">Info</h1>
          </div>
          <p className="text">Anyone on the internet can view these files</p>
        </div>
        <div className="close">
          <GrFormClose />
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
