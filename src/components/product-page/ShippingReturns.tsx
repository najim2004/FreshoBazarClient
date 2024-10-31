export default function ShippingReturns() {
  return (
    <div className="mx-auto p-6 bg-white shadow-sm mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-4 text-color-ternary">
            Shiping & Returns
          </h2>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div className="md:w-1/3 bg-gray-100 p-6 rounded-md">
          <h2 className="text-xl font-semibold mb-4 text-color-ternary">
            Shiping & Returns
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Incidunt ut labore et dolore magnam aliquam quaerat</li>
            <li>Nemo enim ipsam voluptatem quia voluptas sit</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </li>
            <li>Nemo enim ipsam voluptatem quia voluptas sit</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
