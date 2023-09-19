import React, { useEffect } from 'react';

function AdComponent() {
  useEffect(() => {
    // Initialize the ad
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9456800622106077"  
        data-ad-slot="3127507359"  
        data-ad-format="auto"
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9456800622106077"
     crossorigin="anonymous"></script>
    </div>
  );
}

export default AdComponent;
