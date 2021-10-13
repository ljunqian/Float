/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMtx = /* GraphQL */ `
  mutation CreateMtx(
    $input: CreateMTXInput!
    $condition: ModelMTXConditionInput
  ) {
    createMTX(input: $input, condition: $condition) {
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
export const updateMtx = /* GraphQL */ `
  mutation UpdateMtx(
    $input: UpdateMTXInput!
    $condition: ModelMTXConditionInput
  ) {
    updateMTX(input: $input, condition: $condition) {
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
export const deleteMtx = /* GraphQL */ `
  mutation DeleteMtx(
    $input: DeleteMTXInput!
    $condition: ModelMTXConditionInput
  ) {
    deleteMTX(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
