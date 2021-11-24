/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ChildAvailabilityStatuses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealthContext } from "../microsoftResourceHealthContext";
import {
  AvailabilityStatus,
  ChildAvailabilityStatusesListNextOptionalParams,
  ChildAvailabilityStatusesListOptionalParams,
  ChildAvailabilityStatusesGetByResourceOptionalParams,
  ChildAvailabilityStatusesGetByResourceResponse,
  ChildAvailabilityStatusesListResponse,
  ChildAvailabilityStatusesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ChildAvailabilityStatuses operations. */
export class ChildAvailabilityStatusesImpl
  implements ChildAvailabilityStatuses {
  private readonly client: MicrosoftResourceHealthContext;

  /**
   * Initialize a new instance of the class ChildAvailabilityStatuses class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftResourceHealthContext) {
    this.client = client;
  }

  /**
   * Lists the historical availability statuses for a single child resource. Use the nextLink property in
   * the response to get the next page of availability status
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: ChildAvailabilityStatusesListOptionalParams
  ): PagedAsyncIterableIterator<AvailabilityStatus> {
    const iter = this.listPagingAll(resourceUri, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceUri, options);
      }
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: ChildAvailabilityStatusesListOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus[]> {
    let result = await this._list(resourceUri, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(resourceUri, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: ChildAvailabilityStatusesListOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * Gets current availability status for a single resource
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  getByResource(
    resourceUri: string,
    options?: ChildAvailabilityStatusesGetByResourceOptionalParams
  ): Promise<ChildAvailabilityStatusesGetByResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      getByResourceOperationSpec
    );
  }

  /**
   * Lists the historical availability statuses for a single child resource. Use the nextLink property in
   * the response to get the next page of availability status
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: ChildAvailabilityStatusesListOptionalParams
  ): Promise<ChildAvailabilityStatusesListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceUri: string,
    nextLink: string,
    options?: ChildAvailabilityStatusesListNextOptionalParams
  ): Promise<ChildAvailabilityStatusesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getByResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ResourceHealth/childAvailabilityStatuses/current",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ResourceHealth/childAvailabilityStatuses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};