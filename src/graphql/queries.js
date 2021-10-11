/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMtx = /* GraphQL */ `
  query GetMtx($id: ID!) {
    getMTX(id: $id) {
      id
      type
      title
      price
      filePath
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMtXs = /* GraphQL */ `
  query ListMtXs(
    $filter: ModelMTXFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMTXs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        price
        filePath
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMtxes = /* GraphQL */ `
  query SyncMtxes(
    $filter: ModelMTXFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMTXES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        title
        price
        filePath
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      coins
      meditateD
      sleepD
      moveD
      focusD
      friends
      accessoryEquipped
      backgroundEquipped
      hatEquipped
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coins
        meditateD
        sleepD
        moveD
        focusD
        friends
        accessoryEquipped
        backgroundEquipped
        hatEquipped
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coins
        meditateD
        sleepD
        moveD
        focusD
        friends
        accessoryEquipped
        backgroundEquipped
        hatEquipped
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
