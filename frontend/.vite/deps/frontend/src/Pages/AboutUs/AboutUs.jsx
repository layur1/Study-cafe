import React from 'react';
import AboutUs from './AboutUs.css'; // Import your CSS file if needed

const AboutUs = () => {
  return (
    <div className="spread">
      <div className="spread__left">
        hhjhjhj jkjkjkjkdkckxc kjckxkcjkxcxcjxjk kjksjkdksdksdksdjjdksd jsdkjkdjskdjks
      </div>
      <div className="spread__right">
        <div className="title">
          <h1 className="large">5</h1>
          <h1 className="medium">balades</h1>
          <h1 className="large"><span className="tiny">en</span> Vélo</h1>
          <h1 className="small">Bike rides</h1>
        </div>
        <div className="content">
          <div className="fr" lang="fr">
            <h2>Même si Paris reste une des capitales européennes les mieux desservies par les transports en commun, découvrir la ville à vélo est un pur bonheur!</h2>
            <p>Tortor eu vestibulum elit lacinia ac sed pharetra odio egestas, placerat dolor sollicitudin dictum natoque lorem est etiam tristique convallis, at inceptos nisl tempus torquent neque nunc arcu. Aliquet dapibus diam vel morbi fringilla magna cum
              id elit, odio ridiculus nullam primis lacus arcu vivamus suspendisse, curabitur eu nam facilisis consectetur potenti vestibulum ullamcorper.</p>
          </div>
          <div className="en" lang="en">
            <h2>Even if Paris stays one of the European capitals best served by public transport, discovering the city by bike is a pure pleasure!</h2>
            <p>Tortor eu vestibulum elit lacinia ac sed pharetra odio egestas, placerat dolor sollicitudin dictum natoque lorem est etiam tristique convallis, at inceptos nisl tempus torquent neque nunc arcu. Aliquet dapibus diam vel morbi fringilla magna cum
              id elit, odio ridiculus nullam primis lacus arcu vivamus suspendisse, curabitur eu nam facilisis consectetur potenti vestibulum ullamcorper.</p>
          </div>
        </div>
        <div className="spread__page-bottom">
          <i className="fas fa-bicycle fa-4x"></i>
          <div className="num">77</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
