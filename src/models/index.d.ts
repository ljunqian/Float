import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly coins: number;
  readonly meditateD: string;
  readonly sleepD: string;
  readonly moveD: string;
  readonly focusD: string;
  readonly friends?: string[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}