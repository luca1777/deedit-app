import React, { useEffect, useState } from 'react';

const WelcomeAnimation = ({ showAnimation }) => {
  const [shouldRender, setShouldRender] = useState(showAnimation);

  useEffect(() => {
    if (showAnimation) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [showAnimation]);

  return shouldRender ? (
    <div
      className={`modal flex w-full h-screen bg-black z-50 justify-center items-center ${showAnimation ? 'animate-fadeIn' : 'animate-fadeOut'}`}
      onAnimationEnd={() => !showAnimation && setShouldRender(false)}
    >
      <div className="w-full">
        <h1 className="text-white font-black max-font-120px text-center font-inter mx-8 leading-none">
          Provocarea este să îndrăznești!
        </h1>
      </div>
    </div>
  ) : null;
};

export default WelcomeAnimation;
