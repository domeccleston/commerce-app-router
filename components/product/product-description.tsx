import { IDProduct } from 'app/product/[handle]/types';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: IDProduct }) {
  const options = [{
    name: "Speicherkapazität",
    id: "Speicherkapazität",
    values: ["128GB", "256GB"]
  },
  {
    name: "Farbe",
    id: "Farbe",
    values: ["Schwarz-Phantom Black", "Grün-Cream-Beige", "Grün", "Violett-Lavender"]
  }]
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.name.split('(')[0]}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.productPriceData.prices[0]?.finalPrice.value.toString() as string}
            currencyCode={product.productPriceData.prices[0]?.finalPrice.currencyIso as string}
          />
        </div>
      </div>
      <VariantSelector options={options} />
      <AddToCart availableForSale={true}/>
      <Prose
        className="mb-6 text-sm leading-tight dark:text-white/[60%]"
        html={`<p>${product.markupDescription}</p>`}
      />

    </>
  );
}
