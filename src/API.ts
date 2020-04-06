/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSegmentInput = {
  id?: string | null,
  speaker: string,
  startTime: number,
  endTime: number,
  script: string,
};

export type ModelSegmentConditionInput = {
  speaker?: ModelStringInput | null,
  startTime?: ModelIntInput | null,
  endTime?: ModelIntInput | null,
  script?: ModelStringInput | null,
  and?: Array< ModelSegmentConditionInput | null > | null,
  or?: Array< ModelSegmentConditionInput | null > | null,
  not?: ModelSegmentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSegmentInput = {
  id: string,
  speaker?: string | null,
  startTime?: number | null,
  endTime?: number | null,
  script?: string | null,
};

export type DeleteSegmentInput = {
  id?: string | null,
};

export type ModelSegmentFilterInput = {
  id?: ModelIDInput | null,
  speaker?: ModelStringInput | null,
  startTime?: ModelIntInput | null,
  endTime?: ModelIntInput | null,
  script?: ModelStringInput | null,
  and?: Array< ModelSegmentFilterInput | null > | null,
  or?: Array< ModelSegmentFilterInput | null > | null,
  not?: ModelSegmentFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateSegmentMutationVariables = {
  input: CreateSegmentInput,
  condition?: ModelSegmentConditionInput | null,
};

export type CreateSegmentMutation = {
  createSegment:  {
    __typename: "Segment",
    id: string,
    speaker: string,
    startTime: number,
    endTime: number,
    script: string,
  } | null,
};

export type UpdateSegmentMutationVariables = {
  input: UpdateSegmentInput,
  condition?: ModelSegmentConditionInput | null,
};

export type UpdateSegmentMutation = {
  updateSegment:  {
    __typename: "Segment",
    id: string,
    speaker: string,
    startTime: number,
    endTime: number,
    script: string,
  } | null,
};

export type DeleteSegmentMutationVariables = {
  input: DeleteSegmentInput,
  condition?: ModelSegmentConditionInput | null,
};

export type DeleteSegmentMutation = {
  deleteSegment:  {
    __typename: "Segment",
    id: string,
    speaker: string,
    startTime: number,
    endTime: number,
    script: string,
  } | null,
};

export type GetSegmentQueryVariables = {
  id: string,
};

export type GetSegmentQuery = {
  getSegment:  {
    __typename: "Segment",
    id: string,
    speaker: string,
    startTime: number,
    endTime: number,
    script: string,
  } | null,
};

export type ListSegmentsQueryVariables = {
  filter?: ModelSegmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSegmentsQuery = {
  listSegments:  {
    __typename: "ModelSegmentConnection",
    items:  Array< {
      __typename: "Segment",
      id: string,
      speaker: string,
      startTime: number,
      endTime: number,
      script: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSegmentSubscription = {
  onCreateSegment:  {
    __typename: "Segment",
    id: string,
    speaker: string,
    startTime: number,
    endTime: number,
    script: string,
  } | null,
};

export type OnUpdateSegmentSubscription = {
  onUpdateSegment:  {
    __typename: "Segment",
    id: string,
    speaker: string,
    startTime: number,
    endTime: number,
    script: string,
  } | null,
};

export type OnDeleteSegmentSubscription = {
  onDeleteSegment:  {
    __typename: "Segment",
    id: string,
    speaker: string,
    startTime: number,
    endTime: number,
    script: string,
  } | null,
};
