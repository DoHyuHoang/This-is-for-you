import { useState, useEffect } from 'react';
// ĐÂY LÀ CÁCH BẠN GÁN CSS VÀO JAVASCRIPT TRONG REACT:
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowContent(true), 300);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <div className="container">
      {!isOpen ? (
        <div className="card closed" onClick={() => setIsOpen(true)}>
          <div className="gift-box">
            <h1>🎁</h1>
            <h2>Bấm vào hộp quà này nhé!</h2>
            <p>(Có một bất ngờ dành cho Minnn ạ...)</p>
          </div>
        </div>
      ) : (
        <div className="card open">
          {/* Ảnh kỷ niệm */}
          <img 
            src="https://i.pinimg.com/1200x/8f/ba/b3/8fbab3447bd89daa0d4ef0930b12d3b4.jpg" 
            alt="Kỷ niệm của chúng mình" 
            className={`memory-image ${showContent ? 'fade-in' : ''}`}
          />
          
          <div className={`message-box ${showContent ? 'slide-up' : ''}`}>
            {/* BẠN CÓ THỂ THAY ĐỔI ĐOẠN TEXT LỜI CHÚC Ở NGAY BÊN DƯỚI NÀY: */}
            <h1>Chúc Mừng Sinh Nhật Minnn! 🎉</h1>
            <p>
              Chúc Minnn tuổi mới luôn xinh đẹp, rạng rỡ và hạnh phúc. Mong rằng mọi điều tốt đẹp nhất sẽ đến với Minnn trong năm nay và mãi mãi về sau.
            </p>
            
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Đóng lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;