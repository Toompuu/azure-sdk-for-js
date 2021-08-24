/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const PairedRegion: msRest.CompositeMapper = {
  serializedName: "PairedRegion",
  type: {
    name: "Composite",
    className: "PairedRegion",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LocationMetadata: msRest.CompositeMapper = {
  serializedName: "LocationMetadata",
  type: {
    name: "Composite",
    className: "LocationMetadata",
    modelProperties: {
      regionType: {
        readOnly: true,
        serializedName: "regionType",
        type: {
          name: "String"
        }
      },
      regionCategory: {
        readOnly: true,
        serializedName: "regionCategory",
        type: {
          name: "String"
        }
      },
      geographyGroup: {
        readOnly: true,
        serializedName: "geographyGroup",
        type: {
          name: "String"
        }
      },
      longitude: {
        readOnly: true,
        serializedName: "longitude",
        type: {
          name: "String"
        }
      },
      latitude: {
        readOnly: true,
        serializedName: "latitude",
        type: {
          name: "String"
        }
      },
      physicalLocation: {
        readOnly: true,
        serializedName: "physicalLocation",
        type: {
          name: "String"
        }
      },
      pairedRegion: {
        serializedName: "pairedRegion",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PairedRegion"
            }
          }
        }
      },
      homeLocation: {
        readOnly: true,
        serializedName: "homeLocation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Location: msRest.CompositeMapper = {
  serializedName: "Location",
  type: {
    name: "Composite",
    className: "Location",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "Region",
            "EdgeZone"
          ]
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      regionalDisplayName: {
        readOnly: true,
        serializedName: "regionalDisplayName",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "LocationMetadata"
        }
      }
    }
  }
};

export const SubscriptionPolicies: msRest.CompositeMapper = {
  serializedName: "SubscriptionPolicies",
  type: {
    name: "Composite",
    className: "SubscriptionPolicies",
    modelProperties: {
      locationPlacementId: {
        readOnly: true,
        serializedName: "locationPlacementId",
        type: {
          name: "String"
        }
      },
      quotaId: {
        readOnly: true,
        serializedName: "quotaId",
        type: {
          name: "String"
        }
      },
      spendingLimit: {
        readOnly: true,
        serializedName: "spendingLimit",
        type: {
          name: "Enum",
          allowedValues: [
            "On",
            "Off",
            "CurrentPeriodOff"
          ]
        }
      }
    }
  }
};

export const ManagedByTenant: msRest.CompositeMapper = {
  serializedName: "ManagedByTenant",
  type: {
    name: "Composite",
    className: "ManagedByTenant",
    modelProperties: {
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Subscription: msRest.CompositeMapper = {
  serializedName: "Subscription",
  type: {
    name: "Composite",
    className: "Subscription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      state: {
        readOnly: true,
        serializedName: "state",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Warned",
            "PastDue",
            "Disabled",
            "Deleted"
          ]
        }
      },
      subscriptionPolicies: {
        serializedName: "subscriptionPolicies",
        type: {
          name: "Composite",
          className: "SubscriptionPolicies"
        }
      },
      authorizationSource: {
        serializedName: "authorizationSource",
        type: {
          name: "String"
        }
      },
      managedByTenants: {
        serializedName: "managedByTenants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedByTenant"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const TenantIdDescription: msRest.CompositeMapper = {
  serializedName: "TenantIdDescription",
  type: {
    name: "Composite",
    className: "TenantIdDescription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      tenantCategory: {
        readOnly: true,
        serializedName: "tenantCategory",
        type: {
          name: "Enum",
          allowedValues: [
            "Home",
            "ProjectedBy",
            "ManagedBy"
          ]
        }
      },
      country: {
        readOnly: true,
        serializedName: "country",
        type: {
          name: "String"
        }
      },
      countryCode: {
        readOnly: true,
        serializedName: "countryCode",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      domains: {
        readOnly: true,
        serializedName: "domains",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      defaultDomain: {
        readOnly: true,
        serializedName: "defaultDomain",
        type: {
          name: "String"
        }
      },
      tenantType: {
        readOnly: true,
        serializedName: "tenantType",
        type: {
          name: "String"
        }
      },
      tenantBrandingLogoUrl: {
        readOnly: true,
        serializedName: "tenantBrandingLogoUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceName: msRest.CompositeMapper = {
  serializedName: "ResourceName",
  type: {
    name: "Composite",
    className: "ResourceName",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckResourceNameResult: msRest.CompositeMapper = {
  serializedName: "CheckResourceNameResult",
  type: {
    name: "Composite",
    className: "CheckResourceNameResult",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: msRest.CompositeMapper = {
  serializedName: "ErrorAdditionalInfo",
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      info: {
        readOnly: true,
        serializedName: "info",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        readOnly: true,
        serializedName: "additionalInfo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LocationListResult: msRest.CompositeMapper = {
  serializedName: "LocationListResult",
  type: {
    name: "Composite",
    className: "LocationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Location"
            }
          }
        }
      }
    }
  }
};

export const SubscriptionListResult: msRest.CompositeMapper = {
  serializedName: "SubscriptionListResult",
  type: {
    name: "Composite",
    className: "SubscriptionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Subscription"
            }
          }
        }
      },
      nextLink: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantListResult: msRest.CompositeMapper = {
  serializedName: "TenantListResult",
  type: {
    name: "Composite",
    className: "TenantListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TenantIdDescription"
            }
          }
        }
      },
      nextLink: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};