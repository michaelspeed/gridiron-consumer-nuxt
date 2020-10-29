import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  fullName: Scalars['String'];
  addressLine: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  landmark: Scalars['String'];
  postalCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  alternatePhoneNumber: Scalars['String'];
  defaultShippingAddress: Scalars['Boolean'];
  defaultBillingAddress: Scalars['Boolean'];
  addressType: AddressType;
};

export type AddressCountAggregate = {
  __typename?: 'AddressCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['Int']>;
  addressLine?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  landmark?: Maybe<Scalars['Int']>;
  postalCode?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  alternatePhoneNumber?: Maybe<Scalars['Int']>;
  defaultShippingAddress?: Maybe<Scalars['Int']>;
  defaultBillingAddress?: Maybe<Scalars['Int']>;
  addressType?: Maybe<Scalars['Int']>;
};

export type AddressMaxAggregate = {
  __typename?: 'AddressMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export type AddressMinAggregate = {
  __typename?: 'AddressMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export enum AddressType {
  Home = 'HOME',
  Work = 'WORK'
}

export type Administrator = {
  __typename?: 'Administrator';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  emailAddress: Scalars['String'];
  type: AdministratorEnum;
  user: User;
};

export enum AdministratorEnum {
  Superadmin = 'SUPERADMIN',
  Staff = 'STAFF'
}

export type Asset = {
  __typename?: 'Asset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  name: Scalars['String'];
  type: Scalars['String'];
  mimeType: Scalars['String'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  fileSize: Scalars['Float'];
  source: Scalars['String'];
  preview: Scalars['String'];
  focalPoint: Scalars['JSONObject'];
};

export type AssetAvgAggregate = {
  __typename?: 'AssetAvgAggregate';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
};

export type AssetCountAggregate = {
  __typename?: 'AssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  mimeType?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  fileSize?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Int']>;
};

export type AssetFeaturedsCountAggregate = {
  __typename?: 'AssetFeaturedsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type AssetFeaturedsMaxAggregate = {
  __typename?: 'AssetFeaturedsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AssetFeaturedsMinAggregate = {
  __typename?: 'AssetFeaturedsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AssetMaxAggregate = {
  __typename?: 'AssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

export type AssetMinAggregate = {
  __typename?: 'AssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

export type AssetProductAssetsCountAggregate = {
  __typename?: 'AssetProductAssetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type AssetProductAssetsMaxAggregate = {
  __typename?: 'AssetProductAssetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type AssetProductAssetsMinAggregate = {
  __typename?: 'AssetProductAssetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type AssetSumAggregate = {
  __typename?: 'AssetSumAggregate';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
};

export type BillingAgreement = {
  __typename?: 'BillingAgreement';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  type: BillingAgreementEnum;
  state: BillingAgreementState;
  variant: ProductVariant;
  collection?: Maybe<Collection>;
  store: Store;
  request: Array<BillingAgreementRequest>;
};

export enum BillingAgreementEnum {
  Planbase = 'PLANBASE',
  Collectionbase = 'COLLECTIONBASE',
  Comissionbase = 'COMISSIONBASE',
  Prodcommission = 'PRODCOMMISSION'
}

export type BillingAgreementRequest = {
  __typename?: 'BillingAgreementRequest';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  state: BillingAgreementState;
};

export enum BillingAgreementState {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type CancellationAvgAggregate = {
  __typename?: 'CancellationAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationCountAggregate = {
  __typename?: 'CancellationCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CancellationMaxAggregate = {
  __typename?: 'CancellationMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationMinAggregate = {
  __typename?: 'CancellationMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationSumAggregate = {
  __typename?: 'CancellationSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  items: Array<CartItem>;
  user?: Maybe<User>;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  quantity: Scalars['Float'];
  cart: Cart;
  variant: ProductVariant;
  store: Store;
  price: ProductVariantPrice;
};

export type CartItemDto = {
  priceId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type CartPriceRules = {
  __typename?: 'CartPriceRules';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  priceType: Scalars['String'];
  value: Scalars['Float'];
};

export type CartPriceRulesAvgAggregate = {
  __typename?: 'CartPriceRulesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesCountAggregate = {
  __typename?: 'CartPriceRulesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  priceType?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type CartPriceRulesMaxAggregate = {
  __typename?: 'CartPriceRulesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesMinAggregate = {
  __typename?: 'CartPriceRulesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesSumAggregate = {
  __typename?: 'CartPriceRulesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ChannelCountAggregate = {
  __typename?: 'ChannelCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['Int']>;
  defaultLanguageCode?: Maybe<Scalars['Int']>;
  currencyCode?: Maybe<Scalars['Int']>;
  pricesIncludeTax?: Maybe<Scalars['Int']>;
};

export type ChannelMaxAggregate = {
  __typename?: 'ChannelMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ChannelMinAggregate = {
  __typename?: 'ChannelMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  isRoot: Scalars['Boolean'];
  inMenu: Scalars['Boolean'];
  position: Scalars['Float'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  description: Scalars['String'];
  children: Array<Collection>;
  products: Array<Product>;
  seo: Seo;
  agreements: Array<BillingAgreement>;
  cartPrice: CartPriceRules;
};

export type CollectionAgreementsAvgAggregate = {
  __typename?: 'CollectionAgreementsAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsCountAggregate = {
  __typename?: 'CollectionAgreementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type CollectionAgreementsMaxAggregate = {
  __typename?: 'CollectionAgreementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsMinAggregate = {
  __typename?: 'CollectionAgreementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsSumAggregate = {
  __typename?: 'CollectionAgreementsSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAvgAggregate = {
  __typename?: 'CollectionAvgAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionChildrenAvgAggregate = {
  __typename?: 'CollectionChildrenAvgAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionChildrenCountAggregate = {
  __typename?: 'CollectionChildrenCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  isRoot?: Maybe<Scalars['Int']>;
  inMenu?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionChildrenMaxAggregate = {
  __typename?: 'CollectionChildrenMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionChildrenMinAggregate = {
  __typename?: 'CollectionChildrenMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionChildrenSumAggregate = {
  __typename?: 'CollectionChildrenSumAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionCountAggregate = {
  __typename?: 'CollectionCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  isRoot?: Maybe<Scalars['Int']>;
  inMenu?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionMaxAggregate = {
  __typename?: 'CollectionMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionMinAggregate = {
  __typename?: 'CollectionMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionProductsCountAggregate = {
  __typename?: 'CollectionProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionProductsMaxAggregate = {
  __typename?: 'CollectionProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionProductsMinAggregate = {
  __typename?: 'CollectionProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionSingleResponse = {
  __typename?: 'CollectionSingleResponse';
  collection: Collection;
  facetValues: Array<FacetValue>;
};

export type CollectionSumAggregate = {
  __typename?: 'CollectionSumAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CountryCountAggregate = {
  __typename?: 'CountryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type CountryMaxAggregate = {
  __typename?: 'CountryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryMinAggregate = {
  __typename?: 'CountryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryStoresCountAggregate = {
  __typename?: 'CountryStoresCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type CountryStoresMaxAggregate = {
  __typename?: 'CountryStoresMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type CountryStoresMinAggregate = {
  __typename?: 'CountryStoresMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type CountryZonesCountAggregate = {
  __typename?: 'CountryZonesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type CountryZonesMaxAggregate = {
  __typename?: 'CountryZonesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryZonesMinAggregate = {
  __typename?: 'CountryZonesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type DataSource = {
  __typename?: 'DataSource';
  sum: Scalars['Float'];
  amount: Scalars['Float'];
};


export type Delivery = {
  __typename?: 'Delivery';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  user: User;
  signIn: Array<DeliverySignIn>;
};

export type DeliveryCountAggregate = {
  __typename?: 'DeliveryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type DeliveryMaxAggregate = {
  __typename?: 'DeliveryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryMinAggregate = {
  __typename?: 'DeliveryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryPool = {
  __typename?: 'DeliveryPool';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  signIn: DeliverySignIn;
  lines: Array<OrderLine>;
};

export type DeliverySignIn = {
  __typename?: 'DeliverySignIn';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  delivery: Delivery;
  pool: DeliveryPool;
};

export type DeliverySignInsCountAggregate = {
  __typename?: 'DeliverySignInsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type DeliverySignInsMaxAggregate = {
  __typename?: 'DeliverySignInsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliverySignInsMinAggregate = {
  __typename?: 'DeliverySignInsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Facet = {
  __typename?: 'Facet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  name: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  code: Scalars['String'];
};

export type FacetCountAggregate = {
  __typename?: 'FacetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetMaxAggregate = {
  __typename?: 'FacetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetMinAggregate = {
  __typename?: 'FacetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetProductsCountAggregate = {
  __typename?: 'FacetProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type FacetProductsMaxAggregate = {
  __typename?: 'FacetProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetProductsMinAggregate = {
  __typename?: 'FacetProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetValue = {
  __typename?: 'FacetValue';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  code: Scalars['String'];
  product: Array<Product>;
  facet: Facet;
};

export type FacetValueCountAggregate = {
  __typename?: 'FacetValueCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetValueMaxAggregate = {
  __typename?: 'FacetValueMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValueMinAggregate = {
  __typename?: 'FacetValueMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValueProductsCountAggregate = {
  __typename?: 'FacetValueProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type FacetValueProductsMaxAggregate = {
  __typename?: 'FacetValueProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetValueProductsMinAggregate = {
  __typename?: 'FacetValueProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetValuesCountAggregate = {
  __typename?: 'FacetValuesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetValuesMaxAggregate = {
  __typename?: 'FacetValuesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValuesMinAggregate = {
  __typename?: 'FacetValuesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type Hsn = {
  __typename?: 'Hsn';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  code: Scalars['String'];
  value: Scalars['Float'];
};

export type HsnAvgAggregate = {
  __typename?: 'HsnAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type HsnCountAggregate = {
  __typename?: 'HsnCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type HsnMaxAggregate = {
  __typename?: 'HsnMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type HsnMinAggregate = {
  __typename?: 'HsnMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type HsnPricesAvgAggregate = {
  __typename?: 'HsnPricesAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type HsnPricesCountAggregate = {
  __typename?: 'HsnPricesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type HsnPricesMaxAggregate = {
  __typename?: 'HsnPricesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type HsnPricesMinAggregate = {
  __typename?: 'HsnPricesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type HsnPricesSumAggregate = {
  __typename?: 'HsnPricesSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type HsnProdsCountAggregate = {
  __typename?: 'HsnProdsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type HsnProdsMaxAggregate = {
  __typename?: 'HsnProdsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type HsnProdsMinAggregate = {
  __typename?: 'HsnProdsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type HsnSumAggregate = {
  __typename?: 'HsnSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  type: Scalars['String'];
  total: Scalars['Float'];
  amount: Scalars['Float'];
  fees: Scalars['Float'];
  tax: Scalars['Float'];
  nulled: Scalars['Boolean'];
};

export type InvoiceAvgAggregate = {
  __typename?: 'InvoiceAvgAggregate';
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type InvoiceCountAggregate = {
  __typename?: 'InvoiceCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  fees?: Maybe<Scalars['Int']>;
  tax?: Maybe<Scalars['Int']>;
  nulled?: Maybe<Scalars['Int']>;
};

export type InvoiceMaxAggregate = {
  __typename?: 'InvoiceMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type InvoiceMinAggregate = {
  __typename?: 'InvoiceMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type InvoiceSumAggregate = {
  __typename?: 'InvoiceSumAggregate';
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};



export type MenuChildrenCountAggregate = {
  __typename?: 'MenuChildrenCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

export type MenuChildrenMaxAggregate = {
  __typename?: 'MenuChildrenMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuChildrenMinAggregate = {
  __typename?: 'MenuChildrenMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuCountAggregate = {
  __typename?: 'MenuCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

export type MenuMaxAggregate = {
  __typename?: 'MenuMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuMinAggregate = {
  __typename?: 'MenuMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuResponseTypes = {
  __typename?: 'MenuResponseTypes';
  menu: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ShiftProductVariant: ProductVariant;
  creteReview: Review;
  createView: View;
  CreateUser: UserResponse;
  LoginUser: UserResponse;
  UpdateAccountInfo: User;
  RequestResetCode: ResetCode;
  CreateNewAddress: Address;
  UpdateNewAddress: Address;
  RegisterSearch: Search;
  addToCart: CartItem;
  removeCartItem: CartItem;
  createShopOrder: Order;
};


export type MutationShiftProductVariantArgs = {
  prodId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreteReviewArgs = {
  stars: Scalars['Float'];
  varId: Scalars['String'];
  text: Scalars['String'];
};


export type MutationCreateViewArgs = {
  variant: Scalars['String'];
  id: Scalars['String'];
};


export type MutationCreateUserArgs = {
  lname: Scalars['String'];
  fname: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdateAccountInfoArgs = {
  lname: Scalars['String'];
  fname: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationRequestResetCodeArgs = {
  email: Scalars['String'];
};


export type MutationCreateNewAddressArgs = {
  type: AddressType;
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  landmark: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  addressLine: Scalars['String'];
  fullName: Scalars['String'];
};


export type MutationUpdateNewAddressArgs = {
  id: Scalars['ID'];
  type: AddressType;
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  landmark: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  addressLine: Scalars['String'];
  fullName: Scalars['String'];
};


export type MutationRegisterSearchArgs = {
  search: Scalars['String'];
};


export type MutationAddToCartArgs = {
  quantity: Scalars['Int'];
  price: Scalars['ID'];
  store: Scalars['ID'];
  variant: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationRemoveCartItemArgs = {
  cartId: Scalars['ID'];
};


export type MutationCreateShopOrderArgs = {
  transaction?: Maybe<Scalars['String']>;
  orderLineDto: Array<CartItemDto>;
  address: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  totalPrice: Scalars['Float'];
  address: Scalars['String'];
  mode: Scalars['String'];
  line: Array<OrderLine>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['Int']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
  productVariant: ProductVariant;
};

export type OrderItemAvgAggregate = {
  __typename?: 'OrderItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemCountAggregate = {
  __typename?: 'OrderItemCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type OrderItemMaxAggregate = {
  __typename?: 'OrderItemMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemMinAggregate = {
  __typename?: 'OrderItemMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemSumAggregate = {
  __typename?: 'OrderItemSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderLine = {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  priceField: Scalars['JSON'];
  stage: Scalars['String'];
  item: OrderItem;
  store: Store;
  invoice: Array<Invoice>;
  refund: Refund;
};

export type OrderLineCountAggregate = {
  __typename?: 'OrderLineCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type OrderLineInvoicesAvgAggregate = {
  __typename?: 'OrderLineInvoicesAvgAggregate';
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type OrderLineInvoicesCountAggregate = {
  __typename?: 'OrderLineInvoicesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  fees?: Maybe<Scalars['Int']>;
  tax?: Maybe<Scalars['Int']>;
  nulled?: Maybe<Scalars['Int']>;
};

export type OrderLineInvoicesMaxAggregate = {
  __typename?: 'OrderLineInvoicesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type OrderLineInvoicesMinAggregate = {
  __typename?: 'OrderLineInvoicesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type OrderLineInvoicesSumAggregate = {
  __typename?: 'OrderLineInvoicesSumAggregate';
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type OrderLineMaxAggregate = {
  __typename?: 'OrderLineMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLineMinAggregate = {
  __typename?: 'OrderLineMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLinesCountAggregate = {
  __typename?: 'OrderLinesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type OrderLinesMaxAggregate = {
  __typename?: 'OrderLinesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLinesMinAggregate = {
  __typename?: 'OrderLinesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  title: Scalars['String'];
  targetId: Scalars['String'];
  single?: Maybe<Scalars['JSON']>;
  list?: Maybe<Array<Scalars['String']>>;
  pageType: PageType;
  pageCategory: PageCategory;
};

export enum PageCategory {
  Home = 'HOME',
  Category = 'CATEGORY',
  Singleprod = 'SINGLEPROD',
  Prodvariant = 'PRODVARIANT'
}

export type PageCountAggregate = {
  __typename?: 'PageCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  pageType?: Maybe<Scalars['Int']>;
  pageCategory?: Maybe<Scalars['Int']>;
};

export type PageMaxAggregate = {
  __typename?: 'PageMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export type PageMinAggregate = {
  __typename?: 'PageMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export enum PageType {
  List = 'LIST',
  Single = 'SINGLE'
}

export type PaymentAvgAggregate = {
  __typename?: 'PaymentAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type PaymentCountAggregate = {
  __typename?: 'PaymentCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
};

export type PaymentMaxAggregate = {
  __typename?: 'PaymentMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  errorMessage?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  api: Scalars['String'];
  secretKey: Scalars['String'];
  enabled: Scalars['Boolean'];
};

export type PaymentMinAggregate = {
  __typename?: 'PaymentMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  errorMessage?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type PaymentSumAggregate = {
  __typename?: 'PaymentSumAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type ProdDataSource = {
  __typename?: 'ProdDataSource';
  sum: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  productName: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  hsn?: Maybe<Hsn>;
  collection?: Maybe<Collection>;
  options: Array<ProductOptionGroup>;
  featuredAsset: Asset;
  facets: Array<FacetValue>;
  assets?: Maybe<Array<ProductAsset>>;
  variants: Array<ProductVariant>;
  viewcode: Array<Scalars['String']>;
};

export type ProductAsset = {
  __typename?: 'ProductAsset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  product: Product;
  asset: Asset;
};

export type ProductAssetCountAggregate = {
  __typename?: 'ProductAssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type ProductAssetMaxAggregate = {
  __typename?: 'ProductAssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetMinAggregate = {
  __typename?: 'ProductAssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetsCountAggregate = {
  __typename?: 'ProductAssetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type ProductAssetsMaxAggregate = {
  __typename?: 'ProductAssetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetsMinAggregate = {
  __typename?: 'ProductAssetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type ProductFacetsCountAggregate = {
  __typename?: 'ProductFacetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductFacetsMaxAggregate = {
  __typename?: 'ProductFacetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductFacetsMinAggregate = {
  __typename?: 'ProductFacetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
};

export type ProductOptionCountAggregate = {
  __typename?: 'ProductOptionCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroup = {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
  product: Product;
  options: Array<ProductOption>;
};

export type ProductOptionGroupCountAggregate = {
  __typename?: 'ProductOptionGroupCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroupMaxAggregate = {
  __typename?: 'ProductOptionGroupMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupMinAggregate = {
  __typename?: 'ProductOptionGroupMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupOptionsCountAggregate = {
  __typename?: 'ProductOptionGroupOptionsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroupOptionsMaxAggregate = {
  __typename?: 'ProductOptionGroupOptionsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupOptionsMinAggregate = {
  __typename?: 'ProductOptionGroupOptionsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionMaxAggregate = {
  __typename?: 'ProductOptionMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionMinAggregate = {
  __typename?: 'ProductOptionMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionsCountAggregate = {
  __typename?: 'ProductOptionsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionsMaxAggregate = {
  __typename?: 'ProductOptionsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionsMinAggregate = {
  __typename?: 'ProductOptionsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionVariantsAvgAggregate = {
  __typename?: 'ProductOptionVariantsAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductOptionVariantsCountAggregate = {
  __typename?: 'ProductOptionVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductOptionVariantsMaxAggregate = {
  __typename?: 'ProductOptionVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductOptionVariantsMinAggregate = {
  __typename?: 'ProductOptionVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductOptionVariantsSumAggregate = {
  __typename?: 'ProductOptionVariantsSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  dum_price: Scalars['Float'];
  enabled: Scalars['Boolean'];
  sku: Scalars['String'];
  name: Scalars['String'];
  rating: Scalars['Float'];
  product: Product;
  trackInventory: Scalars['Boolean'];
  asset?: Maybe<ProductVariantAsset>;
  price?: Maybe<Array<ProductVariantPrice>>;
  specs?: Maybe<ProductVariantSpecs>;
  seo?: Maybe<Seo>;
  agreements: Array<BillingAgreement>;
  stock: Array<StockKeeping>;
  line: Array<OrderItem>;
  carts: Array<CartItem>;
  reviews: Array<Review>;
  viewcode: Array<Scalars['String']>;
};

export type ProductVariantAgreementsAvgAggregate = {
  __typename?: 'ProductVariantAgreementsAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ProductVariantAgreementsCountAggregate = {
  __typename?: 'ProductVariantAgreementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type ProductVariantAgreementsMaxAggregate = {
  __typename?: 'ProductVariantAgreementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type ProductVariantAgreementsMinAggregate = {
  __typename?: 'ProductVariantAgreementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type ProductVariantAgreementsSumAggregate = {
  __typename?: 'ProductVariantAgreementsSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ProductVariantAsset = {
  __typename?: 'ProductVariantAsset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  asset: Asset;
  variant: ProductVariant;
};

export type ProductVariantAssetCountAggregate = {
  __typename?: 'ProductVariantAssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type ProductVariantAssetMaxAggregate = {
  __typename?: 'ProductVariantAssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantAssetMinAggregate = {
  __typename?: 'ProductVariantAssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantAvgAggregate = {
  __typename?: 'ProductVariantAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductVariantCountAggregate = {
  __typename?: 'ProductVariantCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductVariantLinesAvgAggregate = {
  __typename?: 'ProductVariantLinesAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesCountAggregate = {
  __typename?: 'ProductVariantLinesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ProductVariantLinesMaxAggregate = {
  __typename?: 'ProductVariantLinesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesMinAggregate = {
  __typename?: 'ProductVariantLinesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesSumAggregate = {
  __typename?: 'ProductVariantLinesSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantMaxAggregate = {
  __typename?: 'ProductVariantMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductVariantMinAggregate = {
  __typename?: 'ProductVariantMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductVariantPrice = {
  __typename?: 'ProductVariantPrice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  price: Scalars['Float'];
  taxIncluded: Scalars['Boolean'];
  hsn: Hsn;
  tax: TaxRate;
  variant: ProductVariant;
  store?: Maybe<Store>;
  promoprice?: Maybe<PromotionVariantPrice>;
  cartItem?: Maybe<CartItem>;
  backlog?: Maybe<StockBackLog>;
};

export type ProductVariantPriceAvgAggregate = {
  __typename?: 'ProductVariantPriceAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceBacklogsAvgAggregate = {
  __typename?: 'ProductVariantPriceBacklogsAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceBacklogsCountAggregate = {
  __typename?: 'ProductVariantPriceBacklogsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ProductVariantPriceBacklogsMaxAggregate = {
  __typename?: 'ProductVariantPriceBacklogsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceBacklogsMinAggregate = {
  __typename?: 'ProductVariantPriceBacklogsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceBacklogsSumAggregate = {
  __typename?: 'ProductVariantPriceBacklogsSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceCountAggregate = {
  __typename?: 'ProductVariantPriceCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type ProductVariantPriceMaxAggregate = {
  __typename?: 'ProductVariantPriceMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceMinAggregate = {
  __typename?: 'ProductVariantPriceMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesAvgAggregate = {
  __typename?: 'ProductVariantPricesAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesCountAggregate = {
  __typename?: 'ProductVariantPricesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type ProductVariantPricesMaxAggregate = {
  __typename?: 'ProductVariantPricesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesMinAggregate = {
  __typename?: 'ProductVariantPricesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesSumAggregate = {
  __typename?: 'ProductVariantPricesSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceSumAggregate = {
  __typename?: 'ProductVariantPriceSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantsAvgAggregate = {
  __typename?: 'ProductVariantsAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductVariantsCountAggregate = {
  __typename?: 'ProductVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductVariantsMaxAggregate = {
  __typename?: 'ProductVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductVariantsMinAggregate = {
  __typename?: 'ProductVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductVariantSpecs = {
  __typename?: 'ProductVariantSpecs';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  specs: Scalars['JSON'];
  variant: ProductVariant;
};

export type ProductVariantsSumAggregate = {
  __typename?: 'ProductVariantsSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductVariantStocksAvgAggregate = {
  __typename?: 'ProductVariantStocksAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type ProductVariantStocksCountAggregate = {
  __typename?: 'ProductVariantStocksCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type ProductVariantStocksMaxAggregate = {
  __typename?: 'ProductVariantStocksMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductVariantStocksMinAggregate = {
  __typename?: 'ProductVariantStocksMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductVariantStocksSumAggregate = {
  __typename?: 'ProductVariantStocksSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type ProductVariantSumAggregate = {
  __typename?: 'ProductVariantSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type PromotionVariantPrice = {
  __typename?: 'PromotionVariantPrice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  priceType: Scalars['String'];
  value: Scalars['Float'];
  forever: Scalars['Boolean'];
  startsAt: Scalars['DateTime'];
  endsAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
};

export type PromotionVariantPriceAvgAggregate = {
  __typename?: 'PromotionVariantPriceAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type PromotionVariantPriceCountAggregate = {
  __typename?: 'PromotionVariantPriceCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  priceType?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  forever?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['Int']>;
  endsAt?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type PromotionVariantPriceMaxAggregate = {
  __typename?: 'PromotionVariantPriceMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
};

export type PromotionVariantPriceMinAggregate = {
  __typename?: 'PromotionVariantPriceMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
};

export type PromotionVariantPriceSumAggregate = {
  __typename?: 'PromotionVariantPriceSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  GetMenu: MenuResponseTypes;
  getAllCollection: Array<Collection>;
  GetCollectionTree: Array<Collection>;
  GetSingleCollection: CollectionSingleResponse;
  GetFacetsByCollection: Array<FacetValue>;
  GetProductVariantForCollection: Array<ProductVariant>;
  getHomePage: Page;
  getSingleProductVariant: ProductVariant;
  singProductInfo: Product;
  singProductPrice: ProductVariant;
  GetStocksAndZipAvailability: Array<ProductVariantPrice>;
  getProductVariantByProduct: Array<ProductVariant>;
  getProductAsset: Asset;
  GetSingleProductPrice: ProductVariantPrice;
  GetDefaultStore: Store;
  GetCurrentUser: User;
  GetUserAddress: Array<Address>;
  GetAllSearch: Array<Search>;
  queryFacet: Array<Product>;
  GetFacetDocument: FacetValue;
  GetCart: Cart;
  getPaymentCodes: PaymentMethod;
  getMyOrders: Array<Order>;
  getSingleOrder: Order;
};


export type QueryGetSingleCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryGetFacetsByCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductVariantForCollectionArgs = {
  search?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type QueryGetSingleProductVariantArgs = {
  id: Scalars['ID'];
};


export type QuerySingProductInfoArgs = {
  id: Scalars['ID'];
};


export type QuerySingProductPriceArgs = {
  id: Scalars['ID'];
};


export type QueryGetStocksAndZipAvailabilityArgs = {
  zipf: Scalars['Int'];
  variantId: Scalars['ID'];
};


export type QueryGetProductVariantByProductArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductAssetArgs = {
  prodId?: Maybe<Scalars['ID']>;
  variantId?: Maybe<Scalars['ID']>;
};


export type QueryGetSingleProductPriceArgs = {
  id: Scalars['ID'];
};


export type QueryQueryFacetArgs = {
  collection?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};


export type QueryGetFacetDocumentArgs = {
  id: Scalars['ID'];
};


export type QueryGetCartArgs = {
  id: Scalars['ID'];
};


export type QueryGetSingleOrderArgs = {
  id: Scalars['ID'];
};

export type Refund = {
  __typename?: 'Refund';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  reason: Scalars['String'];
  destination: Scalars['String'];
  transactionId: Scalars['String'];
  stage: Scalars['String'];
};

export type RefundCountAggregate = {
  __typename?: 'RefundCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['Int']>;
  destination?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type RefundMaxAggregate = {
  __typename?: 'RefundMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
};

export type RefundMinAggregate = {
  __typename?: 'RefundMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
};

export type ResetCode = {
  __typename?: 'ResetCode';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  code: Scalars['String'];
  user: User;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  stars: Scalars['Int'];
  text: Scalars['String'];
  user: User;
  variant: ProductVariant;
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SaleAvgAggregate = {
  __typename?: 'SaleAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleCountAggregate = {
  __typename?: 'SaleCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type SaleMaxAggregate = {
  __typename?: 'SaleMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleMinAggregate = {
  __typename?: 'SaleMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleSumAggregate = {
  __typename?: 'SaleSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type Search = {
  __typename?: 'Search';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  search: Scalars['String'];
  userId: Scalars['String'];
};

export type Seo = {
  __typename?: 'Seo';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  urlKey: Scalars['String'];
  metatitle: Scalars['String'];
  metakeywords?: Maybe<Array<Scalars['String']>>;
  metadesc: Scalars['String'];
};

export type SeoCountAggregate = {
  __typename?: 'SeoCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  urlKey?: Maybe<Scalars['Int']>;
  metatitle?: Maybe<Scalars['Int']>;
};

export type SeoMaxAggregate = {
  __typename?: 'SeoMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
};

export type SeoMinAggregate = {
  __typename?: 'SeoMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
};

export type SettlementsAvgAggregate = {
  __typename?: 'SettlementsAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type SettlementsCountAggregate = {
  __typename?: 'SettlementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  taxamount?: Maybe<Scalars['Int']>;
  finalamount?: Maybe<Scalars['Int']>;
  transactionID?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type SettlementsMaxAggregate = {
  __typename?: 'SettlementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type SettlementsMinAggregate = {
  __typename?: 'SettlementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type SettlementsSumAggregate = {
  __typename?: 'SettlementsSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export enum SettlementType {
  Processing = 'PROCESSING',
  Processed = 'PROCESSED'
}

export type StockBackLog = {
  __typename?: 'StockBackLog';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
};

export type StockBackLogAvgAggregate = {
  __typename?: 'StockBackLogAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockBackLogCountAggregate = {
  __typename?: 'StockBackLogCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockBackLogMaxAggregate = {
  __typename?: 'StockBackLogMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockBackLogMinAggregate = {
  __typename?: 'StockBackLogMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockBackLogSumAggregate = {
  __typename?: 'StockBackLogSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeeping = {
  __typename?: 'StockKeeping';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
  available_quantity: Scalars['Float'];
  threshold: Scalars['Float'];
  multiple: Scalars['Boolean'];
  backorder: Scalars['Boolean'];
  stockstatus: Scalars['Boolean'];
  sku: Scalars['String'];
  type: Scalars['String'];
  variant: ProductVariant;
};

export type StockKeepingAvgAggregate = {
  __typename?: 'StockKeepingAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsAvgAggregate = {
  __typename?: 'StockKeepingCancelsAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsCountAggregate = {
  __typename?: 'StockKeepingCancelsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingCancelsMaxAggregate = {
  __typename?: 'StockKeepingCancelsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsMinAggregate = {
  __typename?: 'StockKeepingCancelsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsSumAggregate = {
  __typename?: 'StockKeepingCancelsSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCountAggregate = {
  __typename?: 'StockKeepingCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StockKeepingMaxAggregate = {
  __typename?: 'StockKeepingMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StockKeepingMinAggregate = {
  __typename?: 'StockKeepingMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StockKeepingMovementsAvgAggregate = {
  __typename?: 'StockKeepingMovementsAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsCountAggregate = {
  __typename?: 'StockKeepingMovementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingMovementsMaxAggregate = {
  __typename?: 'StockKeepingMovementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsMinAggregate = {
  __typename?: 'StockKeepingMovementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsSumAggregate = {
  __typename?: 'StockKeepingMovementsSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesAvgAggregate = {
  __typename?: 'StockKeepingSalesAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesCountAggregate = {
  __typename?: 'StockKeepingSalesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingSalesMaxAggregate = {
  __typename?: 'StockKeepingSalesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesMinAggregate = {
  __typename?: 'StockKeepingSalesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesSumAggregate = {
  __typename?: 'StockKeepingSalesSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSumAggregate = {
  __typename?: 'StockKeepingSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StockMovementAvgAggregate = {
  __typename?: 'StockMovementAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementCountAggregate = {
  __typename?: 'StockMovementCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockMovementMaxAggregate = {
  __typename?: 'StockMovementMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementMinAggregate = {
  __typename?: 'StockMovementMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementSumAggregate = {
  __typename?: 'StockMovementSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  storeName: Scalars['String'];
  phoneNumber: Scalars['String'];
  officialemail: Scalars['String'];
  zipcode: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
  GSTIN: Scalars['String'];
  singleStore: Scalars['Boolean'];
  rentalStore: Scalars['Boolean'];
  channelMarkets: Scalars['Boolean'];
  type: StoreTypeEnum;
  vendor?: Maybe<Vendor>;
  cart: Array<CartItem>;
  backlogs: StockBackLog;
  zip?: Maybe<Zip>;
};

export type StoreBacklogsAvgAggregate = {
  __typename?: 'StoreBacklogsAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StoreBacklogsCountAggregate = {
  __typename?: 'StoreBacklogsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StoreBacklogsMaxAggregate = {
  __typename?: 'StoreBacklogsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StoreBacklogsMinAggregate = {
  __typename?: 'StoreBacklogsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StoreBacklogsSumAggregate = {
  __typename?: 'StoreBacklogsSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StoreCartsCountAggregate = {
  __typename?: 'StoreCartsCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type StoreCartsMaxAggregate = {
  __typename?: 'StoreCartsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type StoreCartsMinAggregate = {
  __typename?: 'StoreCartsMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type StoreCountAggregate = {
  __typename?: 'StoreCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type StoreInvoicesAvgAggregate = {
  __typename?: 'StoreInvoicesAvgAggregate';
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type StoreInvoicesCountAggregate = {
  __typename?: 'StoreInvoicesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  fees?: Maybe<Scalars['Int']>;
  tax?: Maybe<Scalars['Int']>;
  nulled?: Maybe<Scalars['Int']>;
};

export type StoreInvoicesMaxAggregate = {
  __typename?: 'StoreInvoicesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type StoreInvoicesMinAggregate = {
  __typename?: 'StoreInvoicesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type StoreInvoicesSumAggregate = {
  __typename?: 'StoreInvoicesSumAggregate';
  total?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type StoreMaxAggregate = {
  __typename?: 'StoreMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type StoreMinAggregate = {
  __typename?: 'StoreMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type StorePricesAvgAggregate = {
  __typename?: 'StorePricesAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type StorePricesCountAggregate = {
  __typename?: 'StorePricesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type StorePricesMaxAggregate = {
  __typename?: 'StorePricesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type StorePricesMinAggregate = {
  __typename?: 'StorePricesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type StorePricesSumAggregate = {
  __typename?: 'StorePricesSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type StoreSettlementsAvgAggregate = {
  __typename?: 'StoreSettlementsAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StoreSettlementsCountAggregate = {
  __typename?: 'StoreSettlementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  taxamount?: Maybe<Scalars['Int']>;
  finalamount?: Maybe<Scalars['Int']>;
  transactionID?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StoreSettlementsMaxAggregate = {
  __typename?: 'StoreSettlementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StoreSettlementsMinAggregate = {
  __typename?: 'StoreSettlementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StoreSettlementsSumAggregate = {
  __typename?: 'StoreSettlementsSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StoreSkusAvgAggregate = {
  __typename?: 'StoreSkusAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StoreSkusCountAggregate = {
  __typename?: 'StoreSkusCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StoreSkusMaxAggregate = {
  __typename?: 'StoreSkusMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StoreSkusMinAggregate = {
  __typename?: 'StoreSkusMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StoreSkusSumAggregate = {
  __typename?: 'StoreSkusSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export enum StoreTypeEnum {
  Default = 'DEFAULT',
  Vendor = 'VENDOR'
}

export type StoreZipsAvgAggregate = {
  __typename?: 'StoreZipsAvgAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type StoreZipsCountAggregate = {
  __typename?: 'StoreZipsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type StoreZipsMaxAggregate = {
  __typename?: 'StoreZipsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type StoreZipsMinAggregate = {
  __typename?: 'StoreZipsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type StoreZipsSumAggregate = {
  __typename?: 'StoreZipsSumAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type TaxCategoryCountAggregate = {
  __typename?: 'TaxCategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type TaxCategoryMaxAggregate = {
  __typename?: 'TaxCategoryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxCategoryMinAggregate = {
  __typename?: 'TaxCategoryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxCategoryRatesAvgAggregate = {
  __typename?: 'TaxCategoryRatesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesCountAggregate = {
  __typename?: 'TaxCategoryRatesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type TaxCategoryRatesMaxAggregate = {
  __typename?: 'TaxCategoryRatesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesMinAggregate = {
  __typename?: 'TaxCategoryRatesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesSumAggregate = {
  __typename?: 'TaxCategoryRatesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxRate = {
  __typename?: 'TaxRate';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  value: Scalars['Float'];
  enabled: Scalars['Boolean'];
};

export type TaxRateAvgAggregate = {
  __typename?: 'TaxRateAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateCountAggregate = {
  __typename?: 'TaxRateCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type TaxRateMaxAggregate = {
  __typename?: 'TaxRateMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateMinAggregate = {
  __typename?: 'TaxRateMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateSumAggregate = {
  __typename?: 'TaxRateSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsAvgAggregate = {
  __typename?: 'TaxRateVariantsAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsCountAggregate = {
  __typename?: 'TaxRateVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type TaxRateVariantsMaxAggregate = {
  __typename?: 'TaxRateVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsMinAggregate = {
  __typename?: 'TaxRateVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsSumAggregate = {
  __typename?: 'TaxRateVariantsSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  verified: Scalars['Boolean'];
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  administrator?: Maybe<Administrator>;
  vendor?: Maybe<Vendor>;
  delivery?: Maybe<Delivery>;
  cart?: Maybe<Cart>;
  view: Array<View>;
  reviews: Array<Review>;
  address?: Maybe<Array<Address>>;
  order?: Maybe<Array<Order>>;
  reset?: Maybe<Array<ResetCode>>;
};

export type UserAddressesCountAggregate = {
  __typename?: 'UserAddressesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['Int']>;
  addressLine?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  landmark?: Maybe<Scalars['Int']>;
  postalCode?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  alternatePhoneNumber?: Maybe<Scalars['Int']>;
  defaultShippingAddress?: Maybe<Scalars['Int']>;
  defaultBillingAddress?: Maybe<Scalars['Int']>;
  addressType?: Maybe<Scalars['Int']>;
};

export type UserAddressesMaxAggregate = {
  __typename?: 'UserAddressesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export type UserAddressesMinAggregate = {
  __typename?: 'UserAddressesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  verificationToken?: Maybe<Scalars['Int']>;
  passwordResetToken?: Maybe<Scalars['Int']>;
  identifierChangeToken?: Maybe<Scalars['Int']>;
  pendingIdentifier?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserOrdersAvgAggregate = {
  __typename?: 'UserOrdersAvgAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type UserOrdersCountAggregate = {
  __typename?: 'UserOrdersCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['Int']>;
};

export type UserOrdersMaxAggregate = {
  __typename?: 'UserOrdersMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type UserOrdersMinAggregate = {
  __typename?: 'UserOrdersMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type UserOrdersSumAggregate = {
  __typename?: 'UserOrdersSumAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  user: User;
  token: Scalars['String'];
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  vendorName: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  zip?: Maybe<Zip>;
};

export type VendorCountAggregate = {
  __typename?: 'VendorCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  vendorName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type VendorLicenseCountAggregate = {
  __typename?: 'VendorLicenseCountAggregate';
  id?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  tenureStart?: Maybe<Scalars['Int']>;
  tenureEnd?: Maybe<Scalars['Int']>;
};

export type VendorLicenseMaxAggregate = {
  __typename?: 'VendorLicenseMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorLicenseMinAggregate = {
  __typename?: 'VendorLicenseMinAggregate';
  id?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorMaxAggregate = {
  __typename?: 'VendorMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type VendorMinAggregate = {
  __typename?: 'VendorMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type VendorPlansAvgAggregate = {
  __typename?: 'VendorPlansAvgAggregate';
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansCountAggregate = {
  __typename?: 'VendorPlansCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  planValue?: Maybe<Scalars['Int']>;
};

export type VendorPlansLicencesCountAggregate = {
  __typename?: 'VendorPlansLicencesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  tenureStart?: Maybe<Scalars['Int']>;
  tenureEnd?: Maybe<Scalars['Int']>;
};

export type VendorPlansLicencesMaxAggregate = {
  __typename?: 'VendorPlansLicencesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorPlansLicencesMinAggregate = {
  __typename?: 'VendorPlansLicencesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorPlansMaxAggregate = {
  __typename?: 'VendorPlansMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansMinAggregate = {
  __typename?: 'VendorPlansMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansSumAggregate = {
  __typename?: 'VendorPlansSumAggregate';
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorZipsAvgAggregate = {
  __typename?: 'VendorZipsAvgAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsCountAggregate = {
  __typename?: 'VendorZipsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type VendorZipsMaxAggregate = {
  __typename?: 'VendorZipsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsMinAggregate = {
  __typename?: 'VendorZipsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsSumAggregate = {
  __typename?: 'VendorZipsSumAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type View = {
  __typename?: 'View';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ViewCodeCountAggregate = {
  __typename?: 'ViewCodeCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type ViewCodeMaxAggregate = {
  __typename?: 'ViewCodeMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ViewCodeMinAggregate = {
  __typename?: 'ViewCodeMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Zip = {
  __typename?: 'Zip';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  code: Scalars['Float'];
};

export type ZipAvgAggregate = {
  __typename?: 'ZipAvgAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type ZipCountAggregate = {
  __typename?: 'ZipCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ZipMaxAggregate = {
  __typename?: 'ZipMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type ZipMinAggregate = {
  __typename?: 'ZipMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type ZipStoresCountAggregate = {
  __typename?: 'ZipStoresCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type ZipStoresMaxAggregate = {
  __typename?: 'ZipStoresMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type ZipStoresMinAggregate = {
  __typename?: 'ZipStoresMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type ZipSumAggregate = {
  __typename?: 'ZipSumAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type ZipVendorsCountAggregate = {
  __typename?: 'ZipVendorsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  vendorName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type ZipVendorsMaxAggregate = {
  __typename?: 'ZipVendorsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ZipVendorsMinAggregate = {
  __typename?: 'ZipVendorsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ZoneCountAggregate = {
  __typename?: 'ZoneCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type ZoneMaxAggregate = {
  __typename?: 'ZoneMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMembersCountAggregate = {
  __typename?: 'ZoneMembersCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type ZoneMembersMaxAggregate = {
  __typename?: 'ZoneMembersMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMembersMinAggregate = {
  __typename?: 'ZoneMembersMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMinAggregate = {
  __typename?: 'ZoneMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneStoresCountAggregate = {
  __typename?: 'ZoneStoresCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type ZoneStoresMaxAggregate = {
  __typename?: 'ZoneStoresMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type ZoneStoresMinAggregate = {
  __typename?: 'ZoneStoresMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type ZoneTaxratesAvgAggregate = {
  __typename?: 'ZoneTaxratesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesCountAggregate = {
  __typename?: 'ZoneTaxratesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type ZoneTaxratesMaxAggregate = {
  __typename?: 'ZoneTaxratesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesMinAggregate = {
  __typename?: 'ZoneTaxratesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesSumAggregate = {
  __typename?: 'ZoneTaxratesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { LoginUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'verified' | 'verificationToken' | 'lastLogin' | 'firstName' | 'lastName' | 'phoneNumber'>
    ) }
  ) }
);

export type UpdateAccountInfoMutationVariables = Exact<{
  lname: Scalars['String'];
  fname: Scalars['String'];
  phone: Scalars['String'];
}>;


export type UpdateAccountInfoMutation = (
  { __typename?: 'Mutation' }
  & { UpdateAccountInfo: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);

export type CreateNewAddressMutationVariables = Exact<{
  fullName: Scalars['String'];
  addressLine: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  landmark: Scalars['String'];
  postalCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  type: AddressType;
}>;


export type CreateNewAddressMutation = (
  { __typename?: 'Mutation' }
  & { CreateNewAddress: (
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  fname: Scalars['String'];
  lname: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { CreateUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'phoneNumber' | 'verified' | 'firstName' | 'lastName'>
    ) }
  ) }
);

export type AddToCartMutationVariables = Exact<{
  userId: Scalars['ID'];
  store: Scalars['ID'];
  variant: Scalars['ID'];
  price: Scalars['ID'];
  quantity: Scalars['Int'];
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & { addToCart: (
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  ) }
);

export type RemoveCartItemMutationVariables = Exact<{
  cartId: Scalars['ID'];
}>;


export type RemoveCartItemMutation = (
  { __typename?: 'Mutation' }
  & { removeCartItem: (
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  ) }
);

export type CreateShopOrderMutationVariables = Exact<{
  address: Scalars['String'];
  transaction?: Maybe<Scalars['String']>;
  orderLineDto: Array<CartItemDto>;
}>;


export type CreateShopOrderMutation = (
  { __typename?: 'Mutation' }
  & { createShopOrder: (
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
  ) }
);

export type ShiftProductVariantMutationVariables = Exact<{
  prodId: Scalars['String'];
  name: Scalars['String'];
}>;


export type ShiftProductVariantMutation = (
  { __typename?: 'Mutation' }
  & { ShiftProductVariant: (
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id'>
  ) }
);

export type CreateReviewMutationVariables = Exact<{
  text: Scalars['String'];
  stars: Scalars['Float'];
  varId: Scalars['String'];
}>;


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { creteReview: (
    { __typename?: 'Review' }
    & Pick<Review, 'id'>
  ) }
);

export type CreateViewMutationVariables = Exact<{
  id: Scalars['String'];
  variant: Scalars['String'];
}>;


export type CreateViewMutation = (
  { __typename?: 'Mutation' }
  & { createView: (
    { __typename?: 'View' }
    & Pick<View, 'id'>
  ) }
);

export type GetMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuQuery = (
  { __typename?: 'Query' }
  & { GetMenu: (
    { __typename?: 'MenuResponseTypes' }
    & Pick<MenuResponseTypes, 'menu'>
  ) }
);

export type GetAllCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCollectionQuery = (
  { __typename?: 'Query' }
  & { getAllCollection: Array<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'name' | 'description'>
  )> }
);

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = (
  { __typename?: 'Query' }
  & { getHomePage: (
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'title' | 'targetId' | 'single' | 'list'>
  ) }
);

export type GetSingleProductVariantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSingleProductVariantQuery = (
  { __typename?: 'Query' }
  & { getSingleProductVariant: (
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name' | 'rating'>
    & { specs?: Maybe<(
      { __typename?: 'ProductVariantSpecs' }
      & Pick<ProductVariantSpecs, 'id' | 'specs'>
    )>, product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'productName' | 'slug' | 'description'>
      & { options: Array<(
        { __typename?: 'ProductOptionGroup' }
        & Pick<ProductOptionGroup, 'id' | 'name' | 'code'>
        & { options: Array<(
          { __typename?: 'ProductOption' }
          & Pick<ProductOption, 'id' | 'name' | 'code'>
        )> }
      )>, variants: Array<(
        { __typename?: 'ProductVariant' }
        & Pick<ProductVariant, 'id' | 'name'>
      )>, collection?: Maybe<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
        & { seo: (
          { __typename?: 'Seo' }
          & Pick<Seo, 'urlKey' | 'metadesc' | 'metatitle' | 'metakeywords'>
        ) }
      )>, facets: Array<(
        { __typename?: 'FacetValue' }
        & Pick<FacetValue, 'id' | 'code'>
        & { facet: (
          { __typename?: 'Facet' }
          & Pick<Facet, 'id' | 'name' | 'code'>
        ) }
      )>, assets?: Maybe<Array<(
        { __typename?: 'ProductAsset' }
        & Pick<ProductAsset, 'id'>
        & { asset: (
          { __typename?: 'Asset' }
          & Pick<Asset, 'id' | 'preview' | 'source'>
        ) }
      )>> }
    ), asset?: Maybe<(
      { __typename?: 'ProductVariantAsset' }
      & Pick<ProductVariantAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview' | 'source'>
      ) }
    )>, price?: Maybe<Array<(
      { __typename?: 'ProductVariantPrice' }
      & Pick<ProductVariantPrice, 'id' | 'price'>
      & { store?: Maybe<(
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'storeName'>
      )> }
    )>>, seo?: Maybe<(
      { __typename?: 'Seo' }
      & Pick<Seo, 'id' | 'urlKey' | 'metatitle' | 'metadesc' | 'metakeywords'>
    )>, reviews: Array<(
      { __typename?: 'Review' }
      & Pick<Review, 'id' | 'createdAt' | 'stars' | 'text'>
    )> }
  ) }
);

export type GetProductAssetQueryVariables = Exact<{
  prodId?: Maybe<Scalars['ID']>;
  variantId?: Maybe<Scalars['ID']>;
}>;


export type GetProductAssetQuery = (
  { __typename?: 'Query' }
  & { getProductAsset: (
    { __typename?: 'Asset' }
    & Pick<Asset, 'id' | 'preview' | 'source'>
  ) }
);

export type GetDefaultStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDefaultStoreQuery = (
  { __typename?: 'Query' }
  & { GetDefaultStore: (
    { __typename?: 'Store' }
    & Pick<Store, 'id' | 'storeName' | 'phoneNumber' | 'officialemail'>
  ) }
);

export type GetCollectionTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionTreeQuery = (
  { __typename?: 'Query' }
  & { GetCollectionTree: Array<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'name'>
    & { children: Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name'>
      & { children: Array<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
      )> }
    )> }
  )> }
);

export type GetSingleCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSingleCollectionQuery = (
  { __typename?: 'Query' }
  & { GetSingleCollection: (
    { __typename?: 'CollectionSingleResponse' }
    & { collection: (
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name' | 'description'>
      & { children: Array<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
      )> }
    ), facetValues: Array<(
      { __typename?: 'FacetValue' }
      & Pick<FacetValue, 'id' | 'code'>
      & { facet: (
        { __typename?: 'Facet' }
        & Pick<Facet, 'id' | 'code' | 'name'>
      ) }
    )> }
  ) }
);

export type GetFacetsByCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFacetsByCollectionQuery = (
  { __typename?: 'Query' }
  & { GetFacetsByCollection: Array<(
    { __typename?: 'FacetValue' }
    & Pick<FacetValue, 'id' | 'code'>
    & { facet: (
      { __typename?: 'Facet' }
      & Pick<Facet, 'id' | 'name' | 'code'>
    ) }
  )> }
);

export type GetProductVariantForCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetProductVariantForCollectionQuery = (
  { __typename?: 'Query' }
  & { GetProductVariantForCollection: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name' | 'rating'>
    & { price?: Maybe<Array<(
      { __typename?: 'ProductVariantPrice' }
      & Pick<ProductVariantPrice, 'id' | 'price'>
    )>>, product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'productName'>
      & { collection?: Maybe<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
      )> }
    ), asset?: Maybe<(
      { __typename?: 'ProductVariantAsset' }
      & Pick<ProductVariantAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview' | 'source'>
      ) }
    )> }
  )> }
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { GetCurrentUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'verified' | 'verificationToken' | 'lastLogin' | 'firstName' | 'lastName' | 'phoneNumber'>
    & { cart?: Maybe<(
      { __typename?: 'Cart' }
      & Pick<Cart, 'id'>
      & { items: Array<(
        { __typename?: 'CartItem' }
        & Pick<CartItem, 'id'>
        & { variant: (
          { __typename?: 'ProductVariant' }
          & Pick<ProductVariant, 'id' | 'name'>
          & { asset?: Maybe<(
            { __typename?: 'ProductVariantAsset' }
            & Pick<ProductVariantAsset, 'id'>
            & { asset: (
              { __typename?: 'Asset' }
              & Pick<Asset, 'preview'>
            ) }
          )> }
        ), store: (
          { __typename?: 'Store' }
          & Pick<Store, 'id' | 'storeName'>
        ), price: (
          { __typename?: 'ProductVariantPrice' }
          & Pick<ProductVariantPrice, 'id' | 'price'>
        ) }
      )> }
    )>, address?: Maybe<Array<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'fullName' | 'addressLine' | 'city' | 'state' | 'landmark' | 'postalCode' | 'phoneNumber' | 'addressType'>
    )>> }
  ) }
);

export type GetUserAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAddressQuery = (
  { __typename?: 'Query' }
  & { GetUserAddress: Array<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'fullName' | 'addressLine' | 'city' | 'state' | 'landmark' | 'postalCode' | 'phoneNumber' | 'addressType'>
  )> }
);

export type GetProductVariantByProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductVariantByProductQuery = (
  { __typename?: 'Query' }
  & { getProductVariantByProduct: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name' | 'rating'>
    & { product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'productName'>
      & { options: Array<(
        { __typename?: 'ProductOptionGroup' }
        & Pick<ProductOptionGroup, 'id' | 'name' | 'code'>
        & { options: Array<(
          { __typename?: 'ProductOption' }
          & Pick<ProductOption, 'id' | 'name' | 'code'>
        )> }
      )> }
    ), asset?: Maybe<(
      { __typename?: 'ProductVariantAsset' }
      & Pick<ProductVariantAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview' | 'source'>
      ) }
    )>, price?: Maybe<Array<(
      { __typename?: 'ProductVariantPrice' }
      & Pick<ProductVariantPrice, 'id' | 'price'>
      & { store?: Maybe<(
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'storeName'>
      )> }
    )>>, seo?: Maybe<(
      { __typename?: 'Seo' }
      & Pick<Seo, 'id' | 'urlKey' | 'metatitle' | 'metadesc' | 'metakeywords'>
    )> }
  )> }
);

export type QueryFacetQueryVariables = Exact<{
  id: Scalars['ID'];
  collection?: Maybe<Scalars['ID']>;
}>;


export type QueryFacetQuery = (
  { __typename?: 'Query' }
  & { queryFacet: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'productName' | 'slug'>
    & { collection?: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name'>
    )>, featuredAsset: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'preview' | 'source'>
    ) }
  )> }
);

export type SingProductInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SingProductInfoQuery = (
  { __typename?: 'Query' }
  & { singProductInfo: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'productName'>
  ) }
);

export type SingProductPriceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SingProductPriceQuery = (
  { __typename?: 'Query' }
  & { singProductPrice: (
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id'>
    & { price?: Maybe<Array<(
      { __typename?: 'ProductVariantPrice' }
      & Pick<ProductVariantPrice, 'id' | 'price' | 'taxIncluded'>
      & { promoprice?: Maybe<(
        { __typename?: 'PromotionVariantPrice' }
        & Pick<PromotionVariantPrice, 'id' | 'priceType' | 'value'>
      )>, store?: Maybe<(
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'storeName'>
        & { vendor?: Maybe<(
          { __typename?: 'Vendor' }
          & Pick<Vendor, 'id'>
        )> }
      )> }
    )>> }
  ) }
);

export type GetStocksAndZipAvailabilityQueryVariables = Exact<{
  zipf: Scalars['Int'];
  variantId: Scalars['ID'];
}>;


export type GetStocksAndZipAvailabilityQuery = (
  { __typename?: 'Query' }
  & { GetStocksAndZipAvailability: Array<(
    { __typename?: 'ProductVariantPrice' }
    & Pick<ProductVariantPrice, 'id' | 'price'>
    & { store?: Maybe<(
      { __typename?: 'Store' }
      & Pick<Store, 'id' | 'storeName'>
    )> }
  )> }
);

export type GetPaymentCodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentCodesQuery = (
  { __typename?: 'Query' }
  & { getPaymentCodes: (
    { __typename?: 'PaymentMethod' }
    & Pick<PaymentMethod, 'id' | 'api'>
  ) }
);

export type GetMyOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyOrdersQuery = (
  { __typename?: 'Query' }
  & { getMyOrders: Array<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'address' | 'createdAt' | 'totalPrice' | 'mode'>
    & { line: Array<(
      { __typename?: 'OrderLine' }
      & Pick<OrderLine, 'id'>
      & { item: (
        { __typename?: 'OrderItem' }
        & { productVariant: (
          { __typename?: 'ProductVariant' }
          & Pick<ProductVariant, 'id' | 'name'>
        ) }
      ) }
    )> }
  )> }
);

export type GetSingleOrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSingleOrderQuery = (
  { __typename?: 'Query' }
  & { getSingleOrder: (
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'address' | 'createdAt' | 'totalPrice' | 'mode'>
    & { line: Array<(
      { __typename?: 'OrderLine' }
      & Pick<OrderLine, 'id' | 'stage' | 'priceField'>
      & { store: (
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'storeName'>
      ), item: (
        { __typename?: 'OrderItem' }
        & Pick<OrderItem, 'id' | 'quantity'>
        & { productVariant: (
          { __typename?: 'ProductVariant' }
          & Pick<ProductVariant, 'id' | 'name'>
        ) }
      ) }
    )> }
  ) }
);

export type GetFacetDocumentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFacetDocumentQuery = (
  { __typename?: 'Query' }
  & { GetFacetDocument: (
    { __typename?: 'FacetValue' }
    & Pick<FacetValue, 'id' | 'code'>
    & { facet: (
      { __typename?: 'Facet' }
      & Pick<Facet, 'id' | 'name' | 'code'>
    ) }
  ) }
);


export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
  LoginUser(email: $email, password: $password) {
    user {
      id
      email
      verified
      verificationToken
      lastLogin
      firstName
      lastName
      phoneNumber
    }
    token
  }
}
    `;
export const UpdateAccountInfoDocument = gql`
    mutation UpdateAccountInfo($lname: String!, $fname: String!, $phone: String!) {
  UpdateAccountInfo(lname: $lname, fname: $fname, phone: $phone) {
    id
    email
  }
}
    `;
export const CreateNewAddressDocument = gql`
    mutation CreateNewAddress($fullName: String!, $addressLine: String!, $city: String!, $state: String!, $landmark: String!, $postalCode: String!, $phoneNumber: String!, $type: AddressType!) {
  CreateNewAddress(fullName: $fullName, addressLine: $addressLine, city: $city, state: $state, landmark: $landmark, postalCode: $postalCode, phoneNumber: $phoneNumber, type: $type) {
    id
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($fname: String!, $lname: String!, $phone: String!, $password: String!, $email: String!) {
  CreateUser(fname: $fname, lname: $lname, phone: $phone, password: $password, email: $email) {
    user {
      id
      email
      phoneNumber
      verified
      firstName
      lastName
    }
    token
  }
}
    `;
export const AddToCartDocument = gql`
    mutation AddToCart($userId: ID!, $store: ID!, $variant: ID!, $price: ID!, $quantity: Int!) {
  addToCart(userId: $userId, store: $store, variant: $variant, price: $price, quantity: $quantity) {
    id
  }
}
    `;
export const RemoveCartItemDocument = gql`
    mutation RemoveCartItem($cartId: ID!) {
  removeCartItem(cartId: $cartId) {
    id
  }
}
    `;
export const CreateShopOrderDocument = gql`
    mutation createShopOrder($address: String!, $transaction: String, $orderLineDto: [CartItemDto!]!) {
  createShopOrder(address: $address, transaction: $transaction, orderLineDto: $orderLineDto) {
    id
  }
}
    `;
export const ShiftProductVariantDocument = gql`
    mutation ShiftProductVariant($prodId: String!, $name: String!) {
  ShiftProductVariant(prodId: $prodId, name: $name) {
    id
  }
}
    `;
export const CreateReviewDocument = gql`
    mutation createReview($text: String!, $stars: Float!, $varId: String!) {
  creteReview(text: $text, stars: $stars, varId: $varId) {
    id
  }
}
    `;
export const CreateViewDocument = gql`
    mutation createView($id: String!, $variant: String!) {
  createView(id: $id, variant: $variant) {
    id
  }
}
    `;
export const GetMenuDocument = gql`
    query GetMenu {
  GetMenu {
    menu
  }
}
    `;
export const GetAllCollectionDocument = gql`
    query getAllCollection {
  getAllCollection {
    id
    name
    description
  }
}
    `;
export const GetHomePageDocument = gql`
    query getHomePage {
  getHomePage {
    id
    title
    targetId
    single
    list
  }
}
    `;
export const GetSingleProductVariantDocument = gql`
    query getSingleProductVariant($id: ID!) {
  getSingleProductVariant(id: $id) {
    id
    name
    rating
    specs {
      id
      specs
    }
    product {
      id
      productName
      slug
      options {
        id
        name
        code
        options {
          id
          name
          code
        }
      }
      description
      variants {
        id
        name
      }
      collection {
        id
        name
        seo {
          urlKey
          metadesc
          metatitle
          metakeywords
        }
      }
      facets {
        id
        code
        facet {
          id
          name
          code
        }
      }
      assets {
        id
        asset {
          id
          preview
          source
        }
      }
    }
    asset {
      id
      asset {
        id
        preview
        source
      }
    }
    price {
      id
      price
      store {
        id
        storeName
      }
    }
    seo {
      id
      urlKey
      metatitle
      metadesc
      metakeywords
    }
    reviews {
      id
      createdAt
      stars
      text
    }
  }
}
    `;
export const GetProductAssetDocument = gql`
    query getProductAsset($prodId: ID, $variantId: ID) {
  getProductAsset(prodId: $prodId, variantId: $variantId) {
    id
    preview
    source
  }
}
    `;
export const GetDefaultStoreDocument = gql`
    query GetDefaultStore {
  GetDefaultStore {
    id
    storeName
    phoneNumber
    officialemail
  }
}
    `;
export const GetCollectionTreeDocument = gql`
    query GetCollectionTree {
  GetCollectionTree {
    id
    name
    children {
      id
      name
      children {
        id
        name
      }
    }
  }
}
    `;
export const GetSingleCollectionDocument = gql`
    query GetSingleCollection($id: ID!) {
  GetSingleCollection(id: $id) {
    collection {
      id
      name
      description
      children {
        id
        name
      }
    }
    facetValues {
      id
      code
      facet {
        id
        code
        name
      }
    }
  }
}
    `;
export const GetFacetsByCollectionDocument = gql`
    query GetFacetsByCollection($id: ID!) {
  GetFacetsByCollection(id: $id) {
    id
    code
    facet {
      id
      name
      code
    }
  }
}
    `;
export const GetProductVariantForCollectionDocument = gql`
    query GetProductVariantForCollection($id: ID!, $limit: Int, $search: String) {
  GetProductVariantForCollection(id: $id, limit: $limit, search: $search) {
    id
    name
    rating
    price {
      id
      price
    }
    product {
      id
      productName
      collection {
        id
        name
      }
    }
    asset {
      id
      asset {
        id
        preview
        source
      }
    }
  }
}
    `;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  GetCurrentUser {
    id
    email
    verified
    verificationToken
    lastLogin
    firstName
    lastName
    phoneNumber
    cart {
      id
      items {
        id
        variant {
          id
          name
          asset {
            id
            asset {
              preview
            }
          }
        }
        store {
          id
          storeName
        }
        price {
          id
          price
        }
      }
    }
    address {
      id
      fullName
      addressLine
      city
      state
      landmark
      postalCode
      phoneNumber
      addressType
    }
  }
}
    `;
export const GetUserAddressDocument = gql`
    query GetUserAddress {
  GetUserAddress {
    id
    fullName
    addressLine
    city
    state
    landmark
    postalCode
    phoneNumber
    addressType
  }
}
    `;
export const GetProductVariantByProductDocument = gql`
    query getProductVariantByProduct($id: ID!) {
  getProductVariantByProduct(id: $id) {
    id
    name
    rating
    product {
      id
      productName
      options {
        id
        name
        code
        options {
          id
          name
          code
        }
      }
    }
    asset {
      id
      asset {
        id
        preview
        source
      }
    }
    price {
      id
      price
      store {
        id
        storeName
      }
    }
    seo {
      id
      urlKey
      metatitle
      metadesc
      metakeywords
    }
  }
}
    `;
export const QueryFacetDocument = gql`
    query QueryFacet($id: ID!, $collection: ID) {
  queryFacet(id: $id, collection: $collection) {
    id
    productName
    slug
    collection {
      id
      name
    }
    featuredAsset {
      id
      preview
      source
    }
  }
}
    `;
export const SingProductInfoDocument = gql`
    query singProductInfo($id: ID!) {
  singProductInfo(id: $id) {
    id
    productName
  }
}
    `;
export const SingProductPriceDocument = gql`
    query SingProductPrice($id: ID!) {
  singProductPrice(id: $id) {
    id
    price {
      id
      price
      promoprice {
        id
        priceType
        value
      }
      taxIncluded
      store {
        id
        storeName
        vendor {
          id
        }
      }
    }
  }
}
    `;
export const GetStocksAndZipAvailabilityDocument = gql`
    query GetStocksAndZipAvailability($zipf: Int!, $variantId: ID!) {
  GetStocksAndZipAvailability(zipf: $zipf, variantId: $variantId) {
    id
    price
    store {
      id
      storeName
    }
  }
}
    `;
export const GetPaymentCodesDocument = gql`
    query getPaymentCodes {
  getPaymentCodes {
    id
    api
  }
}
    `;
export const GetMyOrdersDocument = gql`
    query getMyOrders {
  getMyOrders {
    id
    address
    createdAt
    totalPrice
    mode
    line {
      id
      item {
        productVariant {
          id
          name
        }
      }
    }
  }
}
    `;
export const GetSingleOrderDocument = gql`
    query getSingleOrder($id: ID!) {
  getSingleOrder(id: $id) {
    id
    address
    createdAt
    totalPrice
    mode
    line {
      id
      stage
      priceField
      store {
        id
        storeName
      }
      item {
        id
        productVariant {
          id
          name
        }
        quantity
      }
    }
  }
}
    `;
export const GetFacetDocumentDocument = gql`
    query GetFacetDocument($id: ID!) {
  GetFacetDocument(id: $id) {
    id
    code
    facet {
      id
      name
      code
    }
  }
}
    `;