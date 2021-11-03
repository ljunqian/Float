import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly coins: number;
  readonly meditateD: number;
  readonly sleepD: number;
  readonly moveD: number;
  readonly focusD: number;
  readonly friends?: string[];
  readonly feelings?: string[];
  readonly equippedBackground: string;
  readonly equippedHat: string;
  readonly equippedAccesory: string;
  readonly purchasedBackground?: string[];
  readonly purchasedHat?: string[];
  readonly purchasedAccessory?: string[];
  readonly purchasedVoucher?: string[];
  readonly completedMeditate?: string[];
  readonly completedSleep?: string[];
  readonly completedMove?: string[];
  readonly completedFocus?: string[];
  readonly recentGuides?: string[];
  readonly favGuides?: string[];
  readonly username: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}