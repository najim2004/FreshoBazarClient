import React, { useState } from "react";
import { Star, ThumbsUp, ThumbsDown, Link, Flag } from "lucide-react";

interface Review {
  id: number;
  user: string;
  avatar?: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  notHelpful: number;
}

const initialReviews: Review[] = [
  {
    id: 1,
    user: "Adam Green",
    rating: 3,
    title: "Awesome Product and On time Delivery",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit...",
    date: "Jan 01, 2023",
    helpful: 20,
    notHelpful: 2,
  },
  {
    id: 2,
    user: "Mark Boucher",
    rating: 4,
    title: "That's Good Stuff",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
    date: "Jan 20, 2023",
    helpful: 15,
    notHelpful: 1,
  },
  {
    id: 3,
    user: "Nathan Kane",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3,
    title: "Absolute Stunner and Impressive",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
    date: "Feb 15, 2023",
    helpful: 10,
    notHelpful: 0,
  },
  {
    id: 4,
    user: "Stephen Fleming",
    rating: 3,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    date: "Mar 03, 2023",
    helpful: 8,
    notHelpful: 1,
  },
  {
    id: 5,
    user: "Nathan Kane",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3,
    title: "Absolute Stunner and Impressive",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
    date: "Mar 20, 2023",
    helpful: 5,
    notHelpful: 0,
  },
];

const RatingBar: React.FC<{ percentage: number }> = ({ percentage }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className="bg-orange-400 h-2.5 rounded-full"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

export const ProductReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const overallRating = 4.1;
  const totalReviews = 43;

  const handleHelpful = (id: number, isHelpful: boolean) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === id) {
          return {
            ...review,
            helpful: isHelpful ? review.helpful + 1 : review.helpful,
            notHelpful: !isHelpful ? review.notHelpful + 1 : review.notHelpful,
          };
        }
        return review;
      })
    );
  };

  return (
    <div className="mx-auto p-4 bg-white mt-8 rounded-b-md">
      <h2 className="text-2xl font-bold mb-4">Rating & Reviews</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8 border p-5">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="text-6xl font-bold text-color-primary mb-2">
            {overallRating}
            <span className="text-2xl text-gray-500">/5</span>
          </div>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`size-6 ${
                  star <= Math.round(overallRating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-color-ternary">
            Based on {totalReviews} reviews
          </div>
        </div>
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center mb-2">
              <span className="w-3">{rating}</span>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mx-1" />
              <RatingBar percentage={Math.random() * 100} />
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center space-y-3 bg-gray-100 rounded-md">
          <h3 className="text-2xl font-semibold text-color-primary">
            Have you used this product?
          </h3>
          <p className="text-base font-medium text-color-ternary">
            Rate it Now
          </p>
          <button className="bg-primary text-white py-3 px-4 rounded hover:bg-primary/80 transition duration-300 font-medium">
            WRITE A REVIEW
          </button>
        </div>
      </div>
      <div className="mb-4 flex justify-between items-center bg-gray-100 h-12 px-4 font-medium">
        <span className="text-sm text-gray-500">
          Displaying Reviews 1-5 of 100
        </span>
        <div className="flex gap-2">
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Most Helpful
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Most Recent
          </button>
        </div>
      </div>
      {reviews.map((review) => (
        <div key={review.id} className="py-4 flex items-center">
          <div className="flex flex-col items-center mb-2 min-w-[300px]">
            {review.avatar ? (
              <img
                src={review.avatar}
                alt={review.user}
                className="size-16 rounded-full mr-3"
              />
            ) : (
              <div className="size-16 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-gray-600">
                  {review.user[0]}
                </span>
              </div>
            )}
            <div>
              <div className="font-bold">{review.user}</div>
              <div className="text-sm text-gray-500">{review.date}</div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= review.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <h3 className="font-bold mb-2">{review.title}</h3>
            <p className="text-gray-600 mb-2">{review.content}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => handleHelpful(review.id, true)}
                >
                  <ThumbsUp className="w-4 h-4 mr-1" /> Yes ({review.helpful})
                </button>
                <button
                  className="flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => handleHelpful(review.id, false)}
                >
                  <ThumbsDown className="w-4 h-4 mr-1" /> No (
                  {review.notHelpful})
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <Link className="w-4 h-4 mr-1" /> Permalink
                </button>
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <Flag className="w-4 h-4 mr-1" /> Report Abuse
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center mt-8">
        <button className="text-gray-700 py-2 px-4 rounded hover:underline font-medium">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};
