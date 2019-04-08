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

const models = require('./index');

/**
 * Error log.
 *
 * @extends models['LogDiagnostics']
 */
class ErrorLogDiagnostics extends models['LogDiagnostics'] {
  /**
   * Create a ErrorLogDiagnostics.
   * @property {uuid} sessionId Session ID.
   * @property {uuid} id Error identifier.
   * @property {number} [appLaunchToffset] Corresponds to the number of
   * milliseconds elapsed between the time the error occurred and the app was
   * launched.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ErrorLogDiagnostics
   *
   * @returns {object} metadata of ErrorLogDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'error',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LogDiagnostics',
        className: 'ErrorLogDiagnostics',
        modelProperties: {
          timestamp: {
            required: true,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          installId: {
            required: true,
            serializedName: 'install_id',
            type: {
              name: 'String'
            }
          },
          device: {
            required: true,
            serializedName: 'device',
            type: {
              name: 'Composite',
              className: 'DeviceDiagnostics'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          sessionId: {
            required: true,
            serializedName: 'session_id',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          appLaunchToffset: {
            required: false,
            serializedName: 'app_launch_toffset',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorLogDiagnostics;