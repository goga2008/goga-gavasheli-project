export interface HomeItem {
  id: string;
  title: string;
  image: string;
  description: string;
  details: string; // მომხმარებელს შეუძლია დაარედაქტიროს ეს ველი
}

export const featuredItems: HomeItem[] = [
  {
    id: 'smartphones',
    title: 'სმარტფონები',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    description: 'უახლესი მოდელები საუკეთესო ფასებით. Samsung, Apple, Xiaomi და სხვა.',
    details: 'აქ შეგიძლიათ დაამატოთ დეტალური ინფორმაცია სმარტფონების კატეგორიაზე. აღწერეთ რას სთავაზობთ მომხმარებელს, რა უპირატესობები გაქვთ და ა.შ.',
  },
  {
    id: 'laptops',
    title: 'ლეპტოპები',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    description: 'მძლავრი ლეპტოპები სამუშაოდ და გასართობად. ყველა ბრენდი ერთ ადგილას.',
    details: 'აქ შეგიძლიათ დაამატოთ დეტალური ინფორმაცია ლეპტოპების კატეგორიაზე. აღწერეთ მოდელები, ტექნიკური მახასიათებლები და არჩევანის მრავალფეროვნება.',
  },
  {
    id: 'accessories',
    title: 'აქსესუარები',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    description: 'ყურსასმენები, დამტენები, ქეისები და სხვა აქსესუარები.',
    details: 'ეს არის ინდუსტრიის სტანდარტი, როდესაც საქმე ხარისხიან ჟღერადობასა და იზოლაციას ეხება. ხშირად ყიდულობენ მოგზაურები, პროგრამისტები და მუსიკის მოყვარულები.',
  },
];

export const serviceItems: HomeItem[] = [
  {
    id: 'free-delivery',
    title: 'უფასო მიწოდება',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
    description: '50 ლარზე მეტი შეკვეთისას მიწოდება უფასოა მთელი საქართველოს მასშტაბით.',
    details: 'აქ შეგიძლიათ დაამატოთ დეტალური ინფორმაცია უფასო მიწოდების სერვისზე. მაგალითად, მიწოდების ვადები და პირობები.',
  },
  {
    id: 'warranty',
    title: 'გარანტია',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    description: 'ყველა პროდუქტზე მოქმედებს ოფიციალური გარანტია 1 წლიდან 3 წლამდე.',
    details: 'აქ შეგიძლიათ დაამატოთ დეტალური ინფორმაცია საგარანტიო პირობების შესახებ. რა იფარება გარანტიით და რა შემთხვევაში შეიძლება გაუქმდეს.',
  },
  {
    id: 'support-24-7',
    title: '24/7 მხარდაჭერა',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    description: 'ჩვენი გუნდი მზადაა დაგეხმაროთ ნებისმიერ დროს. დაგვიკავშირდით!',
    details: 'აქ შეგიძლიათ დაამატოთ დეტალური ინფორმაცია თქვენი 24/7 მხარდაჭერის გუნდის შესახებ. როგორ შეიძლება დაგიკავშირდეთ (ტელეფონი, ელ-ფოსტა და ა.შ.).',
  },
];

export const allHomeItems = [...featuredItems, ...serviceItems];
