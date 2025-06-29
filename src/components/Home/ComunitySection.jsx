import React from "react";
import Slider from "react-slick";
import { ThumbsUp, Share2, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "Sushi",
    user: { name: "David Kim", avatar: "https://randomuser.me/api/portraits/men/50.jpg" },
    comment: "The sushi was fresh and flavorful — just like the one I had in Tokyo!",
    rating: 4,
    likes: 3,
    image: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
  },
  {
    id: 2,
    title: "Beef Lo Mein",
    user: { name: "Lady Rudy", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    comment: "Loved the savory sauce! My whole family enjoyed this Beef Lo Mein.",
    rating: 5,
    likes: 2,
    image: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
  },
  {
    id: 3,
    title: "Mbuzi Choma (Roasted Goat)",
    user: { name: "Emily Rose", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    comment: "This roasted goat recipe was bold, tender, and full of flavor!",
    rating: 5,
    likes: 5,
    image: "https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg",
  },
  {
    id: 4,
    title: "Nasi lemak",
    user: { name: "John Lee", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    comment: "Brings back childhood memories. The sambal was perfectly spicy!",
    rating: 5,
    likes: 7,
    image: "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
  },
  {
    id: 5,
    title: "Salmon Avocado Salad",
    user: { name: "Sofia Gomez", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
    comment: "Refreshing, healthy, and surprisingly filling. Loved the dressing!",
    rating: 4,
    likes: 4,
    image: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
  },
];


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CommunitySection = () => {
  return (
    <section className="w-full px-6 py-8 md:px-24 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Community Says</h2>
      <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.id} className="px-3 py-6">
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 h-full">
              {/* Header */}
              <div className="flex items-center gap-3">
                <img
                  src={item.user.avatar}
                  alt={item.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.user.name}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm">{item.comment}</p>

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 rounded-xl object-cover"
              />

              {/* Actions */}
              <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                <div className="flex items-center gap-2">
                  <ThumbsUp size={16} /> {item.likes}
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-700">
                  <Share2 size={16} />
                  Share
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CommunitySection;
