import { useState, useEffect, useRef } from 'react';
import './App.css';

// Hàm User: Nơi chứa thông tin và chữ ký của người gửi
function User() {
  return (
    <div className="user-signature">
      <p>From Huy ❤️</p>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  // Dùng useRef để quản lý thẻ audio phát nhạc
  const audioRef = useRef(null); 

  useEffect(() => {
    if (isOpen) {
      // Khi mở hộp, đợi 300ms rồi hiện nội dung và bật nhạc
      setTimeout(() => setShowContent(true), 300);
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      // Khi đóng hộp thì tắt nhạc và reset lại từ đầu
      setShowContent(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  return (
    <div className="container">
      {/* Hiệu ứng nền trái tim bay */}
      <div className="floating-hearts">
        <span style={{ left: '10%', animationDuration: '8s' }}>❤️</span>
        <span style={{ left: '30%', animationDuration: '12s', animationDelay: '2s' }}>💖</span>
        <span style={{ left: '50%', animationDuration: '10s', animationDelay: '4s' }}>💕</span>
        <span style={{ left: '70%', animationDuration: '14s', animationDelay: '1s' }}>💗</span>
        <span style={{ left: '90%', animationDuration: '9s', animationDelay: '3s' }}>💓</span>
      </div>

      {/* Thẻ audio ẩn chứa nhạc nền */}
      <audio 
        ref={audioRef} 
        src="/bai-hat-cua-min.mp3" 
        loop 
      />

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
          {/* Ảnh kỷ niệm với class hiệu ứng chuyển đổi mới */}
          <img 
            src="https://i.pinimg.com/1200x/8f/ba/b3/8fbab3447bd89daa0d4ef0930b12d3b4.jpg" 
            alt="Kỷ niệm của chúng mình" 
            className={`memory-image ${showContent ? 'zoom-rotate-in' : ''}`}
          />
          
          <div className={`message-box ${showContent ? 'slide-up' : ''}`}>
            <h1>Chúc Mừng Sinh Nhật Minnn! 🎉</h1>
            <p>
              Chúc Minnn tuổi mới luôn xinh đẹp, rạng rỡ và hạnh phúc. Mong rằng mọi điều tốt đẹp nhất sẽ đến với Minnn trong năm nay và mãi mãi về sau. Dù mọi chuyện có ra sao mong Minnn hãy luôn tươi cười và lạc quan nhé!
            </p>
            
            {/* Gọi hàm User đã tạo ở trên vào đây */}
            <User />
            
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