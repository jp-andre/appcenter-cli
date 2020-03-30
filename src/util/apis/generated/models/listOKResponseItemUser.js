/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * User information of the one who intitiated the symbol upload
 *
 */
class ListOKResponseItemUser {
  /**
   * Create a ListOKResponseItemUser.
   * @property {string} [email] The email of the user
   * @property {string} [displayName] The full name of the user. Might for
   * example be first and last name
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListOKResponseItemUser
   *
   * @returns {object} metadata of ListOKResponseItemUser
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListOKResponseItem_user',
      type: {
        name: 'Composite',
        className: 'ListOKResponseItemUser',
        modelProperties: {
          email: {
            required: false,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListOKResponseItemUser;