/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** List of supported operations. */
export interface OperationList {
  /**
   * The system metadata relating to this resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** List of supported operations. */
  value?: OperationsDefinition[];
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Definition object with the name and properties of an operation. */
export interface OperationsDefinition {
  /** Name of the operation. */
  name?: string;
  /** Display object with properties of the operation. */
  display?: OperationsDisplayDefinition;
}

/** Display object with properties of the operation. */
export interface OperationsDisplayDefinition {
  /** Resource provider of the operation. */
  provider?: string;
  /** Resource for the operation. */
  resource?: string;
  /** Short description of the operation. */
  operation?: string;
  /** Description of the operation. */
  description?: string;
}

/** An error response from Attestation. */
export interface CloudError {
  /** An error response from Attestation. */
  error?: CloudErrorBody;
}

/** An error response from Attestation. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for displaying in a user interface. */
  message?: string;
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {
  /**
   * The ARM identifier for Private Endpoint
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Parameters for creating an attestation provider */
export interface AttestationServiceCreationParams {
  /** The supported Azure location where the attestation provider should be created. */
  location: string;
  /** The tags that will be assigned to the attestation provider. */
  tags?: { [propertyName: string]: string };
  /** Properties of the attestation provider */
  properties: AttestationServiceCreationSpecificParams;
}

/** Client supplied parameters used to create a new attestation provider. */
export interface AttestationServiceCreationSpecificParams {
  /** JSON Web Key Set defining a set of X.509 Certificates that will represent the parent certificate for the signing certificate used for policy operations */
  policySigningCertificates?: JsonWebKeySet;
}

export interface JsonWebKeySet {
  /**
   * The value of the "keys" parameter is an array of JWK values.  By
   * default, the order of the JWK values within the array does not imply
   * an order of preference among them, although applications of JWK Sets
   * can choose to assign a meaning to the order for their purposes, if
   * desired.
   */
  keys?: JsonWebKey[];
}

export interface JsonWebKey {
  /**
   * The "alg" (algorithm) parameter identifies the algorithm intended for
   * use with the key.  The values used should either be registered in the
   * IANA "JSON Web Signature and Encryption Algorithms" registry
   * established by [JWA] or be a value that contains a Collision-
   * Resistant Name.
   */
  alg?: string;
  /** The "crv" (curve) parameter identifies the curve type */
  crv?: string;
  /** RSA private exponent or ECC private key */
  d?: string;
  /** RSA Private Key Parameter */
  dp?: string;
  /** RSA Private Key Parameter */
  dq?: string;
  /** RSA public exponent, in Base64 */
  e?: string;
  /** Symmetric key */
  k?: string;
  /**
   * The "kid" (key ID) parameter is used to match a specific key.  This
   * is used, for instance, to choose among a set of keys within a JWK Set
   * during key rollover.  The structure of the "kid" value is
   * unspecified.  When "kid" values are used within a JWK Set, different
   * keys within the JWK Set SHOULD use distinct "kid" values.  (One
   * example in which different keys might use the same "kid" value is if
   * they have different "kty" (key type) values but are considered to be
   * equivalent alternatives by the application using them.)  The "kid"
   * value is a case-sensitive string.
   */
  kid?: string;
  /**
   * The "kty" (key type) parameter identifies the cryptographic algorithm
   * family used with the key, such as "RSA" or "EC". "kty" values should
   * either be registered in the IANA "JSON Web Key Types" registry
   * established by [JWA] or be a value that contains a Collision-
   * Resistant Name.  The "kty" value is a case-sensitive string.
   */
  kty: string;
  /** RSA modulus, in Base64 */
  n?: string;
  /** RSA secret prime */
  p?: string;
  /** RSA secret prime, with p < q */
  q?: string;
  /** RSA Private Key Parameter */
  qi?: string;
  /**
   * Use ("public key use") identifies the intended use of
   * the public key. The "use" parameter is employed to indicate whether
   * a public key is used for encrypting data or verifying the signature
   * on data. Values are commonly "sig" (signature) or "enc" (encryption).
   */
  use?: string;
  /** X coordinate for the Elliptic Curve point */
  x?: string;
  /**
   * The "x5c" (X.509 certificate chain) parameter contains a chain of one
   * or more PKIX certificates [RFC5280].  The certificate chain is
   * represented as a JSON array of certificate value strings.  Each
   * string in the array is a base64-encoded (Section 4 of [RFC4648] --
   * not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.
   * The PKIX certificate containing the key value MUST be the first
   * certificate.
   */
  x5C?: string[];
  /** Y coordinate for the Elliptic Curve point */
  y?: string;
}

/** Parameters for patching an attestation provider */
export interface AttestationServicePatchParams {
  /** The tags that will be assigned to the attestation provider. */
  tags?: { [propertyName: string]: string };
}

/** List of private endpoint connection associated with the specified storage account */
export interface PrivateEndpointConnectionListResult {
  /** Array of private endpoint connections */
  value?: PrivateEndpointConnection[];
}

/** Attestation Providers List. */
export interface AttestationProviderListResult {
  /**
   * The system metadata relating to this resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** Attestation Provider array. */
  value?: AttestationProvider[];
}

/** The Private Endpoint Connection resource. */
export type PrivateEndpointConnection = Resource & {
  /** The resource of private end point. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state of the private endpoint connection resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
};

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export type TrackedResource = Resource & {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
};

/** Attestation service response message. */
export type AttestationProvider = TrackedResource & {
  /**
   * The system metadata relating to this resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** Trust model for the attestation provider. */
  trustModel?: string;
  /** Status of attestation service. */
  status?: AttestationServiceStatus;
  /** Gets the uri of attestation service */
  attestUri?: string;
  /**
   * List of private endpoint connections associated with the attestation provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
};

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link AttestationServiceStatus} that the service accepts. */
export enum KnownAttestationServiceStatus {
  Ready = "Ready",
  NotReady = "NotReady",
  Error = "Error"
}

/**
 * Defines values for AttestationServiceStatus. \
 * {@link KnownAttestationServiceStatus} can be used interchangeably with AttestationServiceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Ready** \
 * **NotReady** \
 * **Error**
 */
export type AttestationServiceStatus = string;

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected"
}

/**
 * Defines values for PrivateEndpointServiceConnectionStatus. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  Succeeded = "Succeeded",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed"
}

/**
 * Defines values for PrivateEndpointConnectionProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type PrivateEndpointConnectionProvisioningState = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationList;

/** Optional parameters. */
export interface AttestationProvidersGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AttestationProvidersGetResponse = AttestationProvider;

/** Optional parameters. */
export interface AttestationProvidersCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type AttestationProvidersCreateResponse = AttestationProvider;

/** Optional parameters. */
export interface AttestationProvidersUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type AttestationProvidersUpdateResponse = AttestationProvider;

/** Optional parameters. */
export interface AttestationProvidersDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AttestationProvidersListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type AttestationProvidersListResponse = AttestationProviderListResult;

/** Optional parameters. */
export interface AttestationProvidersListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type AttestationProvidersListByResourceGroupResponse = AttestationProviderListResult;

/** Optional parameters. */
export interface AttestationProvidersListDefaultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listDefault operation. */
export type AttestationProvidersListDefaultResponse = AttestationProviderListResult;

/** Optional parameters. */
export interface AttestationProvidersGetDefaultByLocationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDefaultByLocation operation. */
export type AttestationProvidersGetDefaultByLocationResponse = AttestationProvider;

/** Optional parameters. */
export interface PrivateEndpointConnectionsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PrivateEndpointConnectionsListResponse = PrivateEndpointConnectionListResult;

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type PrivateEndpointConnectionsCreateResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AttestationManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
