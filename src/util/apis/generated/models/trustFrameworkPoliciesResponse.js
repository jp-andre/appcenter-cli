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
 * Class representing a TrustFrameworkPoliciesResponse.
 */
class TrustFrameworkPoliciesResponse {
  /**
   * Create a TrustFrameworkPoliciesResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrustFrameworkPoliciesResponse
   *
   * @returns {object} metadata of TrustFrameworkPoliciesResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrustFrameworkPoliciesResponse',
      type: {
        name: 'Composite',
        className: 'TrustFrameworkPoliciesResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TrustFrameworkPolicyResponseElementType',
                  type: {
                    name: 'Composite',
                    className: 'TrustFrameworkPolicyResponse'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TrustFrameworkPoliciesResponse;