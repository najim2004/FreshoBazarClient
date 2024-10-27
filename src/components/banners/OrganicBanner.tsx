import { Link } from "react-router-dom";

export default function OrganicBanner() {
  return (
    <section className="mt-20 mb-10 rounded-2xl relative bg-primary/15 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-color-ternary">
            Organic & Garden Fresh
          </h2>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-color-primary sm:text-5xl md:text-6xl">
            Need Organic & quality
            <br />
            product everyday?
          </h1>
          <div className="mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80"
            >
              Shop Now{" "}
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-1/3 h-full">
        <img
          src="/placeholder.svg?height=300&width=400&text=Organic+Bag"
          alt="Organic produce in a reusable bag"
          className="object-contain object-left-bottom width-[400] height-[300]"
        />
      </div>
      <div className="absolute right-0 bottom-0 w-1/3 h-full">
        <img
          src="/placeholder.svg?height=300&width=400&text=Fresh+Vegetables"
          alt="Fresh vegetables in a cloth bag"
          className="object-contain object-right-bottom width-[400] height-[300]"
        />
      </div>
    </section>
  );
}
