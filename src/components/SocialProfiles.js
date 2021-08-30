import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = (props) => {
  const { image, link } = props.socialProfile;
  return (
    <span style={{ display: 'inline-block' }}>
      <a href={link}>
        <img
          src={image}
          alt="social_profile"
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    <h3>Connect with me</h3>
    <div>
      {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => (
        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
      ))}
    </div>
  </div>
);

export default SocialProfiles;
