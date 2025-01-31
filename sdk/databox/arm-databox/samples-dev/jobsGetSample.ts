/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  JobsGetOptionalParams,
  DataBoxManagementClient
} from "@azure/arm-databox";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets information about the specified job.
 *
 * @summary Gets information about the specified job.
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/preview/2021-08-01-preview/examples/JobsGet.json
 */
async function jobsGet() {
  const subscriptionId = "fa68082f-8ff7-4a25-95c7-ce9da541242f";
  const resourceGroupName = "SdkRg5154";
  const jobName = "SdkJob952";
  const expand = "details";
  const options: JobsGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const result = await client.jobs.get(resourceGroupName, jobName, options);
  console.log(result);
}

jobsGet().catch(console.error);

/**
 * This sample demonstrates how to Gets information about the specified job.
 *
 * @summary Gets information about the specified job.
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/preview/2021-08-01-preview/examples/JobsGetCmk.json
 */
async function jobsGetCmk() {
  const subscriptionId = "fa68082f-8ff7-4a25-95c7-ce9da541242f";
  const resourceGroupName = "SdkRg7937";
  const jobName = "SdkJob1735";
  const expand = "details";
  const options: JobsGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const result = await client.jobs.get(resourceGroupName, jobName, options);
  console.log(result);
}

jobsGetCmk().catch(console.error);

/**
 * This sample demonstrates how to Gets information about the specified job.
 *
 * @summary Gets information about the specified job.
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/preview/2021-08-01-preview/examples/JobsGetCopyStuck.json
 */
async function jobsGetCopyStuck() {
  const subscriptionId = "fa68082f-8ff7-4a25-95c7-ce9da541242f";
  const resourceGroupName = "dmstestresource";
  const jobName = "TJx-637505258985313014";
  const expand = "details";
  const options: JobsGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const result = await client.jobs.get(resourceGroupName, jobName, options);
  console.log(result);
}

jobsGetCopyStuck().catch(console.error);

/**
 * This sample demonstrates how to Gets information about the specified job.
 *
 * @summary Gets information about the specified job.
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/preview/2021-08-01-preview/examples/JobsGetExport.json
 */
async function jobsGetExport() {
  const subscriptionId = "fa68082f-8ff7-4a25-95c7-ce9da541242f";
  const resourceGroupName = "SdkRg8091";
  const jobName = "SdkJob6429";
  const expand = "details";
  const options: JobsGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const result = await client.jobs.get(resourceGroupName, jobName, options);
  console.log(result);
}

jobsGetExport().catch(console.error);

/**
 * This sample demonstrates how to Gets information about the specified job.
 *
 * @summary Gets information about the specified job.
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/preview/2021-08-01-preview/examples/JobsGetWaitingForAction.json
 */
async function jobsGetWaitingForAction() {
  const subscriptionId = "fa68082f-8ff7-4a25-95c7-ce9da541242f";
  const resourceGroupName = "dmstestresource";
  const jobName = "TJx-637505258985313014";
  const expand = "details";
  const options: JobsGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const result = await client.jobs.get(resourceGroupName, jobName, options);
  console.log(result);
}

jobsGetWaitingForAction().catch(console.error);
