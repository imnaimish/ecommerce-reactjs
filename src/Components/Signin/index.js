import React from 'react'

const index = () => {
    return (
        <div class="ui container center aligned">
      <div
        className="ui red centered raised card"
        style={{ padding: "20px", marginTop: "10%" }}
      >
        <div className="content">
          <div className="header">Sign In!</div>
        </div>
        <div className="content">
          <form className="ui form center aligned">
            <div className="field">
              <label>Email</label>
              <input placeholder="Email" inputMode="email" />
            </div>
            <div className="field">
              <label>Password</label>
              <input placeholder="Password" inputMode="text" />
            </div>
            <div class="ui primary button" tabindex="0">
              Sign In
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default index
