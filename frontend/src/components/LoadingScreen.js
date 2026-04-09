import React from 'react';

function LoadingScreen() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',backgroundColor:'#0f1f3d',gap:'24px'}}>
      <style>{'.spinner{width:48px;height:48px;border:4px solid rgba(255,255,255,0.15);border-top:4px solid #f5a623;border-radius:50%;animation:spin 0.9s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}'}</style>
      <div style={{fontSize:'2.8rem',fontWeight:'bold',color:'white',fontFamily:'Georgia,serif'}}>
        Times <span style={{color:'#f5a623'}}>Studio</span>
      </div>
      <div style={{fontSize:'0.85rem',color:'#8899aa',letterSpacing:'4px',textTransform:'uppercase'}}>
        T Marin Air Travels
      </div>
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingScreen;