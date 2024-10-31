import React from "react";

const details = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
voluptatem.`;

const ingredients = "Vitamins, Carbohydrates, water, Vitamins";

const instructions = [
  "Keep it in cool and dry place.",
  "Keep it in refrigerator to consume more then a week.",
  "Lorem Ipsum is simply dummy text of the printing",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
  "Nemo enim ipsam voluptatem quia voluptas sit",
];

export const AboutProduct: React.FC = () => {
  return (
    <div className="bg-white rounded-b-md shadow-sm overflow-hidden mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-color-ternary mb-4">
            Details
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {details}
          </p>
          <h3 className="text-lg font-semibold color-ternary mb-2">
            Ingredients
          </h3>
          <p className="text-gray-600 text-sm">{ingredients}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-color-ternary mb-4">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-600 text-sm space-y-2">
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
