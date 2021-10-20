import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly coins: number;
  readonly meditateD: number;
  readonly sleepD: number;
  readonly moveD: number;
  readonly focusD: number;
  readonly friends?: string[];
  readonly userData?: string[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}