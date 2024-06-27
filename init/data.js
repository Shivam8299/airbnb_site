const sampleListings = [
  {
      "title": "Charming Cottage",
      "discription": "A lovely cottage in the countryside.",
      "image": "https://www.airbnb.co.in/rooms/694576369161952366?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1490989377&search_mode=flex_destinations_search&check_in=2024-07-01&check_out=2024-07-06&source_impression_id=p3_1719513506_P3EZP70Z_FC6P9Tg&previous_page_section_name=1000&federated_search_id=2165ccfe-3549-42f8-aefe-fa97fb16853e",
      "location": "Devon",
      "country": "UK",
      "price": 120
  },
  {
      "title": "Beachfront Villa",
      "discription":"Luxurious villa with a stunning ocean view.",
      "image": "https://www.airbnb.co.in/rooms/36774428?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1663065085&search_mode=flex_destinations_search&check_in=2024-07-06&check_out=2024-07-11&source_impression_id=p3_1719513506_P3vWRWU1YhdGiz5N&previous_page_section_name=1000&federated_search_id=2165ccfe-3549-42f8-aefe-fa97fb16853e",
      "location": "Malibu",
      "country": "USA",
      "price": 500
  },
  {
      "title": "Modern Apartment",
      "discription": "https://unsplash.com/photos/blue-outdoor-pool-hDbCjHNdF48",
      "image": "https://a0.muscache.com/im/pictures/cde2916e-eb85-4020-8a5f-fba017eddec8.jpg?im_w=720",
      "location": "New York",
      "country": "USA",
      "price": 300
  },
  {
      "title": "Mountain Cabin",
      "discription": "Cozy cabin in the mountains, perfect for a getaway.",
      "image": "https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720",
      "location": "Aspen",
      "country": "USA",
      "price": 250
  },
  {
      "title": "Luxury Condo",
      "discription": "High-end condo with modern amenities.",
      "image": "https://a0.muscache.com/im/pictures/709372cd-033b-4b9a-8c01-cc46fc70c851.jpg?im_w=720",
      "location": "Toronto",
      "country": "Canada",
      "price": 400
  },
  {
      "title": "Rustic Farmhouse",
      "discription": "A rustic farmhouse surrounded by nature.",
      "image": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NjMzMTMyNTM4MjI1NjIyOQ%3D%3D/original/54067533-a8cf-406a-9d21-856cc71cd743.jpeg?im_w=720",
      "location": "Tuscany",
      "country": "Italy",
      "price": 200
  },
  {
      "title": "Urban Loft",
      "discription": "Stylish loft in the heart of the city.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-854065432551935839/original/270e6f4f-5fea-4117-a552-523370f62a74.jpeg?im_w=720",
      "location": "San Francisco",
      "country": "USA",
      "price": 350
  },
  {
      "title": "Coastal Cottage",
      "discription": "A charming cottage by the sea.",
      "image": "https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg?im_w=720",
      "location": "Cornwall",
      "country": "UK",
      "price": 180
  },
  {
      "title": "Historic Home",
      "discription": "Beautiful home with a rich history.",
      "image": "https://a0.muscache.com/im/pictures/hosting/Hosting-984786254699522803/original/f85b7184-7428-47fa-a41d-8b5dbc9a8eda.jpeg?im_w=720",
      "location": "Charleston",
      "country": "USA",
      "price": 270
  },
  {
      "title": "Ski Chalet",
      "discription": "Perfect chalet for winter sports enthusiasts.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-1007128064099565412/original/fd637337-76b2-4ff3-84dd-ffa38da7af04.jpeg?im_w=720",
      "location": "Chamonix",
      "country": "France",
      "price": 350
  },
  {
      "title": "Tropical Bungalow",
      "discription": "Bungalow in a tropical paradise.",
      "image": "https://www.airbnb.co.in/rooms/16105121?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1225214939&search_mode=flex_destinations_search&check_in=2024-07-07&check_out=2024-07-12&source_impression_id=p3_1719513724_P380H1h8Hp-KeYG3&previous_page_section_name=1000",
      "location": "Bali",
      "country": "Indonesia",
      "price": 220
  },
  {
      "title": "Penthouse Suite",
      "discription": "Top-floor suite with panoramic views.",
      "image": "https://a0.muscache.com/im/pictures/d4b3827c-7b6a-441a-80ce-cbebe9bc3398.jpg?im_w=720",
      "location": "Miami",
      "country": "USA",
      "price": 600
  },
  {
      "title": "Countryside Retreat",
      "discription": "Relaxing retreat in the countryside.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-724529680708654018/original/2da96054-e96d-4e40-b009-63937072a54f.jpeg?im_w=720",
      "location": "Cotswolds",
      "country": "UK",
      "price": 210
  },
  {
      "title": "City Studio",
      "discription": "Compact studio in the bustling city.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-1007746897716439248/original/01d98e6b-b9a7-4909-9e30-3e8aca3d7d0f.jpeg?im_w=720",
      "location": "Tokyo",
      "country": "Japan",
      "price": 280
  },
  {
      "title": "Beach House",
      "discription": "House right on the beach.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-54175042/original/388d208e-09dc-4db0-92bf-b9c7505de84c.jpeg?im_w=720",
      "location": "Bondi Beach",
      "country": "Australia",
      "price": 320
  },
  {
      "title": "Eco Lodge",
      "discription": "Eco-friendly lodge in a natural setting.",
      "image": "https://a0.muscache.com/im/pictures/hosting/Hosting-1056197744907607793/original/d727b657-c9b9-409c-b52e-9259a5e8050f.jpeg?im_w=720",
      "location": "Costa Rica",
      "country": "Costa Rica",
      "price": 240
  },
  {
      "title": "Desert Oasis",
      "discription": "Oasis in the middle of the desert.",
      "image": "https://a0.muscache.com/im/pictures/4ee8cab1-ae80-43a2-af79-39c6f51edf9f.jpg?im_w=720",
      "location": "Marrakech",
      "country": "Morocco",
      "price": 260
  },
  {
      "title": "Lake House",
      "discription": "House with a beautiful lake view.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-35135310/original/2d1de7f3-28d2-4bfb-9db3-fb9a29624a74.jpeg?im_w=720",
      "location": "Lake Tahoe",
      "country": "USA",
      "price": 290
  },
  {
      "title": "Forest Cabin",
      "discription": "Secluded cabin in the forest.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-665015970482989205/original/418f18b6-5dd4-4f5d-b381-97c05acc2035.jpeg?im_w=720",
      "location": "Black Forest",
      "country": "Germany",
      "price": 230
  },
  {
      "title": "Urban Flat",
      "discription": "Modern flat in a vibrant urban area.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-44650945/original/9790911e-23ad-415e-beab-996739eaac85.jpeg?im_w=720",
      "location": "Berlin",
      "country": "Germany",
      "price": 310
  },
  {
      "title": "Island Villa",
      "discription": "Private villa on an exclusive island.",
      "image": "https://a0.muscache.com/im/pictures/f8902488-8eb7-4add-a928-abc708540bb0.jpg?im_w=720",
      "location": "Maldives",
      "country": "Maldives",
      "price": 800
  },
  {
      "title": "Riverside Cottage",
      "discription": "Cottage by the river with scenic views.",
      "image": "https://a0.muscache.com/im/pictures/d011dba5-c676-4987-865e-64c4725bc753.jpg?im_w=720",
      "location": "Portland",
      "country": "USA",
      "price": 220
  },
  {
      "title": "Historic Townhouse",
      "discription": "Charming townhouse with historical significance.",
      "image": "https://a0.muscache.com/im/pictures/fe915035-4429-4c3a-8c59-7d29c969aef4.jpg?im_w=720",
      "location": "Edinburgh",
      "country": "UK",
      "price": 280
  },
  {
      "title": "Country Manor",
      "discription": "Elegant manor in the countryside.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-719778597938069068/original/e5778d41-f5e8-4bf0-bfe9-26ff81f7b75a.jpeg?im_w=720",
      "location": "Oxford",
      "country": "UK",
      "price": 450
  },
  {
      "title": "Seaside Apartment",
      "discription": "Apartment with sea views.",
      "image": "https://a0.muscache.com/im/pictures/ee50fbd7-872c-4d35-a2f0-948f62556631.jpg?im_w=720",
      "location": "Barcelona",
      "country": "Spain",
      "price": 300
  },
  {
      "title": "Hilltop House",
      "discription": "House with stunning hilltop views.",
      "image": "https://a0.muscache.com/im/pictures/miso/Hosting-854065432551935839/original/270e6f4f-5fea-4117-a552-523370f62a74.jpeg?im_w=720",
      "location": "San Diego",
      "country": "USA",
      "price": 350
  },
  {
      "title": "Ski Lodge",
      "discription": "Lodge ideal for skiing and snowboarding.",
      "image": "https://a0.muscache.com/im/pictures/709372cd-033b-4b9a-8c01-cc46fc70c851.jpg?im_w=720",
      "location": "Whistler",
      "country": "Canada",
      "price": 400
  },
  {
      "title": "Modern Townhouse",
      "discription": "Contemporary townhouse in a quiet neighborhood.",
      "image": "https://www.airbnb.co.in/rooms/882303022321667624?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1765500758&search_mode=flex_destinations_search&check_in=2024-07-01&check_out=2024-07-06&source_impression_id=p3_1719513724_P3HIUECPpHI_HDgH&previous_page_section_name=1000",
      "location": "Melbourne",
      "country": "Australia",
      "price": 320
  },
  {
      "title": "Cozy Bungalow",
      "discription": "Bungalow with a homey atmosphere.",
      "image": "https://a0.muscache.com/im/pictures/221547f1-5175-423d-9218-a57aad0f0350.jpg?im_w=720",
      "location": "Hawaii",
      "country": "USA",
      "price": 270
  },
  {
      "title": "Mountain Lodge",
      "discription": "Lodge in the mountains with great views.",
      "image": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzMwMzEzNDY5NzU0MDM1ODA2/original/f60e9117-f3d7-43d8-bab6-718a40378ad2.jpeg?im_w=720",
      "location": "Banff",
      "country": "Canada",
      "price": 310
  }
]

module.exports = {data:sampleListings}
  