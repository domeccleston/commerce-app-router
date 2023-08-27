export interface IDProduct {
  code: string;
  name: string;
  url: string;
  description: string;
  purchasable: boolean;
  availableForPickup: boolean;
  averageRating: number;
  numberOfReviews: number;
  summary: string;
  manufacturer: string;
  reviews: any[];
  classifications: {
    code: string;
    name: string;
    features: {
      code: string;
      name: string;
      range: boolean;
      comparable: boolean;
      featureValues: {
        value: string;
      }[];
      position: number;
    }[];
  }[];
  potentialPromotions: {
    code: string;
    promotionType: string;
    endDate: string;
  }[];
  ean: string;
  availabilityStatus: string;
  availabilityStatusIconURL: string;
  speedProduct: boolean;
  sapSaleable: boolean;
  sapVisibility: boolean;
  neutralDeliveryPossible: boolean;
  productServices: {
    code: string;
    name: string;
    description: string;
    price: {
      currencyIso: string;
      value: number;
      priceType: string;
      formattedValue: string;
    };
    incompatibleServiceItemCodes: string[];
    groupCode: string;
    groupName: string;
    productCode: string;
  }[];
  promoLabels: any[];
  manufacturerAID: string;
  pegiValue: string;
  releaseDate: string;
  warranty: number;
  deliveryTime: {
    value: string;
    expires: string;
    futureValue: string;
  };
  pickupTime: {
    value: string;
    expires: string;
    futureValue: string; 
  };
  videos: any[];
  documentDownloads: any[];
  brandLogoUrl: string;
  categoryCode: string;
  customImageData: {
    code: string;
    altText: string;
    sizes: {
      size: string;
      url: string;
    }[];
    containerQualifier: string;
  }[];
  markupDescription: string;
  brandCode: string;
  maxOrderCounterActive: boolean;
  hasReferences: boolean;
  productVariants: {
    name: string;
    options: {
      value: string;
      product: {
        code: string;
        name: string;
      };
      selected: boolean;
    }[];
  }[];
  productPriceData: {
    timestampCreation: string;
    prices: {
      expires: string;
      finalPrice: {
        currencyIso: string;
        value: number;
        priceType: string;
        formattedValue: string;
      };
      insteadPrice?: {
        currencyIso: string;
        value: number;
        priceType: string;
        formattedValue: string;
      };
      savings?: {
        currencyIso: string;
        value: number;
        priceType: string;
        formattedValue: string;
      };
      discount?: {
        from: string;
        to: string;
        absolute: boolean;
        absoluteDiscount: {
          currencyIso: string;
          value: number;
          priceType: string;
          formattedValue: string;
        }
      };
      fixPrice: boolean;
    }[];
  };
  brandName: string;
  reviewDistribution: {
    [key: number]: number;
  };
  averageRecommendation: number;
  numberOfComments: number;
  isPickUpBulky: boolean;
  hazardPictograms: any[];
  nameShort: string;
  displayedCode: string;
}