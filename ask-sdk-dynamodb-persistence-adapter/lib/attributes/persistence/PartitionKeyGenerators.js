/*
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var AskSdkUtils_1 = require("../../utils/AskSdkUtils");
/**
 * Object containing implementations of {@link PartitionKeyGenerator}.
 */
exports.PartitionKeyGenerators = {
    /**
     * Gets attributes id using user id.
     * @param {RequestEnvelope} requestEnvelope
     * @returns {string}
     */
    userId: function (requestEnvelope) {
        if (!(requestEnvelope
            && requestEnvelope.context
            && requestEnvelope.context.System
            && requestEnvelope.context.System.user
            && requestEnvelope.context.System.user.userId)) {
            throw AskSdkUtils_1.createAskSdkError('PartitionKeyGenerators', 'Cannot retrieve user id from request envelope!');
        }
        return requestEnvelope.context.System.user.userId;
    },
    /**
     * Gets attributes id using device id.
     * @param {RequestEnvelope} requestEnvelope
     * @returns {string}
     */
    deviceId: function (requestEnvelope) {
        if (!(requestEnvelope
            && requestEnvelope.context
            && requestEnvelope.context.System
            && requestEnvelope.context.System.device
            && requestEnvelope.context.System.device.deviceId)) {
            throw AskSdkUtils_1.createAskSdkError('PartitionKeyGenerators', 'Cannot retrieve device id from request envelope!');
        }
        return requestEnvelope.context.System.device.deviceId;
    },
};
//# sourceMappingURL=PartitionKeyGenerators.js.map