import React from "react";

const index = () => {
  return (
    <div class="ui container center aligned">
      <div
        className="ui red centered raised card"
        style={{ padding: "20px", marginTop: "5%" }}
      >
        <div className="content">
          <div className="header">Sign Up!</div>
        </div>
        <div className="content">
          <form className="ui form center aligned">
            <div className="field">
              <label>Name</label>
              <div className="two fields">
                <div className="field">
                  <input placeholder="First Name" inputMode="text" />
                </div>
                <div className="field">
                  <input placeholder="Last Name" inputMode="text" />
                </div>
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <input placeholder="Email" inputMode="email" />
            </div>
            <div className="field">
              <label>Moblie No.</label>
              <input placeholder="Mobile No." inputMode="numeric" />
            </div>
            <div className="field">
              <label>Password</label>
              <input placeholder="Password" inputMode="text" />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input placeholder="Confirm Password" inputMode="text" />
            </div>
            <div class="ui primary button" tabindex="0">
              Sign Up
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
