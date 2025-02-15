import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';



function Blog() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slideshowImages = [
    'src/assets/bg1.webp',
    'src/assets/bg2.webp',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = () => {
    if (!name || !email) {
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
    width: '300px',
    margin: '10px 0',
    borderRadius: '8px',
    border: isError ? '2px solid red' : '1px solid #ccc',
    backgroundColor: 'white',
    textAlign: 'center',
  });

  return (
    <>
      <Navbar />

      <div className="blog-container" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#F4F5EC' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img
            src="src/assets/iconheader.png"
            alt="Logo"
            style={{ width: '120px', height: 'auto' }}
          />
        </div>

        <h1 style={{
          fontWeight: 'bold',
          fontFamily: 'Times New Roman',
          color: 'black',
          fontSize: '25px',
        }}>
          Green Organic Farm
        </h1>

        <hr style={{ borderColor: 'gray', width: '80%', margin: '20px auto' }} />

        <h2 style={{ fontSize: '15px', fontFamily: 'Times New Roman' }}>Our Worldview</h2>

        <p style={{ fontWeight: 'bold', fontSize: '30px', fontFamily: 'Times New Roman' }}>
          Get inspired and start something
        </p>

        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
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
            marginTop: '20px'
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
          gridTemplateColumns: 'repeat(3, 1fr)',
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
                  width: '350px',
                  textAlign: 'center',
                  padding: '0',
                  overflow: 'hidden',
                  height: '380px',
                  margin: '10px',
                  position: 'relative'
                }}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id} Image`}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
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

        <div style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '25px', fontFamily: 'Times New Roman' }}>Our Newsletter</h2>
          <p style={{ fontSize: '18px', fontFamily: 'Times New Roman', maxWidth: '600px', margin: '0 auto' }}>
            Stay up to date with the latest news, articles, and updates from Green Organic Farm. Subscribe to our newsletter for more!
          </p>

          <div style={{ marginTop: '40px' }}>
            <input
              type="text"
              placeholder={name === '' ? 'Please enter your details' : 'Enter your name'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle(errorMessage)}
            />
            <div>
              <input
                type="email"
                placeholder={email === '' ? 'Please enter your details' : 'Enter your email'}
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
                marginTop: '20px'
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

          {/* Mission Section with Coral Background on Left Side */}
          <div style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '400px', // Increased height
          }}>
            <div style={{
              
              padding: '40px',
              width: '50%',
              height:'300px',
              borderRadius: '10px 0 0 10px',
              color: 'white',
              textAlign: 'left',
            }}>
              <img
                src="src/assets/iconheader.png" // Path to your logo
                alt="Mission Logo"
                style={{
                  width: '90px',
                  height: '90px',
                  marginLeft: '170px', // Removed margin from left side
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
              width: '50%',
              padding: '0 20px',
              marginLeft: '5px', // Giving a small left margin
              textAlign: 'right', // Aligning to the right side
            }}>
              <img
                src="src/assets/aboutimg/mainimg.webp" // Path to your image
                alt="Mission Image"
                style={{
                  width: '350px',
                  height: '350px',
                  borderRadius: '8px',
                  marginTop: '20px', // Optional margin top for better spacing
                  marginLeft: '100px', // Adding 5px margin to the left side of the image
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
