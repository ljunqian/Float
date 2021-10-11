import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class MTX {
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly price: number;
  readonly filePath: string;
  constructor(init: ModelInit<MTX>);
  static copyOf(source: MTX, mutator: (draft: MutableModel<MTX>) => MutableModel<MTX> | void): MTX;
}

export declare class User {
  readonly id: string;
  readonly coins: number;
  readonly meditateD: number;
  readonly sleepD: number;
  readonly moveD: number;
  readonly focusD: number;
  readonly friends?: string[];
  readonly accessoryEquipped: string;
  readonly backgroundEquipped: string;
  readonly hatEquipped: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}