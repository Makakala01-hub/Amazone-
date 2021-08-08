/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String!) {
    onCreateProduct(owner: $owner) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String!) {
    onUpdateProduct(owner: $owner) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String!) {
    onDeleteProduct(owner: $owner) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct($owner: String!) {
    onCreateCartProduct(owner: $owner) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct($owner: String!) {
    onUpdateCartProduct(owner: $owner) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct($owner: String!) {
    onDeleteCartProduct(owner: $owner) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
