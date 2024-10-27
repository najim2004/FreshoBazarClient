import { ProductImgSlider } from "@/components/product/ProductImgSlider";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export const ProductDetails: React.FC = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="h-[calc(100vh-200px)] flex gap-8 *:flex-1">
        <ProductImgSlider />
        <ProductInfo />
      </div>
      <RelatedProducts />
    </div>
  );
};

// import React, { useState } from "react";
// import {
//   Star,
//   Leaf,
//   MapPin,
//   Truck,
//   Calendar,
//   Clock,
//   MessageCircle,
// } from "lucide-react";

// interface Review {
//   id: number;
//   author: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// interface Farmer {
//   id: number;
//   name: string;
//   experience: string;
//   practices: string;
//   testimonial: string;
//   imageUrl: string;
// }

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   unit: string;
//   images: string[];
//   labels: string[];
//   description: string;
//   origin: {
//     location: string;
//     farmName: string;
//     background: string;
//   };
//   harvestDate: string;
//   shelfLife: string;
//   availability: {
//     status: string;
//     restock?: string;
//   };
//   delivery: {
//     options: string[];
//     paymentStructure: string;
//     estimatedDate: string;
//   };
//   farmer: Farmer;
//   reviews: Review[];
// }

// interface RelatedProduct {
//   id: number;
//   name: string;
//   imageUrl: string;
//   price: number;
//   unit: string;
// }

// const dummyProduct: Product = {
//   id: 1,
//   name: "Organic Red Tomatoes",
//   price: 2.99,
//   unit: "kg",
//   images: [
//     "/placeholder.svg?height=400&width=600&text=Tomato+1",
//     "/placeholder.svg?height=400&width=600&text=Tomato+2",
//     "/placeholder.svg?height=400&width=600&text=Tomato+3",
//   ],
//   labels: ["Organic", "Pesticide-Free", "Farm Fresh"],
//   description:
//     "Our organic red tomatoes are bursting with flavor and nutrition. Perfect for salads, sauces, or eating fresh. Rich in lycopene and vitamins A and C, these tomatoes are not only delicious but also great for your health.",
//   origin: {
//     location: "Dhaka Division, Bangladesh",
//     farmName: "Green Valley Organic Farm",
//     background:
//       "Our farm has been in the family for three generations, committed to organic farming practices that nurture the soil and produce the healthiest crops possible.",
//   },
//   harvestDate: "2024-10-25",
//   shelfLife: "7-10 days when refrigerated",
//   availability: {
//     status: "In Stock",
//   },
//   delivery: {
//     options: ["Home Delivery", "Farm Pickup"],
//     paymentStructure: "50% advance, 50% on delivery",
//     estimatedDate: "Within 2 days of order",
//   },
//   farmer: {
//     id: 1,
//     name: "Abdul Rahman",
//     experience: "25 years in organic farming",
//     practices: "Crop rotation, natural pest control, water conservation",
//     testimonial:
//       "I believe in growing food that's good for both people and the planet. Every tomato from our farm is a testament to sustainable agriculture.",
//     imageUrl: "/placeholder.svg?height=150&width=150&text=Abdul+Rahman",
//   },
//   reviews: [
//     {
//       id: 1,
//       author: "Fatima K.",
//       rating: 5,
//       comment:
//         "These tomatoes are incredibly fresh and flavorful. You can really taste the difference!",
//       date: "2024-10-20",
//     },
//     {
//       id: 2,
//       author: "Rahim M.",
//       rating: 4,
//       comment: "Great quality tomatoes. They make my salads taste amazing.",
//       date: "2024-10-18",
//     },
//   ],
// };

// const relatedProducts: RelatedProduct[] = [
//   {
//     id: 2,
//     name: "Organic Cucumbers",
//     imageUrl: "/placeholder.svg?height=200&width=200&text=Cucumbers",
//     price: 1.99,
//     unit: "kg",
//   },
//   {
//     id: 3,
//     name: "Fresh Lettuce",
//     imageUrl: "/placeholder.svg?height=200&width=200&text=Lettuce",
//     price: 1.49,
//     unit: "head",
//   },
//   {
//     id: 4,
//     name: "Bell Peppers",
//     imageUrl: "/placeholder.svg?height=200&width=200&text=Bell+Peppers",
//     price: 3.99,
//     unit: "kg",
//   },
// ];

// export const ProductDetails = () => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [question, setQuestion] = useState("");

//   const averageRating =
//     dummyProduct.reviews.reduce((acc, review) => acc + review.rating, 0) /
//     dummyProduct.reviews.length;

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div>
//           <div className="mb-4">
//             <img
//               src={dummyProduct.images[selectedImage]}
//               alt={dummyProduct.name}
//               className="rounded-lg object-cover w-full h-[400px]"
//             />
//           </div>
//           <div className="flex space-x-4">
//             {dummyProduct.images.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`border-2 rounded-md overflow-hidden ${
//                   selectedImage === index
//                     ? "border-green-500"
//                     : "border-gray-200"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt={`${dummyProduct.name} ${index + 1}`}
//                   className="object-cover size-[100px]"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             {dummyProduct.name}
//           </h1>
//           <div className="flex items-center mb-4">
//             <span className="text-2xl font-bold text-green-600 mr-2">
//               ${dummyProduct.price.toFixed(2)}
//             </span>
//             <span className="text-gray-600">per {dummyProduct.unit}</span>
//           </div>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {dummyProduct.labels.map((label, index) => (
//               <span
//                 key={index}
//                 className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center"
//               >
//                 <Leaf className="w-3 h-3 mr-1" />
//                 {label}
//               </span>
//             ))}
//           </div>
//           <p className="text-gray-700 mb-6">{dummyProduct.description}</p>
//           <div className="bg-green-50 rounded-lg p-4 mb-6">
//             <h2 className="font-semibold text-green-800 mb-2">Origin</h2>
//             <p className="text-sm text-gray-600 mb-2">
//               <MapPin className="inline w-4 h-4 mr-1" />
//               {dummyProduct.origin.location} - {dummyProduct.origin.farmName}
//             </p>
//             <p className="text-sm text-gray-600">
//               {dummyProduct.origin.background}
//             </p>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div>
//               <h3 className="font-semibold text-gray-700">Harvest Date</h3>
//               <p className="text-sm text-gray-600 flex items-center">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 {new Date(dummyProduct.harvestDate).toLocaleDateString()}
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-700">Shelf Life</h3>
//               <p className="text-sm text-gray-600 flex items-center">
//                 <Clock className="w-4 h-4 mr-1" />
//                 {dummyProduct.shelfLife}
//               </p>
//             </div>
//           </div>
//           <div className="bg-blue-50 rounded-lg p-4 mb-6">
//             <h2 className="font-semibold text-blue-800 mb-2">
//               Availability & Delivery
//             </h2>
//             <p className="text-sm text-gray-600 mb-2">
//               Status:{" "}
//               <span className="font-semibold text-green-600">
//                 {dummyProduct.availability.status}
//               </span>
//               {dummyProduct.availability.restock &&
//                 ` (Restock: ${dummyProduct.availability.restock})`}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               <Truck className="inline w-4 h-4 mr-1" />
//               Options: {dummyProduct.delivery.options.join(", ")}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               Payment: {dummyProduct.delivery.paymentStructure}
//             </p>
//             <p className="text-sm text-gray-600">
//               Estimated Delivery: {dummyProduct.delivery.estimatedDate}
//             </p>
//           </div>
//           <button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Farmer Profile */}
//       <div className="mt-12 bg-gray-50 rounded-lg p-6">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Meet Your Farmer
//         </h2>
//         <div className="flex items-start space-x-4">
//           <img
//             src={dummyProduct.farmer.imageUrl}
//             alt={dummyProduct.farmer.name}
//             className="rounded-full size-[100px]"
//           />
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">
//               {dummyProduct.farmer.name}
//             </h3>
//             <p className="text-gray-600 mb-2">
//               {dummyProduct.farmer.experience}
//             </p>
//             <p className="text-gray-600 mb-4">
//               Practices: {dummyProduct.farmer.practices}
//             </p>
//             <blockquote className="italic text-gray-700">
//               "{dummyProduct.farmer.testimonial}"
//             </blockquote>
//           </div>
//         </div>
//       </div>

//       {/* Reviews */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Customer Reviews
//         </h2>
//         <div className="flex items-center mb-4">
//           <div className="flex items-center">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`w-5 h-5 ${
//                   i < Math.round(averageRating)
//                     ? "text-yellow-400"
//                     : "text-gray-300"
//                 }`}
//                 fill="currentColor"
//               />
//             ))}
//           </div>
//           <p className="ml-2 text-sm text-gray-600">
//             {averageRating.toFixed(1)} out of 5
//           </p>
//         </div>
//         <div className="space-y-4">
//           {dummyProduct.reviews.map((review) => (
//             <div key={review.id} className="bg-white p-4 rounded-lg shadow">
//               <div className="flex items-center mb-2">
//                 <span className="font-semibold text-gray-700 mr-2">
//                   {review.author}
//                 </span>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-4 h-4 ${
//                         i < review.rating ? "text-yellow-400" : "text-gray-300"
//                       }`}
//                       fill="currentColor"
//                     />
//                   ))}
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-1">{review.comment}</p>
//               <p className="text-sm text-gray-500">
//                 {new Date(review.date).toLocaleDateString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Ask the Farmer */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           Ask the Farmer
//         </h2>
//         <form className="space-y-4">
//           <textarea
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             rows={4}
//             placeholder="Have a question about this product or farming practices?"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
//           >
//             Submit Question
//           </button>
//         </form>
//       </div>

//       {/* Related Products */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">
//           You May Also Like
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-gray-800 mb-2">
//                   {product.name}
//                 </h3>
//                 <p className="text-green-600 font-bold">
//                   ${product.price.toFixed(2)} per {product.unit}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
