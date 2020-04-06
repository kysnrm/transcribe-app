// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createSegment = /* GraphQL */ `
  mutation CreateSegment(
    $input: CreateSegmentInput!
    $condition: ModelSegmentConditionInput
  ) {
    createSegment(input: $input, condition: $condition) {
      id
      speaker
      startTime
      endTime
      script
    }
  }
`;
export const updateSegment = /* GraphQL */ `
  mutation UpdateSegment(
    $input: UpdateSegmentInput!
    $condition: ModelSegmentConditionInput
  ) {
    updateSegment(input: $input, condition: $condition) {
      id
      speaker
      startTime
      endTime
      script
    }
  }
`;
export const deleteSegment = /* GraphQL */ `
  mutation DeleteSegment(
    $input: DeleteSegmentInput!
    $condition: ModelSegmentConditionInput
  ) {
    deleteSegment(input: $input, condition: $condition) {
      id
      speaker
      startTime
      endTime
      script
    }
  }
`;
