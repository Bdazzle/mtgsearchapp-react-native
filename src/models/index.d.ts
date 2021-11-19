import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CardSetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CardSet {
  readonly id: string;
  readonly amount?: number;
  readonly card_faces?: (string | null)[];
  readonly colors?: (string | null)[];
  readonly icon_uri?: string;
  readonly multiverse_ids?: (number | null)[];
  readonly name?: string;
  readonly prices?: string;
  readonly set_name?: string;
  readonly image_uris?: string;
  readonly cardID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CardSet, CardSetMetaData>);
  static copyOf(source: CardSet, mutator: (draft: MutableModel<CardSet, CardSetMetaData>) => MutableModel<CardSet, CardSetMetaData> | void): CardSet;
}

export declare class Card {
  readonly id: string;
  readonly name?: string;
  readonly CardSets?: (CardSet | null)[];
  readonly sets?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Card, CardMetaData>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}