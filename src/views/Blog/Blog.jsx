import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import iconheader from "./../../assets/iconheader.png"
import mainimg from "../../assets/aboutimg/mainimg.webp"
import bg1 from "../../assets/bg1.webp"
import bg2 from "../../assets/bg1.webp"
import Footer from '../../components/Footer/Footer';

function Blog() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const newsletterRef = useRef(null);  

  const slideshowImages = [
    bg1,
    bg2
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name || !email || !emailRegex.test(email)) {
      setErrorMessage('Please enter your valid details');
    } else {
      setIsSubscribed(true);
      setErrorMessage('');
    }
  };

  const cardData = [
    { id: 1, image: 'https://cdn.prod.website-files.com/5f53042c847e6f35aac2cc83/5f53042c847e6f502ac2cdd1_Thumb-unde.jpg', description: 'How to Make Carrot Nucchina Unde? A Practical Recipe' },
    { id: 2, image: 'https://cdn.prod.website-files.com/5f53042c847e6f35aac2cc83/5f53042c847e6fd89cc2cd90_recipe-thumb.jpg', description: 'How to Make Beet Ladoos? A Practical Recipe' },
    { id: 3, image: 'https://cdn.prod.website-files.com/5f53042c847e6f35aac2cc83/5f53042c847e6f9420c2cd86_5.jpg', description: 'The Green Revolution, But Was It?' },
    { id: 4, image: 'https://cdn.prod.website-files.com/5f53042c847e6f35aac2cc83/5f53042c847e6fb2e6c2cd64_4.jpg', description: 'Why Everyone Should Be Drinking Desi Milk!' },
    { id: 5, image: 'https://cdn.prod.website-files.com/5f53042c847e6f35aac2cc83/5f53042c847e6fd8e5c2cca3_3.jpg', description: 'The Shape of a Banyan Tree Decides a Whole Lot!' },
    { id: 6, image: 'https://cdn.prod.website-files.com/5f53042c847e6f35aac2cc83/5f53042c847e6fb5cdc2cca4_2.jpg', description: 'A Short Story of BT Cotton Has Ruined Thousands of Farmers' },
    { id: 7, image: 'https://cdn.prod.website-files.com/5f53042c847e6f35aac2cc83/5f53042c847e6fc98cc2cca5_1.jpg', description: 'How Do We Maintain the Freshness of Desi Milk?' }
  ];

  const inputStyle = (isError) => ({
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    maxWidth: '300px',
    margin: '10px 0',
    borderRadius: '8px',
    border: isError ? '2px solid red' : '1px solid #ccc',
    backgroundColor: 'white',
    textAlign: 'center',
  });

  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());


  return (
    <>
      <Navbar cartcount={cart.length}/>

      <div className="blog-container" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#F4F5EC' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img
            src={iconheader}
            alt="Logo"
            style={{ width: '120px', height: 'auto' }}
          />
        </div>

        <h1 style={{ fontWeight: 'bold', fontFamily: 'Times New Roman', color: 'black', fontSize: '25px' }}>
          Green Organic Farm
        </h1>

        <hr style={{ borderColor: 'gray', width: '80%', margin: '20px auto' }} />

        <h2 style={{ fontSize: '15px', fontFamily: 'Times New Roman' }}>Our Worldview</h2>

        <p style={{ fontWeight: 'bold', fontSize: '30px', fontFamily: 'Times New Roman' }}>
          Get inspired and start something
        </p>

        <button
          onClick={() => newsletterRef.current.scrollIntoView({ behavior: 'smooth' })}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Times New Roman',
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            marginTop: '20px',
          }}
        >
          Subscribe to Newsletter
        </button>

        <div style={{ marginTop: '40px' }}>
          <div style={{ position: 'relative', maxWidth: '100%', width: '100%', margin: 'auto' }}>
            <img
              src={slideshowImages[currentImageIndex]}
              alt={`Slide ${currentImageIndex}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                transition: 'opacity 0.5s ease',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        <div className="card-container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '40px',
          justifyItems: 'center',
          padding: '0 20px',
        }}>
          {cardData.map((card) => {
            const label = (() => {
              switch (card.id) {
                case 1:
                  return 'Recipes';
                case 2:
                  return 'Recipes';
                case 3:
                  return 'Farming';
                case 4:
                  return 'Desi Milk';
                case 5:
                  return 'Nature';
                case 6:
                  return 'Farming';
                case 7:
                  return 'Desi Milk';
                default:
                  return '';
              }
            })();

            return (
              <div
                key={card.id}
                className="card"
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                  padding: '0',
                  overflow: 'hidden',
                  height: '380px',
                  position: 'relative',
                  maxWidth: '300px',
                }}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id} Image`}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                  }}
                />

                {label && (
                  <div style={{
                    backgroundColor: 'coral',
                    color: 'black',
                    padding: '3px 8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    position: 'absolute',
                    top: '260px',
                    left: '10px',
                    borderRadius: '6px',
                  }}>
                    {label}
                  </div>
                )}

                <p style={{
                  marginTop: '30px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  fontFamily: 'Times New Roman',
                  padding: '10px',
                }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <div ref={newsletterRef} style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '25px', fontFamily: 'Times New Roman' }}>Our Newsletter</h2>
          <p style={{ fontSize: '18px', fontFamily: 'Times New Roman', maxWidth: '600px', margin: '0 auto' }}>
            Stay up to date with the latest news, articles, and updates from Green Organic Farm. Subscribe to our newsletter for more!
          </p>

          <div style={{ marginTop: '40px' }}>
            <input
              type="text"
              placeholder={name === '' ? 'Enter your name' : 'Enter your name'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle(errorMessage)}
            />
            <div>
              <input
                type="email"
                placeholder={email === '' ? 'Enter your Email id' : 'Enter your Email id'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle(errorMessage)}
              />
            </div>

            {errorMessage && (
              <div style={{ marginTop: '10px', fontSize: '16px', color: 'red' }}>
                {errorMessage}
              </div>
            )}

            <button
              onClick={handleSubscribe}
              style={{
                padding: '12px 25px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                marginTop: '20px',
              }}
            >
              Subscribe
            </button>
          </div>

          {isSubscribed && (
            <div style={{ marginTop: '20px', fontSize: '16px', color: 'green' }}>
              Important insights are sent to your email.
            </div>
          )}
        </div>

        
        <div style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto',
          flexWrap: 'wrap',
        }}>
          <div style={{
            padding: '40px',
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            borderRadius: '10px 0 0 10px',
            color: 'white',
            textAlign: 'center',
            backgroundColor: 'coral',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
            <img
              src={iconheader} 
              alt="Mission Logo"
              style={{
                width: '90px',
                height: '90px',
                marginBottom: '20px',
              }}
            />
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginTop: '10px',
              color: 'black',
              fontFamily: 'Times New Roman',
            }}>
              "Dedicated to fostering health and wellbeing for all, empowering individuals to live their best lives through sustainable and holistic practices."
            </p>
          </div>

        
          <div style={{
            width: '100%',
            maxWidth: '400px',
            padding: '20px',
            textAlign: 'center',
          }}>
            <img
              src={mainimg} 
              alt="Mission Image"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blog;
