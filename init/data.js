/* Upadet data */
const sampleListings = [
  {
    title: "Skyline Orchid Residency",
    description:
      "A premium 1BHK apartment located in the well connected neighborhood of Andheri West, Mumbai. This modern home offers excellent ventilation, natural light, and convenient access to public transport and commercial hubs ideal for working bachelors and small families.",
    image: {
      filename: "listingimage",
      url: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzl7cWoetJDs3eHE9U4ymgccfaIXZczU34plbr6of8XB2pSHkQjk6cExhOhbDxusBtBMiePCdRh4oRChwUW4QiYdwtNdWnfdnuNeOuhty_eLjpOBypDKga86NVyc8k-bwsMYmx7MQ=s1360-w1360-h1020-rw",
    },
    price: 32000,
    location: "Andheri West, Mumbai",
    country: "India",
    address:
      "Tower B-503, Skyline Orchid Residency, Lokhandwala Road, Andheri West, Mumbai",
    phoneNumber: 9867543281,
    ownerName: "Rohit Singh",
    propertyType: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 620,
    amenities:
      "Lift, CCTV, 24x7 Security, Parking, Power Backup, Modular Kitchen",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 12, name: "Mumbai City Center" },
      busStand: { distance: 0.4, name: "Lokhandwala Bus Stop" },
      railwayStation: { distance: 3, name: "Andheri Railway Station" },
      airport: {
        distance: 7,
        name: "Chhatrapati Shivaji Maharaj International Airport",
      },
    },

    nearbyPlaces: {
      name: "Infinity Mall",
      distance: "1 km",
      description:
        "Popular shopping destination with retail shops, multiplex cinema, & food court",
    },
  },
  {
    title: "Green Valley Hillside Villa",
    description:
      "A peaceful 3BHK independent villa located near the lush greenery of Kasauli Hills. Perfect weekend or long stay rental for those seeking serenity away from the city noise surrounded by pine trees and scenic hill views.",
    image: {
      filename: "listingimage",
      url: "https://www.roofandfloor.com/project/395/gallery/Greater_C_S_Rao_Green_Valley_3.jpg",
    },
    price: 45000,
    location: "Kasauli, Himachal Pradesh",
    country: "India",
    address: "Villa No. 12, Green Valley Enclave, Garkhal, Kasauli",
    phoneNumber: 9817459923,
    ownerName: "Harish Mehta",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    amenities: "Garden, Fireplace, Parking, Power Backup, Balcony View",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 5, name: "Kasauli Market" },
      busStand: { distance: 2, name: "Garkhal Bus Stop" },
      railwayStation: { distance: 28, name: "Kalka Railway Station" },
      airport: { distance: 60, name: "Chandigarh Airport" },
    },

    nearbyPlaces: {
      name: "Sunset Point",
      distance: "3 km",
      description:
        "Scenic viewpoint popular for evening walks and mountain photography",
    },
  },
  {
    title: "Lakewood Heritage Mansion",
    description:
      "Experience royal living in this beautifully preserved 4BHK heritage mansion located near Fateh Sagar Lake in Udaipur. Designed with Rajasthani architecture, large courtyards, and scenic rooftop views ideal for large families or premium rental stays.",
    image: {
      filename: "listingimage",
      url: "https://static.toiimg.com/thumb/msid-88929384,width-1280,height-720,resizemode-72/88929384.jpg",
    },
    price: 90000,
    location: "Fateh Sagar, Udaipur",
    country: "India",
    address: "Heritage Lane, Lakewood Mansion, Near Fateh Sagar Lake, Udaipur",
    phoneNumber: 9982124576,
    ownerName: "Mahesh Rajput",
    propertyType: "Independent House",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    amenities:
      "Rooftop Terrace, Garden, Parking, Air Conditioning, Servant Room",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "Udaipur City Center" },
      busStand: { distance: 3, name: "Reti Stand Bus Depot" },
      railwayStation: { distance: 6, name: "Udaipur City Railway Station" },
      airport: { distance: 24, name: "Maharana Pratap Airport" },
    },

    nearbyPlaces: {
      name: "Fateh Sagar Lake",
      distance: "0.8 km",
      description:
        "Popular tourist spot offering boating, street food stalls & sunset views",
    },
  },
  {
    title: "Hillview Chalet in Lonavala",
    description:
      "Stay in this cozy 2BHK chalet in Lonavala, Maharashtra, with stunning hill views and modern amenities. Perfect for weekend getaways or long term rentals in the Western Ghats.",
    image: {
      filename: "listingimage",
      url: "https://img.vistarooms.com/gallery/compressed/hillside-serenity-4c9504.jpg",
    },
    price: 35000,
    location: "Lonavala, Maharashtra",
    country: "India",
    address: "Chalet No. 9, Hillview Residency, Tungarli Road, Lonavala",
    phoneNumber: 9823456789,
    ownerName: "Siddharth Kulkarni",
    propertyType: "Chalet",
    bedrooms: 2,
    bathrooms: 2,
    area: 850,
    amenities: "Hillside View, Balcony, WiFi, Parking, Garden",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 3, name: "Lonavala Market" },
      busStand: { distance: 2, name: "Lonavala Bus Stand" },
      railwayStation: { distance: 4, name: "Lonavala Railway Station" },
      airport: { distance: 95, name: "Pune Airport" },
    },

    nearbyPlaces: {
      name: "Bhushi Dam",
      distance: "2 km",
      description: "Popular dam with scenic views and picnic spots",
    },
  },
  {
    title: "Secluded Beach House in Alibaug",
    description:
      "Escape to this serene 3BHK beach house on the Alibaug coastline, Maharashtra. Enjoy sun, sand, and peaceful long-term stays with oceanfront views and a private terrace.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/318566179.jpg?k=5acb8eb4b1511e550f08471d4baec9925d0a6ba0948a5641851e285fd645c764&o=",
    },
    price: 60000,
    location: "Alibaug, Maharashtra",
    country: "India",
    address: "Beach House No. 12, Coastal Residency, Kashid Road, Alibaug",
    phoneNumber: 9901122334,
    ownerName: "Neha Deshmukh",
    propertyType: "Beach House",
    bedrooms: 3,
    bathrooms: 2,
    area: 1400,
    amenities: "Beachfront, Balcony, Garden, WiFi, Parking",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "Alibaug Town Center" },
      busStand: { distance: 5, name: "Alibaug Bus Stand" },
      railwayStation: { distance: 30, name: "Panvel Railway Station" },
      airport: { distance: 120, name: "Chhatrapati Shivaji Airport, Mumbai" },
    },

    nearbyPlaces: {
      name: "Kashid Beach",
      distance: "0.3 km",
      description: "Quiet beach perfect for relaxing walks and water sports",
    },
  },

  {
    title: "Heritage Villa in Daman",
    description:
      "Experience the charm of Daman in this 3BHK heritage villa with a spacious garden and traditional architecture. Perfect for long-term stays or weekend getaways.",
    image: {
      filename: "listingimage",
      url: "https://media1.thrillophilia.com/filestore/08538c7w1siau70ltrprn4nzqzup_1622026586_shutterstock_347311892.jpg?w=400&dpr=2",
    },
    price: 45000,
    location: "Daman, Daman and Diu",
    country: "India",
    address: "Villa No. 5, Heritage Residency, Nani Daman",
    phoneNumber: 9876543210,
    ownerName: "Vikram Mehta",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    amenities: "Garden, Balcony, WiFi, Parking, Air Conditioning",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 2, name: "Daman Market" },
      busStand: { distance: 3, name: "Daman Bus Stand" },
      railwayStation: { distance: 15, name: "Vapi Railway Station" },
      airport: { distance: 165, name: "Surat Airport" },
    },

    nearbyPlaces: {
      name: "Devka Beach",
      distance: "1 km",
      description: "Popular beach with scenic sunset views and local eateries",
    },
  },
  {
    title: "Seaside Apartment in Diu",
    description:
      "Stay in this modern 2BHK apartment in Diu, just a few steps from the beach. Ideal for tourists and long-term residents looking for comfort and convenience.",
    image: {
      filename: "listingimage",
      url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/405954029.jpg?k=4035b91b554d834a5725fe68022033512087bc02955680cc5af48d5cb064ca89&o=",
    },
    price: 35000,
    location: "Diu, Daman and Diu",
    country: "India",
    address: "Apartment No. 8, Seaside Residency, Diu Island",
    phoneNumber: 9900112233,
    ownerName: "Anita Patel",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    amenities: "Beach Access, Balcony, WiFi, Parking, Furnished Kitchen",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 1, name: "Diu Market" },
      busStand: { distance: 2, name: "Diu Bus Stand" },
      railwayStation: { distance: 80, name: "Veraval Railway Station" },
      airport: { distance: 15, name: "Diu Airport" },
    },

    nearbyPlaces: {
      name: "Nagoa Beach",
      distance: "0.2 km",
      description:
        "Pristine white sand beach perfect for swimming and relaxation",
    },
  },

  {
    title: "Royal Palm Treehouse Retreat",
    description:
      "A peaceful 1BHK wooden eco house located inside a lush green private estate in Wayanad. Surrounded by dense forests and scenic views, this is a perfect stay option for nature lovers and remote workers seeking calm and fresh air away from city life.",
    image: {
      filename: "listingimage",
      url: "https://grapecounty.in/wp-content/uploads/2025/09/Palm-tree-1.jpg",
    },
    price: 180000,
    location: "Wayanad, Kerala",
    country: "India",
    address: "Treehouse No. 7, Royal Palm Estate, Vythiri, Wayanad, Kerala",
    phoneNumber: 9847112367,
    ownerName: "Joseph Mathew",
    propertyType: "Villa",
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    amenities: "Balcony View, Hot Water, Parking, Nature Trail Access",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 6, name: "Wayanad City Center" },
      busStand: { distance: 2.5, name: "Vythiri Bus Stop" },
      railwayStation: { distance: 58, name: "Kozhikode Railway Station" },
      airport: { distance: 71, name: "Calicut International Airport" },
    },

    nearbyPlaces: {
      name: "Pookode Lake",
      distance: "3 km",
      description:
        "Beautiful freshwater lake ideal for pedal boating & nature walks",
    },
  },
  {
    title: "Shoreline Coral Beachfront Apartment",
    description:
      "A modern 2BHK beachfront apartment located in Varkala with uninterrupted sea views. Step outside to enjoy the cliff beach, cafes, and peaceful coastal walks ideal for long term remote workers and couples.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470417793.jpg?k=9f7fcc2e0f3dd898496faab1d2cf61a367a001bb2ee19aea01fb0e0f94357906&o=",
    },
    price: 35000,
    location: "Varkala, Kerala",
    country: "India",
    address: "Flat 302, Shoreline Coral Residency, North Cliff, Varkala",
    phoneNumber: 9753268123,
    ownerName: "Akhil Nair",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1150,
    amenities: "Sea View Balcony, WiFi, Lift, Power Backup, Parking",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "Varkala Town" },
      busStand: { distance: 2, name: "Varkala Bus Stand" },
      railwayStation: { distance: 3, name: "Varkala Sivagiri Railway Station" },
      airport: { distance: 42, name: "Trivandrum International Airport" },
    },

    nearbyPlaces: {
      name: "Varkala Beach",
      distance: "0.3 km",
      description: "Popular cliff beach with cafes, surfing & sunset views",
    },
  },
  {
    title: "Silver Oak Lakeview Cabin",
    description:
      "A comfortable 2BHK wooden cabin located near the peaceful Pawna Lake in Lonavala. Perfect weekend retreat for families, adventure groups and nature lovers enjoy kayaking, lakeside barbecue & mountain views.",
    image: {
      filename: "listingimage",
      url: "https://visitlaketahoe.com/wp-content/uploads/2019/03/tahoe-all-seasons-properties-zephyr-cove-lake-front-home-1200x675-1-1024x576.jpg",
    },
    price: 28000,
    location: "Pawna Lake, Lonavala",
    country: "India",
    address: "Cabin 14, Silver Oak Estate, Pawna Lake View Road, Lonavala",
    phoneNumber: 9820147893,
    ownerName: "Suresh Patil",
    propertyType: "Independent House",
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    amenities:
      "Lawn Garden, Lake View, Parking, Power Backup, Outdoor Bonfire Area",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 14, name: "Lonavala Market" },
      busStand: { distance: 12, name: "Lonavala Bus Stand" },
      railwayStation: { distance: 13, name: "Lonavala Railway Station" },
      airport: { distance: 67, name: "Pune International Airport" },
    },

    nearbyPlaces: {
      name: "Pawna Dam",
      distance: "1.2 km",
      description: "Beautiful lakeside spot perfect for camping & boating",
    },
  },

  {
    title: "Luxury 2BHK Apartment in South Delhi",
    description:
      "Stay in this modern 2BHK apartment in South Delhi with elegant interiors, a spacious balcony, and access to all amenities. Ideal for long-term rentals in the heart of the city.",
    image: {
      filename: "listingimage",
      url: "https://imagecdn.99acres.com/media1/19552/19/391059106M-1755276582236.webp",
    },
    price: 55000,
    location: "South Delhi, Delhi",
    country: "India",
    address: "Apartment No. 205, Green Residency, Saket, South Delhi",
    phoneNumber: 9810223344,
    ownerName: "Ravi Kapoor",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    amenities: "Gym, WiFi, Balcony, Parking, Air Conditioning",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 5, name: "Saket City Center" },
      busStand: { distance: 2, name: "Saket Bus Stop" },
      railwayStation: {
        distance: 8,
        name: "Hazrat Nizamuddin Railway Station",
      },
      airport: { distance: 18, name: "Indira Gandhi International Airport" },
    },

    nearbyPlaces: {
      name: "Qutub Minar",
      distance: "6 km",
      description: "Iconic historic monument with lush surrounding gardens",
    },
  },
  {
    title: "Spacious Villa in Dwarka",
    description:
      "Experience comfort and privacy in this 4BHK villa in Dwarka, Delhi. Comes with a private garden, parking space, and modern amenities. Perfect for families.",
    image: {
      filename: "listingimage",
      url: "https://content.jdmagicbox.com/v2/comp/delhi/p7/011pxx11.xx11.191016013130.n6p7/catalogue/mahajan-villas-new-palam-vihar-gurgaon-villas-on-hire-6o5mpnpjvy.jpg",
    },
    price: 90000,
    location: "Dwarka, Delhi",
    country: "India",
    address: "Villa No. 12, Serenity Residency, Dwarka Sector 14",
    phoneNumber: 9876543210,
    ownerName: "Anjali Verma",
    propertyType: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    amenities: "Garden, Balcony, WiFi, Parking, Air Conditioning",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 6, name: "Dwarka City Center" },
      busStand: { distance: 1, name: "Dwarka Bus Stand" },
      railwayStation: { distance: 10, name: "Delhi Cantt Railway Station" },
      airport: { distance: 20, name: "Indira Gandhi International Airport" },
    },

    nearbyPlaces: {
      name: "ISKCON Temple",
      distance: "3 km",
      description:
        "Peaceful and beautiful temple complex with spiritual activities",
    },
  },

  {
    title: "Skyline Imperial Penthouse",
    description:
      "Live a premium lifestyle in this lavish 3BHK penthouse located in the upscale Skyline Imperial Residency, Bandra West. Enjoy breathtaking views of Mumbai’s skyline from the private terrace. Ideal for corporate professionals and luxury family living.",
    image: {
      filename: "listingimage",
      url: "https://www.indiapropertyline.com/buildingImages/28624/5.webp?preset=mpepropmain",
    },
    price: 185000,
    location: "Bandra West, Mumbai",
    country: "India",
    address:
      "Penthouse 1902, Skyline Imperial Residency, Linking Road, Bandra West",
    phoneNumber: 9823187456,
    ownerName: "Rahul Khanna",
    propertyType: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    area: 2600,
    amenities: "Terrace, Lift, Security 24/7, Gym, Parking, Power Backup",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 6, name: "Bandra City Center" },
      busStand: { distance: 1.2, name: "Bandra Bus Depot" },
      railwayStation: { distance: 2, name: "Bandra Railway Station" },
      airport: { distance: 9, name: "Chhatrapati Shivaji Airport" },
    },

    nearbyPlaces: {
      name: "Bandra Bandstand",
      distance: "1.5 km",
      description: "Popular seafront promenade for walks & sunset views",
    },
  },

  {
    title: "Modern 2BHK Apartment in Whitefield",
    description:
      "Stay in this stylish 2BHK apartment in Whitefield, Bangalore, with a balcony overlooking the city skyline. Perfect for working professionals or long-term rentals.",
    image: {
      filename: "listingimage",
      url: "https://www.roofandfloor.com/project/3749/salepageimages/Assetz_66_and_Shibui_1.PNG",
    },
    price: 40000,
    location: "Whitefield, Bangalore",
    country: "India",
    address: "Apartment No. 302, Maple Residency, Whitefield Main Road",
    phoneNumber: 9887766554,
    ownerName: "Karthik Ramesh",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    amenities: "Gym, WiFi, Balcony, Parking, Swimming Pool",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 10, name: "Phoenix Marketcity" },
      busStand: { distance: 2, name: "Whitefield Bus Stop" },
      railwayStation: { distance: 7, name: "Whitefield Railway Station" },
      airport: { distance: 40, name: "Kempegowda International Airport" },
    },

    nearbyPlaces: {
      name: "VR Bengaluru Mall",
      distance: "5 km",
      description:
        "Popular shopping and entertainment destination with restaurants and cinemas",
    },
  },
  {
    title: "Luxury Villa in Koramangala",
    description:
      "Experience comfort and elegance in this 4BHK villa in Koramangala, Bangalore. Features a private garden, modern interiors, and easy access to schools and offices.",
    image: {
      filename: "listingimage",
      url: "https://content.jdmagicbox.com/v2/comp/bangalore/s6/080pxx80.xx80.190924150517.x6s6/catalogue/white-escape-jigani-bangalore-villas-on-hire-x97k6k12fw.jpg",
    },
    price: 90000,
    location: "Koramangala, Bangalore",
    country: "India",
    address: "Villa No. 15, Greenfield Residency, Koramangala 7th Block",
    phoneNumber: 9876543211,
    ownerName: "Shreya Nair",
    propertyType: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    amenities: "Garden, Balcony, WiFi, Parking, Private Pool",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 6, name: "Forum Mall Koramangala" },
      busStand: { distance: 2, name: "Koramangala Bus Stop" },
      railwayStation: { distance: 12, name: "Bangalore City Railway Station" },
      airport: { distance: 35, name: "Kempegowda International Airport" },
    },

    nearbyPlaces: {
      name: "St. John's Church",
      distance: "3 km",
      description:
        "Historic church with beautiful architecture and peaceful surroundings",
    },
  },
  {
    title: "Snow View Alpine Chalet",
    description:
      "A charming 2BHK hill chalet located in Alpine Meadows Residency, Manali. Perfect for long stay professionals and travelers seeking peace, snow views, and scenic trekking opportunities.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1321510805173911099/original/9c91621d-f37a-4eef-b6fd-1d9a8279a8c8.jpeg",
    },
    price: 35000,
    location: "Old Manali, Himachal Pradesh",
    country: "India",
    address: "Chalet 12, Alpine Meadows Residency, Old Manali Road",
    phoneNumber: 9882765432,
    ownerName: "Vikram Singh",
    propertyType: "Villa",
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    amenities: "Wooden Interiors, Mountain View, Parking, Garden",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 3, name: "Manali Mall Road" },
      busStand: { distance: 2.2, name: "Manali Volvo Bus Stand" },
      railwayStation: { distance: 136, name: "Joginder Nagar Railway Station" },
      airport: { distance: 52, name: "Kullu-Manali Airport" },
    },

    nearbyPlaces: {
      name: "Hadimba Temple",
      distance: "1.3 km",
      description: "Historic wooden temple surrounded by cedar forest",
    },
  },
  {
    title: "Savannah Cottage",
    description:
      "Experience close to nature living with this 1BHK cottage located near the Gir Forest entrance. Perfect for wildlife enthusiasts looking for a peaceful long term stay.",
    image: {
      filename: "listingimage",
      url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/506761066.jpg?k=24709b4559a15d7a8c93f34c4a459e918e6d663c76cdf268dba8c911f29eed26&o=",
    },
    price: 18000,
    location: "Sasan Gir, Gujarat",
    country: "India",
    address: "Cottage 4, Savannah Retreat Resort Area, Gir Road, Sasan",
    phoneNumber: 9099034881,
    ownerName: "Harsh Trivedi",
    propertyType: "Independent Cottage",
    bedrooms: 1,
    bathrooms: 1,
    area: 520,
    amenities: "Garden, Hot Water, Parking, Nature View Deck",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 8, name: "Junagadh City" },
      busStand: { distance: 5, name: "Sasan Bus Station" },
      railwayStation: { distance: 7, name: "Sasan Railway Station" },
      airport: { distance: 56, name: "Keshod Airport" },
    },

    nearbyPlaces: {
      name: "Gir National Park Entry Gate",
      distance: "1.1 km",
      description: "Home to Asiatic lions & various wildlife safari activities",
    },
  },
  {
    title: "Canal View Heritage Residence",
    description:
      "Stay in this beautifully restored 2BHK heritage apartment inside Dutch Canal Residency, Fort Kochi. The vintage architecture combined with modern interiors makes it a perfect choice for art lovers and working professionals.",
    image: {
      filename: "listingimage",
      url: "https://juggler.makemytrip.com/juggler/stream/key/platform-ugc-01JZPNRMYSV4Q3ETR2N6QZ18DA/01JZPNRMYSV4Q3ETR2N6QZ18DA.jpg",
    },
    price: 40000,
    location: "Fort Kochi, Kerala",
    country: "India",
    address: "Flat 204, Dutch Canal Residency, Princess Street, Fort Kochi",
    phoneNumber: 9846791245,
    ownerName: "Maria Fernandez",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    amenities: "WiFi, Air Conditioning, Balcony, Power Backup, Security",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 3.5, name: "Kochi Town" },
      busStand: { distance: 1.4, name: "Fort Kochi Bus Terminal" },
      railwayStation: { distance: 12, name: "Ernakulam Junction" },
      airport: { distance: 38, name: "Cochin International Airport" },
    },

    nearbyPlaces: {
      name: "Fort Kochi Beach",
      distance: "0.9 km",
      description:
        "Tourist spot famous for Chinese fishing nets & coastal cafes",
    },
  },

  {
    title: "Modern 2BHK Apartment in Satellite, Ahmedabad",
    description:
      "Stay in this sleek and modern 2BHK apartment in Satellite, Ahmedabad. Features a spacious living room, balcony, and all essential amenities for comfortable living.",
    image: {
      filename: "listingimage",
      url: "https://thearchitectsdiary.com/wp-content/uploads/2023/11/Luxury-Apartment-Building-4-1024x751.webp",
    },
    price: 30000,
    location: "Satellite, Ahmedabad, Gujarat",
    country: "India",
    address: "Apartment No. 305, Green Park Residency, Satellite, Ahmedabad",
    phoneNumber: 9876543211,
    ownerName: "Mehul Shah",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    amenities: "WiFi, Balcony, Parking, Gym, Air Conditioning",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "CG Road Market" },
      busStand: { distance: 2, name: "Satellite Bus Stop" },
      railwayStation: { distance: 10, name: "Ahmedabad Railway Station" },
      airport: {
        distance: 20,
        name: "Sardar Vallabhbhai Patel International Airport",
      },
    },

    nearbyPlaces: {
      name: "Vastrapur Lake",
      distance: "3 km",
      description:
        "Peaceful lake area perfect for evening walks and family outings",
    },
  },
  {
    title: "Spacious 3BHK Villa in Bopal, Ahmedabad",
    description:
      "A luxurious 3BHK villa in Bopal with a private garden, balcony, and modern amenities. Ideal for families seeking comfort and privacy in Ahmedabad.",
    image: {
      filename: "listingimage",
      url: "https://teja10.kuikr.com///r1/20160610/ak_1920_14803050-1465560321_700x700.jpeg",
    },
    price: 60000,
    location: "Bopal, Ahmedabad, Gujarat",
    country: "India",
    address: "Villa No. 18, Sunshine Residency, Bopal, Ahmedabad",
    phoneNumber: 9901122335,
    ownerName: "Bhavna Desai",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    amenities: "Garden, Parking, WiFi, Balcony, Air Conditioning",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 5, name: "Bopal Market" },
      busStand: { distance: 1, name: "Bopal Bus Stop" },
      railwayStation: { distance: 15, name: "Ahmedabad Railway Station" },
      airport: {
        distance: 25,
        name: "Sardar Vallabhbhai Patel International Airport",
      },
    },

    nearbyPlaces: {
      name: "Bopal Lake",
      distance: "2 km",
      description:
        "Serene lake area surrounded by greenery, perfect for relaxation",
    },
  },

  {
    title: "Serene Island Villa Retreat",
    description:
      "Enjoy complete privacy in this luxurious 3BHK villa located on a private island like property near the backwaters of Alleppey, Kerala. Ideal for families or couples seeking a calm, serene getaway surrounded by water and greenery.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/522864805.jpg?k=ef2710743f48a3a47f7631ca3349043ba55aa20f24f4fd927f4ce722f6005f46&o=",
    },
    price: 65000,
    location: "Alleppey, Kerala",
    country: "India",
    address: "Villa No. 8, Serene Waters Estate, Mararikulam, Alleppey",
    phoneNumber: 9847123456,
    ownerName: "Anil Kumar",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    amenities: "Private Garden, Balcony View, Parking, Power Backup, Lake View",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 5, name: "Alleppey Town Center" },
      busStand: { distance: 3, name: "Alleppey KSRTC Bus Station" },
      railwayStation: { distance: 6, name: "Alleppey Railway Station" },
      airport: { distance: 90, name: "Cochin International Airport" },
    },

    nearbyPlaces: {
      name: "Marari Beach",
      distance: "2 km",
      description:
        "Quiet beach perfect for swimming, sunbathing, and evening strolls",
    },
  },
  {
    title: "Cottage at Misty Hills",
    description:
      "A charming 2BHK cottage located in the scenic Nilgiri Hills, Ooty. Surrounded by tea plantations and misty hills, perfect for a peaceful long-term stay with easy access to local markets and viewpoints.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-690835481841645105/original/50535577-0c43-45ec-84cc-c314d5522e1d.jpeg",
    },
    price: 28000,
    location: "Ooty, Tamil Nadu",
    country: "India",
    address: "Cottage No. 5, Misty Hills Residency, Fern Hill, Ooty",
    phoneNumber: 9867543129,
    ownerName: "Rekha Iyer",
    propertyType: "Cottage",
    bedrooms: 2,
    bathrooms: 1,
    area: 850,
    amenities: "Garden, Balcony, Parking, Power Backup, Fireplace",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "Ooty Town Center" },
      busStand: { distance: 2.5, name: "Ooty Bus Stand" },
      railwayStation: {
        distance: 3,
        name: "Ooty Nilgiri Mountain Railway Station",
      },
      airport: { distance: 90, name: "Coimbatore International Airport" },
    },

    nearbyPlaces: {
      name: "Ooty Botanical Gardens",
      distance: "2 km",
      description:
        "Famous garden with exotic plants, walking paths, and family-friendly areas",
    },
  },
  {
    title: "Colonial Heritage Townhouse",
    description:
      "Step into history in this 3BHK colonial-style townhouse located in the heritage zone of Kolkata. Modern interiors blended with colonial architecture make it a perfect stay for history enthusiasts and families.",
    image: {
      filename: "listingimage",
      url: "https://assets.architecturaldigest.in/photos/6239f783f0da59bc341a89a7/4:3/w_1440,h_1080,c_limit/Sujata%20Keshavan's%20charming%20colonial-era%20Coonoor%20bungalow%20.jpg",
    },
    price: 45000,
    location: "Kolkata, West Bengal",
    country: "India",
    address: "House No. 12, Heritage Lane, Esplanade, Kolkata",
    phoneNumber: 9830124678,
    ownerName: "Ananya Ghosh",
    propertyType: "Independent House",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    amenities: "Air Conditioning, Garden, Parking, Balcony, WiFi",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 1, name: "Kolkata City Center" },
      busStand: { distance: 0.5, name: "Esplanade Bus Stop" },
      railwayStation: { distance: 3, name: "Kolkata Howrah Railway Station" },
      airport: {
        distance: 18,
        name: "Netaji Subhas Chandra Bose International Airport",
      },
    },

    nearbyPlaces: {
      name: "Victoria Memorial",
      distance: "2 km",
      description:
        "Iconic colonial landmark surrounded by gardens and walking paths",
    },
  },
  {
    title: "Coastal Serenity Beach Bungalow",
    description:
      "A comfortable 2BHK beachfront bungalow in Goa with a private garden and easy access to the beach. Ideal for couples and families seeking sun, sand, and a relaxed coastal lifestyle.",
    image: {
      filename: "listingimage",
      url: "https://media.vrbo.com/lodging/45000000/44070000/44065800/44065719/abbd6c3a.jpg?impolicy=fcrop&w=469&h=201&p=1&q=medium",
    },
    price: 50000,
    location: "Calangute, Goa",
    country: "India",
    address:
      "Bungalow No. 3, Coastal Serenity Estate, Calangute Beach Road, Goa",
    phoneNumber: 9823345671,
    ownerName: "Vinod Fernandes",
    propertyType: "Bungalow",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    amenities: "Private Garden, Parking, WiFi, Sea View Balcony, Power Backup",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 3, name: "Mapusa Town Center" },
      busStand: { distance: 1.5, name: "Calangute Bus Stop" },
      railwayStation: { distance: 25, name: "Thivim Railway Station" },
      airport: { distance: 40, name: "Dabolim Airport" },
    },

    nearbyPlaces: {
      name: "Calangute Beach",
      distance: "0.5 km",
      description:
        "Popular beach with water sports, shacks, and evening markets",
    },
  },

  {
    title: "Himalayan Mountain View Cabin",
    description:
      "A cozy 2BHK wooden cabin nestled in the Himalayas near Manali. Enjoy panoramic mountain views, crisp air, and a peaceful retreat away from city noise. Perfect for long stays or nature enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://hotelhimalayanresort.com/data1/images/11.jpg",
    },
    price: 32000,
    location: "Solang Valley, Manali",
    country: "India",
    address:
      "Cabin No. 7, Solang Heights Residency, Solang Valley, Manali, Himachal Pradesh",
    phoneNumber: 9810234567,
    ownerName: "Rohit Sharma",
    propertyType: "Cabin",
    bedrooms: 2,
    bathrooms: 2,
    area: 850,
    amenities: "Mountain View, Balcony, Garden, Parking, Fireplace",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 8, name: "Manali Town Center" },
      busStand: { distance: 7, name: "Manali Bus Stand" },
      railwayStation: { distance: 135, name: "Joginder Nagar Railway Station" },
      airport: { distance: 55, name: "Kullu-Manali Airport" },
    },

    nearbyPlaces: {
      name: "Rohtang Pass",
      distance: "18 km",
      description:
        "Popular high mountain pass with snow activities and scenic views",
    },
  },
  {
    title: "South Beach Art Deco Apartment",
    description:
      "A stylish 2BHK apartment located in the heart of South Goa’s Calangute Beach area. Inspired by Art Deco design, it offers vibrant interiors, modern comforts, and beach access within walking distance.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/4d9108d7-abf0-4ea3-9592-bdff5161f2c6.jpg",
    },
    price: 38000,
    location: "Calangute, Goa",
    country: "India",
    address: "Flat 305, Ocean Breeze Residency, Calangute Beach Road, Goa",
    phoneNumber: 9823456789,
    ownerName: "Anita Fernandes",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    amenities: "WiFi, Balcony, Air Conditioning, Lift, Parking",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 2.5, name: "Mapusa Market" },
      busStand: { distance: 1.8, name: "Calangute Bus Stop" },
      railwayStation: { distance: 22, name: "Thivim Railway Station" },
      airport: { distance: 40, name: "Dabolim Airport" },
    },

    nearbyPlaces: {
      name: "Calangute Beach",
      distance: "0.3 km",
      description: "Famous sandy beach ideal for water sports and sunset walks",
    },
  },
  {
    title: "Tropical Villa with Infinity Pool",
    description:
      "Luxurious 3BHK villa located in Kovalam, Kerala, featuring a private infinity pool and tropical gardens. Perfect for families or professionals looking for a peaceful coastal retreat with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/b0/23/2b/caption.jpg?w=1200&h=-1&s=1",
    },
    price: 85000,
    location: "Kovalam, Kerala",
    country: "India",
    address: "Villa No. 12, Palm Grove Residency, Lighthouse Road, Kovalam",
    phoneNumber: 9845012345,
    ownerName: "Vijay Nair",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    amenities: "Infinity Pool, Garden, Parking, WiFi, Sea View Balcony",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "Kovalam Town" },
      busStand: { distance: 2, name: "Kovalam Bus Stop" },
      railwayStation: { distance: 16, name: "Thiruvananthapuram Central" },
      airport: { distance: 16, name: "Trivandrum International Airport" },
    },

    nearbyPlaces: {
      name: "Kovalam Beach",
      distance: "0.5 km",
      description:
        "Popular beach with lighthouse views, cafes, and water activities",
    },
  },
  {
    title: "Scottish Highlands Style Castle Stay",
    description:
      "Experience royalty in this heritage-inspired 3BHK castle-style home near Coorg, Karnataka. Surrounded by coffee plantations and misty hills, perfect for a long-term stay in luxury amidst nature.",
    image: {
      filename: "listingimage",
      url: "https://images.jdmagicbox.com/quickquotes/listicle/dp-contract-img-glry_1715336761435_6fz2b_757x558.jpg",
    },
    price: 95000,
    location: "Coorg, Karnataka",
    country: "India",
    address: "Castle No. 1, Highland Residency, Madikeri, Coorg",
    phoneNumber: 9901234567,
    ownerName: "Arjun Reddy",
    propertyType: "Independent House",
    bedrooms: 3,
    bathrooms: 3,
    area: 3000,
    amenities:
      "Garden, Terrace, Parking, Coffee Plantation Views, Power Backup",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 6, name: "Madikeri Town Center" },
      busStand: { distance: 5, name: "Madikeri Bus Stand" },
      railwayStation: { distance: 115, name: "Mysuru Railway Station" },
      airport: { distance: 140, name: "Mangalore International Airport" },
    },

    nearbyPlaces: {
      name: "Abbey Falls",
      distance: "7 km",
      description: "Popular scenic waterfall surrounded by coffee plantations",
    },
  },

  {
    title: "Thar Desert Luxury Villa",
    description:
      "Experience ultimate luxury in this 3BHK desert-style villa located in Jaisalmer, Rajasthan. Complete with a private pool and desert views, perfect for families or long-term stays seeking a unique royal experience.",
    image: {
      filename: "listingimage",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/2a/a1/23/38/pool-and-front.jpg",
    },
    price: 75000,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    address:
      "Villa No. 4, Desert Oasis Residency, Sam Sand Dunes Road, Jaisalmer",
    phoneNumber: 9829012345,
    ownerName: "Rajasthan Royals",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    amenities: "Private Pool, Terrace, Garden, Parking, Air Conditioning",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "Jaisalmer City Center" },
      busStand: { distance: 5, name: "Jaisalmer Bus Stand" },
      railwayStation: { distance: 3, name: "Jaisalmer Railway Station" },
      airport: { distance: 14, name: "Jaisalmer Airport" },
    },

    nearbyPlaces: {
      name: "Sam Sand Dunes",
      distance: "5 km",
      description:
        "Famous desert dunes offering camel rides and desert safaris",
    },
  },
  {
    title: "Rustic Log Cabin in Coorg",
    description:
      "Unplug and unwind in this cozy 2BHK log cabin surrounded by lush coffee plantations in Coorg, Karnataka. Ideal for nature lovers and those seeking a peaceful long-term stay.",
    image: {
      filename: "listingimage",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/1d/38/eb/rooms.jpg",
    },
    price: 28000,
    location: "Coorg, Karnataka",
    country: "India",
    address: "Cabin No. 7, Highland Residency, Madikeri, Coorg",
    phoneNumber: 9901234567,
    ownerName: "Arjun Reddy",
    propertyType: "Cabin",
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    amenities: "Coffee Plantation View, Balcony, Parking, Garden, Fireplace",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 5, name: "Madikeri Town Center" },
      busStand: { distance: 4, name: "Madikeri Bus Stand" },
      railwayStation: { distance: 115, name: "Mysuru Railway Station" },
      airport: { distance: 140, name: "Mangalore International Airport" },
    },

    nearbyPlaces: {
      name: "Abbey Falls",
      distance: "7 km",
      description: "Beautiful waterfall surrounded by coffee plantations",
    },
  },
  {
    title: "Mediterranean Style Beach Villa, Goa",
    description:
      "Luxurious 3BHK beachfront villa in Morjim, Goa, offering stunning sea views, private pool, and modern amenities. Perfect for families or long-term stays near the beach.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449066903.jpg?k=60fae2be80084be5562edbb35000ea4409b8dc76793bb35f8c5219ecb9a29a46&o=",
    },
    price: 95000,
    location: "Morjim, Goa",
    country: "India",
    address: "Villa No. 9, Sea Breeze Residency, Morjim Beach Road, Goa",
    phoneNumber: 9823345678,
    ownerName: "Vinod Fernandes",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    amenities: "Private Pool, Garden, WiFi, Parking, Balcony with Sea View",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "Mapusa Town Center" },
      busStand: { distance: 3, name: "Morjim Bus Stop" },
      railwayStation: { distance: 25, name: "Thivim Railway Station" },
      airport: { distance: 40, name: "Dabolim Airport" },
    },

    nearbyPlaces: {
      name: "Morjim Beach",
      distance: "0.2 km",
      description:
        "Tranquil beach ideal for sunbathing, water sports, and evening strolls",
    },
  },
  {
    title: "Eco-Friendly Treehouse in Coorg",
    description:
      "Stay in this eco-friendly 1BHK treehouse surrounded by lush forests and coffee plantations in Coorg, Karnataka. Perfect for nature lovers seeking a calm, unique living experience.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcLCbUIryENeSxyCqn-tNEnZRvs66mobSTA&s",
    },
    price: 20000,
    location: "Coorg, Karnataka",
    country: "India",
    address: "Treehouse No. 2, Green Haven Eco Retreat, Madikeri, Coorg",
    phoneNumber: 9812345670,
    ownerName: "Sneha Menon",
    propertyType: "Treehouse",
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    amenities: "Balcony, Forest View, Eco-Friendly, Garden, Parking",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 6, name: "Madikeri Town Center" },
      busStand: { distance: 5, name: "Madikeri Bus Stand" },
      railwayStation: { distance: 115, name: "Mysuru Railway Station" },
      airport: { distance: 140, name: "Mangalore International Airport" },
    },

    nearbyPlaces: {
      name: "Raja’s Seat",
      distance: "4 km",
      description:
        "Scenic viewpoint offering panoramic views of Coorg hills and valleys",
    },
  },

  {
    title: "Heritage Cottage in Udaipur",
    description:
      "Experience the charm of Udaipur in this beautifully restored 2BHK heritage cottage with a private garden and traditional Rajasthani decor. Perfect for long-term stays or a cozy retreat in the city of lakes.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJM74YjUqbkCnHc3SjNxNu3uBLhd7bw0wGw&s",
    },
    price: 45000,
    location: "Udaipur, Rajasthan",
    country: "India",
    address: "Cottage No. 3, Lakeview Residency, Fateh Sagar Road, Udaipur",
    phoneNumber: 9823456710,
    ownerName: "Ramesh Singh",
    propertyType: "Cottage",
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    amenities: "Garden, Terrace, Parking, WiFi, Lake View",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 3, name: "Udaipur City Center" },
      busStand: { distance: 2, name: "Udaipur Bus Stand" },
      railwayStation: { distance: 5, name: "Udaipur Railway Station" },
      airport: { distance: 22, name: "Maharana Pratap Airport" },
    },

    nearbyPlaces: {
      name: "Fateh Sagar Lake",
      distance: "1 km",
      description: "Serene lake perfect for boat rides and evening strolls",
    },
  },
  {
    title: "Modern Apartment in Mumbai",
    description:
      "Stay in this centrally located 2BHK apartment in Mumbai with modern interiors and easy access to city attractions. Ideal for professionals or long-term rentals.",
    image: {
      filename: "listingimage",
      url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/215428231.jpg?k=b3ca3ecc82f9a501e135db97957340687dde8607bf768aaebb8e15781dcdedb1&o=",
    },
    price: 70000,
    location: "Bandra, Mumbai",
    country: "India",
    address: "Flat No. 502, Skyline Residency, Linking Road, Bandra, Mumbai",
    phoneNumber: 9812345678,
    ownerName: "Priya Mehta",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    amenities: "WiFi, Air Conditioning, Balcony, Lift, Parking",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 4, name: "Bandra West Market" },
      busStand: { distance: 1, name: "Bandra Bus Stop" },
      railwayStation: { distance: 2, name: "Bandra Railway Station" },
      airport: { distance: 12, name: "Chhatrapati Shivaji Airport" },
    },

    nearbyPlaces: {
      name: "Bandra Fort",
      distance: "2 km",
      description: "Historic fort with sea views and a popular sunset spot",
    },
  },
  {
    title: "Lakefront Cabin in Nainital",
    description:
      "Cozy 1BHK cabin by the picturesque Naini Lake in Nainital. Ideal for a peaceful long-term stay amidst the hills with easy access to local attractions.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35bS7dWdFHahB6L50pDdGRy4M3coOFdFBuA&s",
    },
    price: 30000,
    location: "Nainital, Uttarakhand",
    country: "India",
    address: "Cabin No. 6, Lakeview Residency, Mall Road, Nainital",
    phoneNumber: 9876543210,
    ownerName: "Vikram Singh",
    propertyType: "Cabin",
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    amenities: "Lake View, Balcony, Garden, Parking, WiFi",
    furnished: "Semi",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 1, name: "Nainital Market" },
      busStand: { distance: 1.5, name: "Nainital Bus Stand" },
      railwayStation: { distance: 35, name: "Kathgodam Railway Station" },
      airport: { distance: 70, name: "Pantnagar Airport" },
    },

    nearbyPlaces: {
      name: "Naini Lake",
      distance: "0.2 km",
      description: "Popular lake for boating and scenic views in the hills",
    },
  },
  {
    title: "Luxury Overwater Villa in Andaman",
    description:
      "Experience overwater living in this 3BHK luxury villa in Havelock Island, Andaman. Stunning ocean views, private deck, and modern amenities for a perfect long-term stay.",
    image: {
      filename: "listingimage",
      url: "https://media.licdn.com/dms/image/v2/D5612AQF2x_LG1ghvlA/article-cover_image-shrink_600_2000/B56ZZMvF52GQAQ-/0/1745044136018?e=2147483647&v=beta&t=YFb81woBQ71j8CaBoPPKPj6yNUZ8wMNqr5g6RrhcfNQ",
    },
    price: 120000,
    location: "Havelock Island, Andaman & Nicobar",
    country: "India",
    address: "Villa No. 5, Oceanic Residency, Beachfront Road, Havelock Island",
    phoneNumber: 9934567890,
    ownerName: "Rakesh Verma",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    amenities: "Overwater Deck, Private Pool, WiFi, Garden, Sea View",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 2, name: "Havelock Market" },
      busStand: { distance: 2, name: "Havelock Bus Stop" },
      railwayStation: { distance: 0, name: "No Rail Connectivity" },
      airport: { distance: 50, name: "Veer Savarkar Airport, Port Blair" },
    },

    nearbyPlaces: {
      name: "Radhanagar Beach",
      distance: "1 km",
      description: "Famous white sand beach ideal for swimming and relaxation",
    },
  },

  {
    title: "Snowview Chalet in Auli",
    description:
      "Enjoy breathtaking Himalayan views in this cozy 2BHK chalet in Auli, Uttarakhand. Perfect for skiing enthusiasts and winter-long stays with modern amenities and a warm ambiance.",
    image: {
      filename: "listingimage",
      url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/333979600.jpg?k=ae4c884ddcf342c1fcaa625ed08ce5acab67d925cc410b2b029eff857af37421&o=",
    },
    price: 45000,
    location: "Auli, Uttarakhand",
    country: "India",
    address:
      "Chalet No. 12, Snowview Residency, Auli Ski Resort Road, Uttarakhand",
    phoneNumber: 9811223344,
    ownerName: "Rohan Sharma",
    propertyType: "Chalet",
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    amenities: "Ski Access, Balcony, Heating, WiFi, Parking",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 5, name: "Auli Market" },
      busStand: { distance: 3, name: "Joshimath Bus Stand" },
      railwayStation: { distance: 280, name: "Haridwar Railway Station" },
      airport: { distance: 300, name: "Dehradun Airport" },
    },

    nearbyPlaces: {
      name: "Auli Ski Slopes",
      distance: "0.5 km",
      description:
        "Famous slopes ideal for skiing, snowboarding, and winter sports",
    },
  },
  {
    title: "Secluded Beach House in Gokarna",
    description:
      "Escape to this serene 3BHK beach house on Om Beach, Gokarna, Karnataka. Enjoy sunbathing, surfing, and peaceful long-term stays with oceanfront views.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/40/58/81/deva-samudra-beach-stay.jpg?w=700&h=-1&s=1",
    },
    price: 55000,
    location: "Gokarna, Karnataka",
    country: "India",
    address: "Beach House No. 7, Om Beach Residency, Gokarna",
    phoneNumber: 9901122334,
    ownerName: "Anjali Rao",
    propertyType: "Beach House",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    amenities: "Beachfront, Balcony, Garden, WiFi, Parking",
    furnished: "Fully",
    isAvailable: true,

    nearbyEssentials: {
      cityCenter: { distance: 3, name: "Gokarna Town Center" },
      busStand: { distance: 4, name: "Gokarna Bus Stand" },
      railwayStation: { distance: 25, name: "Karwar Railway Station" },
      airport: { distance: 160, name: "Dabolim Airport, Goa" },
    },

    nearbyPlaces: {
      name: "Om Beach",
      distance: "0.1 km",
      description:
        "Peaceful crescent-shaped beach ideal for surfing and relaxation",
    },
  },
];

module.exports = { data: sampleListings };
