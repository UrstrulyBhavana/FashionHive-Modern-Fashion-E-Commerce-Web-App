import React from 'react';

const Setting = () => {
    return (
        <div className="vendors_settings">
            <h4>Settings</h4>
            <div className="row">
                <div className="col-lg-6">
                    <div className="setings_boxed">
                        <h3>Notification Preferences</h3>
                        <form>
                            <input type="radio" id="desktop_notifications" name="notifications" defaultChecked />
                            <label htmlFor="desktop_notifications">Allow Desktop Notifications</label><br />
                            <input type="radio" id="email_notifications" name="notifications" />
                            <label htmlFor="email_notifications">Enable Email Notifications</label><br />
                            <input type="radio" id="activity_alerts" name="notifications" />
                            <label htmlFor="activity_alerts">Alert me for my own activity</label><br />
                            <input type="radio" id="dnd_mode" name="notifications" />
                            <label htmlFor="dnd_mode">Do Not Disturb</label>
                        </form>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="setings_boxed">
                        <h3>Deactivate Account</h3>
                        <form>
                            <input type="radio" id="privacy_concern" name="deactivate" defaultChecked />
                            <label htmlFor="privacy_concern">I have a privacy concern</label><br />
                            <input type="radio" id="temporary" name="deactivate" />
                            <label htmlFor="temporary">This is temporary</label><br />
                            <input type="radio" id="deactivate_other" name="deactivate" />
                            <label htmlFor="deactivate_other">Other</label>
                        </form>
                        <button className="theme-btn-one btn-black-overlay btn_sm">Deactivate Account</button>
                    </div>
                </div>

                <div className="col-lg-12 mt-3">
                    <div className="setings_boxed">
                        <h3>Delete Account Permanently</h3>
                        <form>
                            <input type="radio" id="not_useful" name="delete" defaultChecked />
                            <label htmlFor="not_useful">No longer useful</label><br />
                            <input type="radio" id="switch_account" name="delete" />
                            <label htmlFor="switch_account">Switching to another account</label><br />
                            <input type="radio" id="delete_other" name="delete" />
                            <label htmlFor="delete_other">Other</label>
                        </form>
                        <button className="theme-btn-one btn-black-overlay btn_sm">Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;

