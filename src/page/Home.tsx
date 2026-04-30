import { useEffect } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';

import { featuredItems, serviceItems } from '../data/HomeDetails';

function Home() {
  useEffect(() => {
    document.title = 'Home| ჩემი საიტი';
  }, []);

  return (
    <div>
      
      <Hero />

      
      <Section id="categories" title="პოპულარული კატეგორიები">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      
      <Section id="services" title="ჩვენი სერვისები" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </Section>


    </div>
  );
}

export default Home;
