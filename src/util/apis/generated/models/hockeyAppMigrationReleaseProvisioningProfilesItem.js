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
 * Describes the migration schema for a provisioning profile defined in
 * HockeyApp.
 *
 */
class HockeyAppMigrationReleaseProvisioningProfilesItem {
  /**
   * Create a HockeyAppMigrationReleaseProvisioningProfilesItem.
   * @property {string} name The name of the provisioning profile.
   * @property {string} bundleId The bundle/application identifier.
   * @property {string} teamIdentifier The team identifier.
   * @property {number} type The type of provisoning profile.
   * @property {boolean} isAppex A boolean value that indicates whether the
   * provisioning profile represents an app extension.
   * @property {date} [expiredAt] The provisioning profile's expiration date in
   * RFC 3339 format, i.e. 2017-07-21T17:32:28Z.
   * @property {array} [udids] A list of UDIDs of provisioned devices.
   * @property {string} [url] A provisioning profile URL that indicates where
   * to download it from.
   */
  constructor() {
  }

  /**
   * Defines the metadata of HockeyAppMigrationReleaseProvisioningProfilesItem
   *
   * @returns {object} metadata of HockeyAppMigrationReleaseProvisioningProfilesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HockeyAppMigrationRelease_provisioning_profilesItem',
      type: {
        name: 'Composite',
        className: 'HockeyAppMigrationReleaseProvisioningProfilesItem',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          bundleId: {
            required: true,
            serializedName: 'bundle_id',
            type: {
              name: 'String'
            }
          },
          teamIdentifier: {
            required: true,
            serializedName: 'team_identifier',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'Number'
            }
          },
          isAppex: {
            required: true,
            serializedName: 'is_appex',
            type: {
              name: 'Boolean'
            }
          },
          expiredAt: {
            required: false,
            serializedName: 'expired_at',
            type: {
              name: 'DateTime'
            }
          },
          udids: {
            required: false,
            serializedName: 'udids',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HockeyAppMigrationReleaseProvisioningProfilesItem;