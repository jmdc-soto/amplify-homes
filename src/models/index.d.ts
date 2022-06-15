import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CUSTOMERMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CUSTOMER {
  readonly id: string;
  readonly name?: string | null;
  readonly other?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CUSTOMER, CUSTOMERMetaData>);
  static copyOf(source: CUSTOMER, mutator: (draft: MutableModel<CUSTOMER, CUSTOMERMetaData>) => MutableModel<CUSTOMER, CUSTOMERMetaData> | void): CUSTOMER;
}