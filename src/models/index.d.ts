import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Segment {
  readonly id: string;
  readonly speaker: string;
  readonly startTime: number;
  readonly endTime: number;
  readonly script: string;
  constructor(init: ModelInit<Segment>);
  static copyOf(source: Segment, mutator: (draft: MutableModel<Segment>) => MutableModel<Segment> | void): Segment;
}