import React, { useState, useEffect } from "react";
import { Star, ThumbsUp, ThumbsDown, Link, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
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
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
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
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
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
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    date: "Mar 20, 2023",
    helpful: 5,
    notHelpful: 0,
  },
];

const RatingBar: React.FC<{ percentage: number; className?: string }> = ({
  percentage,
  className,
}) => <Progress value={percentage} className={`h-2.5 ${className}`} />;

export const ProductReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isLoading, setIsLoading] = useState(true);

  const overallRating = 4.1;
  const totalReviews = 43;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return <ProductReviewsSkeleton />;
  }

  return (
    <Card className="mx-auto mt-8 rounded-b-md rounded-t-none border-none">
      <CardHeader>
        <CardTitle>Rating & Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8 mb-8 border p-5">
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="text-6xl font-bold text-primary mb-2">
              {overallRating}
              <span className="text-2xl text-color-ternary">/5</span>
            </div>
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.round(overallRating)
                      ? "text-orange-400 fill-orange-400"
                      : "text-orange-400"
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
                <Star className="w-4 h-4 text-orange-400 fill-orange-400 mx-1" />
                <RatingBar
                  className="*:bg-orange-400"
                  percentage={Math.random() * 100}
                />
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-3 bg-muted p-4 rounded-md bg-gray-100 text-center">
            <h3 className="text-xl font-semibold text-primary">
              Have you used this product?
            </h3>
            <p className="text-base font-medium text-color-ternary">
              Rate it Now
            </p>
            <Button className="bg-primary rounded-sm hover:bg-primary/80">
              WRITE A REVIEW
            </Button>
          </div>
        </div>
        <div className="mb-4 flex justify-between items-center bg-gray-100 h-min xs:h-12 px-4 font-medium">
          <span className="text-sm text-color-ternary">
            Displaying Reviews 1-5 of 100
          </span>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              Most Helpful
            </Button>
            <Button variant="ghost" size="sm">
              Most Recent
            </Button>
          </div>
        </div>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="py-4 flex flex-col sm:flex-row items-start md:items-center"
          >
            <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-4 sm:min-w-[200px] mx-auto">
              <Avatar className="w-16 h-16 mb-2">
                <AvatarImage src={review.avatar} alt={review.user} />
                <AvatarFallback>{review.user[0]}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-bold">{review.user}</div>
                <div className="text-sm text-color-ternary">{review.date}</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center sm:justify-normal mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? "text-orange-400 fill-orange-400"
                        : "text-orange-400"
                    }`}
                  />
                ))}
              </div>
              <h3 className="font-bold mb-2">{review.title}</h3>
              <p className="text-color-ternary mb-2 text-justify">
                <span className="line-clamp-4">{review.content}</span>
                <button className="ml-auto">see more..</button>
              </p>
              <div className="flex flex-col xs:flex-row sm:items-center sm:justify-between text-sm">
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-color-ternary hover:text-foreground"
                    onClick={() => handleHelpful(review.id, true)}
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" /> Yes ({review.helpful})
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-color-ternary hover:text-foreground"
                    onClick={() => handleHelpful(review.id, false)}
                  >
                    <ThumbsDown className="w-4 h-4 mr-1" /> No (
                    {review.notHelpful})
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-color-ternary hover:text-foreground"
                  >
                    <Link className="w-4 h-4 mr-1" /> Permalink
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-color-ternary hover:text-foreground"
                  >
                    <Flag className="w-4 h-4 mr-1" /> Report Abuse
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-8">
          <Button variant="outline">VIEW MORE</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductReviewsSkeleton: React.FC = () => {
  return (
    <Card className="mx-auto mt-8 rounded-b-md rounded-t-none border-none">
      <CardHeader>
        <Skeleton className="h-8 w-48" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-8 mb-8 border p-5">
          <div className="flex-1 flex flex-col justify-center items-center">
            <Skeleton className="h-16 w-24 mb-2" />
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-40" />
          </div>
          <div className="flex-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center mb-2">
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-3 bg-muted p-4 rounded-md">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
        <Skeleton className="h-12 w-full mb-4" />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="py-4 flex flex-col sm:flex-row items-start md:items-center"
          >
            <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-4 sm:min-w-[200px] mx-auto">
              <Skeleton className="w-16 h-16 rounded-full mb-2" />
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-3 w-20" />
            </div>
            <div className="flex-1 w-full sm:w-auto">
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <div className="flex justify-between w-full">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-8">
          <Skeleton className="h-10 w-32 mx-auto" />
        </div>
      </CardContent>
    </Card>
  );
};
