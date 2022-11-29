import React from 'react';

const OurStory = () => {
  return (
    <>
      <div className="container">
        <h1 className="fs-1 text-uppercase text-center py-4">Every idea needs a <b>Medium</b></h1>
      </div>
      <div className="container d-flex">
        <div className="w-75">
          <p className="fs-6">The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.

            We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.</p>
        </div>
        <div className="w-25 d-flex align-items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Blank_globe.svg" alt="" className="ms-auto"/>
        </div>
      </div>
    </>
  );
};

export default OurStory;