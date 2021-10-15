/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PortalSettingsListByServiceOptionalParams,
  PortalSettingsListByServiceResponse
} from "../models";

/** Interface representing a PortalSettings. */
export interface PortalSettings {
  /**
   * Lists a collection of portalsettings defined within a service instance..
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: PortalSettingsListByServiceOptionalParams
  ): Promise<PortalSettingsListByServiceResponse>;
}