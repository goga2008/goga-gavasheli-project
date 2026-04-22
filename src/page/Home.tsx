import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';

const featuredItems = [
  {
    title: 'სმარტფონები',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    description: 'უახლესი მოდელები საუკეთესო ფასებით. Samsung, Apple, Xiaomi და სხვა.',
  },
  {
    title: 'ლეპტოპები',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    description: 'მძლავრი ლეპტოპები სამუშაოდ და გასართობად. ყველა ბრენდი ერთ ადგილას.',
  },
  {
    title: 'აქსესუარები',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    description: 'ყურსასმენები, დამტენები, ქეისები და სხვა აქსესუარები.',
  },
];

const serviceItems = [
  {
    title: 'უფასო მიწოდება',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
    description: '50 ლარზე მეტი შეკვეთისას მიწოდება უფასოა მთელი საქართველოს მასშტაბით.',
  },
  {
    title: 'გარანტია',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    description: 'ყველა პროდუქტზე მოქმედებს ოფიციალური გარანტია 1 წლიდან 3 წლამდე.',
  },
  {
    title: '24/7 მხარდაჭერა',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    description: 'ჩვენი გუნდი მზადაა დაგეხმაროთ ნებისმიერ დროს. დაგვიკავშირდით!',
  },
];

function Home() {
  return (
    <div>
      {/* Hero სექცია */}
      <Hero />

      {/* პოპულარული კატეგორიები */}
      <Section id="categories" title="პოპულარული კატეგორიები">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* ჩვენი სერვისები */}
      <Section id="services" title="ჩვენი სერვისები" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* ჩვენს შესახებ */}
      <Section id="about" title="ჩვენს შესახებ">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            ჩვენ ვართ ონლაინ მაღაზია, რომელიც გთავაზობთ უმაღლესი ხარისხის
            ტექნოლოგიურ პროდუქტებს საუკეთესო ფასებით. ჩვენი მისია არის
            ტექნოლოგიის ხელმისაწვდომობა ყველასთვის.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            გაიგე მეტი
          </button>
        </div>
      </Section>
    </div>
  );
}

export default Home;
