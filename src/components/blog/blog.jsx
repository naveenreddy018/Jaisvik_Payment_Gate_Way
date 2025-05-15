import React from 'react';
import video from '../../assets/blogvideo.mp4';
import assets from '../../assets/assests';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Jasivik Payment Gateway",
      date: "May 14, 2025",
      author: "Dev Team",
      excerpt: "Learn how to integrate Jasivik's payment solutions into your React application in minutes.",
      tags: ["Beginner", "Setup", "Integration"],
      image: assets.upi_id,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Advanced Payment Processing with Jasivik API",
      date: "May 10, 2025",
      author: "John Developer",
      excerpt: "Explore the advanced features of Jasivik's payment processing API for subscription-based models.",
      tags: ["Advanced", "API", "Subscriptions"],
      image: assets.cardspayments,
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Securing Transactions with Jasivik's Fraud Prevention",
      date: "May 5, 2025",
      author: "Security Team",
      excerpt: "Discover how to implement Jasivik's fraud prevention tools to protect your customers and business.",
      tags: ["Security", "Fraud Prevention", "Best Practices"],
      image: assets.netBanking,
      readTime: "7 min read"
    }
  ];

  const features = [
    { title: "Multiple Payment Methods", description: "Support for credit cards, digital wallets, UPI, and more", icon: "💳" },
    { title: "Global Currency Support", description: "Process payments in 150+ currencies worldwide", icon: "🌍" },
    { title: "Secure Transactions", description: "PCI DSS Level 1 compliant with advanced encryption", icon: "🔒" },
    { title: "Subscription Management", description: "Easily handle recurring payments and subscriptions", icon: "🔄" }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Jasivik Payment Gateway</h1>
        <p style={{ color: '#6c757d' }}>The Developer's Choice for Payment Processing</p>
        <hr style={{ width: '60px', margin: '20px auto', borderTop: '3px solid #007bff' }} />
      </div>

      {/* Video & Features Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '50px' }}>
        
        {/* Video */}
        <div style={{ flex: '1 1 60%' }}>
          <video
            style={{ width: '100%', height: '400px', borderRadius: '10px' }}
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{ marginTop: '20px' }}>
            <p style={{ color: '#6c757d', marginBottom: '8px' }}>Featured • May 14, 2025</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Introducing Jasivik Payment SDK 2.0</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
              Our latest SDK brings improved performance, better React integration, and new features
              to make payment processing smoother than ever before.
            </p>
            <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
              Read More
            </button>
          </div>
        </div>

        {/* Features */}
        <div style={{ flex: '1 1 35%', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ marginBottom: '20px' }}>Why Choose Jasivik?</h3>
          {features.map((feature, index) => (
            <div key={index} style={{ display: 'flex', marginBottom: '15px' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '12px' }}>{feature.icon}</div>
              <div>
                <h4 style={{ margin: '0', fontSize: '1rem', fontWeight: '600' }}>{feature.title}</h4>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#6c757d' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px' }}>Latest Articles</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {blogPosts.map(post => (
            <div key={post.id} style={{ flex: '1 1 30%', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
              <div style={{ padding: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#6c757d' }}>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: '10px 0' }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#333' }}>{post.excerpt}</p>
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    {post.tags.map((tag, index) => (
                      <span key={index} style={{ backgroundColor: '#f1f1f1', fontSize: '0.75rem', marginRight: '5px', padding: '2px 6px', borderRadius: '4px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button style={{ fontSize: '0.8rem', border: '1px solid #007bff', padding: '4px 8px', backgroundColor: '#fff', color: '#007bff', borderRadius: '4px' }}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '10px', padding: '40px 20px', textAlign: 'center' }}>
        <h3>Stay Updated with Jasivik</h3>
        <p>Subscribe to our newsletter for the latest updates, tips, and best practices.</p>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '10px',
              border: 'none',
              borderRadius: '4px 0 0 4px',
              width: '250px',
              maxWidth: '90%'
            }}
          />
          <button style={{
            padding: '10px 16px',
            backgroundColor: '#fff',
            color: '#007bff',
            border: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer'
          }}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
