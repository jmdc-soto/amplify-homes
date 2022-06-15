import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type URLMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CUSTOMERMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class URL {
  readonly id: string;
  readonly URL?: string | null;
  readonly CUSTOMERS?: (CUSTOMER | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<URL, URLMetaData>);
  static copyOf(source: URL, mutator: (draft: MutableModel<URL, URLMetaData>) => MutableModel<URL, URLMetaData> | void): URL;
}

export declare class CUSTOMER {
  readonly id: string;
  readonly name?: string | null;
  readonly other?: string | null;
  readonly payload?: string | null;
  readonly urlID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CUSTOMER, CUSTOMERMetaData>);
  static copyOf(source: CUSTOMER, mutator: (draft: MutableModel<CUSTOMER, CUSTOMERMetaData>) => MutableModel<CUSTOMER, CUSTOMERMetaData> | void): CUSTOMER;
}