import React from 'react';

const PrivacyPolicyArea = () => {
  return (
    <section id="privacy-policy_area" className="ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="privacy_content">
              <h2 className="mb-4 fw-bold" style={{ color: '#670D2F'}}> <i className="fa fa-lock me-2"></i> Privacy Policy</h2>

              <div className="privacy_policy_text ">
                <h3>1. What Personal Data We Collect</h3>
                <p>
                  When visitors interact with FashionHive, we may collect data including name, email, IP address,
                  browser details, and device type to ensure better service and security.
                </p>
              </div>

              <div className="privacy_policy_text">
                <h3>2. Media Uploads</h3>
                <p>
                  Avoid uploading images with embedded location data (EXIF GPS). Visitors may extract location
                  information from uploaded media.
                </p>
              </div>

              <div className="privacy_policy_text">
                <h3>3. Cookies</h3>
                <p>
                  We use cookies to enhance your experience. Login, session, and preference cookies help improve
                  usability. These do not store sensitive personal information.
                </p>
              </div>

              <div className="privacy_policy_text">
                <h3>4. Embedded Content</h3>
                <p>
                  Pages may include embedded content (videos, images, articles) from external websites that behave as if
                  you visited them directly, which may collect their own data.
                </p>
              </div>

              <div className="privacy_policy_text">
                <h3>5. How Long We Retain Your Data</h3>
                <p>
                  We retain data indefinitely for user accounts and comments to help with service continuity and
                  moderation. You may delete your data at any time.
                </p>
              </div>

              <div className="privacy_policy_text">
                <h3>6. Your Data Rights</h3>
                <p>
                  You may request an export or deletion of your personal data anytime. This excludes data required for
                  legal, administrative, or security purposes.
                </p>
              </div>

              <div className="mt-5 text-center">
                <a href="/" className="theme-btn-one btn-black-overlay btn_sm">
                  ⬅ Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyArea;
