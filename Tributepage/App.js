import React from 'react';
import './App.css';
import savitribaiImage from './images/savitribai-phule.jpg'; 

function App() {
  return (
    <div className="container">
      <header>
        <h1>Tribute to Savitribai Phule</h1>
        { <img src={savitribaiImage} alt="Savitribai Phule" className="tribute-img" /> }
      </header>
      
      <section className="content">
        <h2>Introduction</h2>
        <p>
          Savitribai Phule (3 January 1831 – 10 March 1897) was an Indian social reformer, educationalist, and poet from Maharashtra. She is considered one of the most important figures in the social reform movement in India, known for her efforts to promote women's education and the eradication of caste-based discrimination.
        </p>

        <h2>Her Contributions</h2>
        <p>
          Along with her husband Jyotirao Phule, she founded the first girls' school in Pune in 1848. She was a leading figure in the struggle to educate women and the oppressed in India. Savitribai was also an ardent advocate for the rights of untouchables and worked to eliminate child marriage and the practice of Sati.
        </p>
        <p>
          In 1852, she established the first women’s rights organization, and she opened 18 schools for girls during her lifetime. Savitribai not only fought for education but also for widow remarriage, and she helped establish shelters for destitute women.
        </p>

        <h2>Legacy</h2>
        <p>
          Savitribai Phule is remembered today as one of the earliest and most influential feminists in India. Her contributions laid the foundation for social justice and women’s empowerment in India. Her courageous battle against societal norms and her passion for educating the marginalized have earned her a permanent place in Indian history.
        </p>
        <p>
          Her legacy continues to inspire generations of social reformers, feminists, and educators across the world. In her honor, various awards, institutions, and initiatives continue to bear her name as a tribute to her immense contribution to society.
        </p>
      </section>
    </div>
  );
}

export default App;
