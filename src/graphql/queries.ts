// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSegment = /* GraphQL */ `
  query GetSegment($id: ID!) {
    getSegment(id: $id) {
      id
      speaker
      startTime
      endTime
      script
    }
  }
`;
export const listSegments = /* GraphQL */ `
  query ListSegments(
    $filter: ModelSegmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSegments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        speaker
        startTime
        endTime
        script
      }
      nextToken
    }
  }
`;
