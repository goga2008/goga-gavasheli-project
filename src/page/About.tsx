import Section from '../components/Section';

function About() {
  return (
    <div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ჩვენს შესახებ</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto px-4">
          გაიცანით ჩვენი გუნდი და ისტორია
        </p>
      </div>

      
      <Section id="founder" title="დამფუძნებელი">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          
          <div className="flex-shrink-0">
            <img
              src="/photo-2d.webp"
              alt="დამფუძნებელი"
              className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-blue-500"
            />
          </div>

        
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">გოგა გავაშელი(ჩემი სურათი არ არის)</h3>
            <p className="text-blue-600 font-semibold mb-4">დამფუძნებელი & CEO</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              გოგა გავაშელი არის ტექნოლოგიური ინდუსტრიის ენთუზიასტი, რომელმაც
              2024 წელს დააფუძნა ონლაინ მაღაზია „oniom". მისი მიზანია საქართველოში
              შექმნას ონლაინ მაღაზია ,სადაც მომხმარებელი ისარგებლებს სხვადასხვა პროდუქტებით.
              საუკეთესო გამოცდილების შეთავაზება.
            </p>
            <p className="text-gray-600 leading-relaxed">
              პროფესიული გამოცდილების 2 წლის განმავლობაში, მე შეიძინაე
              ღრმა ცოდნა საიტების აწყობაში, ვებ დეველოპმენტისა და
              ციფრული მარკეტინგში.
            </p>
          </div>
        </div>
      </Section>

      
      <Section id="mission" title="ჩვენი მისია" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">მისია</h3>
            <p className="text-gray-600 leading-relaxed">
              ჩვენი მისია არის მაღალი ხარისხის ტექნოლოგიური პროდუქტების
              ხელმისაწვდომობა ყველა ადამიანისთვის საქართველოში. ჩვენ გვჯერა,
              რომ ტექნოლოგია უნდა იყოს მარტივი, ხელმისაწვდომი და საიმედო.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">ხედვა</h3>
            <p className="text-gray-600 leading-relaxed">
              ჩვენი ხედვა არის გავხდეთ საქართველოში #1 ონლაინ ტექნოლოგიური
              მაღაზია, რომელიც გამოირჩევა მომხმარებლის მომსახურებით,
              პროდუქტების ხარისხითა და ინოვაციური მიდგომით.
            </p>
          </div>
        </div>
      </Section>

      
      <Section id="team" title="ჩვენი გუნდი">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: 'ანა კვარაცხელია',
              role: 'მარკეტინგის მენეჯერი',
              image: '/photo-1gg.webp',
              bio: 'ციფრული მარკეტინგის ექსპერტი 4 წლიანი გამოცდილებით.',
            },
            {
              name: 'ლუკა ჯანელიძე',
              role: 'ტექნიკური დირექტორი',
              image: '/photo-1s.webp',
              bio: 'Full-stack დეველოპერი, ტექნოლოგიური გადაწყვეტილებების არქიტექტორი.',
            },
            {
              name: 'მარიამ ბერიძე',
              role: 'კლიენტების მომსახურება',
              image: '/photo-1g.webp',
              bio: 'კლიენტებთან ურთიერთობის სპეციალისტი, ყოველთვის მზადაა დასახმარებლად.',
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden text-center transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      
      <Section id="stats" className="bg-blue-600">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto text-center text-white">
          {[
            { number: '500+', label: 'კმაყოფილი მომხმარებელი' },
            { number: '1200', label: 'პროდუქტი' },
            { number: '50', label: 'ბრენდი' },
            { number: '24/7', label: 'მხარდაჭერა' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default About;
