define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "doc/main.js",
    "group": "/home/julianbr96/Documents/repo/sirena-htg-api/doc/main.js",
    "groupTitle": "/home/julianbr96/Documents/repo/sirena-htg-api/doc/main.js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/api/private/accounts/{id}",
    "title": "Delete one Account",
    "name": "DeleteOneAccount",
    "group": "Account",
    "version": "1.3.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed. ",
        "description": "<p>Require an authorization valid token in the request.</p>"
      }
    ],
    "description": "<p>Delete the account that corresponds to the id sent as a parameter in the URL.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The account unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status (deleted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    status: \"deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "error",
            "description": "<p>Account not found. Id sent as a parameter does not correspond to any existing account.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself.</p>"
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": \"Account not found\",\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/private/accounts",
    "title": "Get all accounts",
    "name": "GetAllAccounts",
    "group": "Account",
    "version": "1.3.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed. ",
        "description": "<p>Require an authorization valid token in the request.</p>"
      }
    ],
    "description": "<p>Returns a json that includes all the accounts (accounts path) as an array and a status of the request, success or failed (status path)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique Account ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Account's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code of the entire account.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "profileType",
            "description": "<p>Account profile types, only supports &quot;customer&quot;, &quot;demoCustomer&quot;, &quot;partner&quot; and &quot;leadProvider&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Account availability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status (success)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    \"accounts\": [\n        {\n            \"enabled\": true,\n            \"_id\": \"5e5e6a05aeb68553bca1cij\",\n            \"name\": \"TEST ACCOUNT\",\n            \"countryCode\": \"AR\",\n            \"profileType\": \"customer\",\n            \"createdAt\": \"2020-03-03T14:30:29.932Z\",\n            \"updatedAt\": \"2020-03-04T21:19:16.691Z\",\n            \"__v\": 0\n        }\n    ],\n    \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      }
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/accounts/{id}",
    "title": "Get one account",
    "name": "GetOneAccount",
    "group": "Account",
    "version": "1.3.0",
    "description": "<p>Returns a json that includes the account identified by the id parameter (type path) and a status of the request (success or failed)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Account unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique Account ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Account name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status (success)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    \"account\": {\n        \"_id\": \"5e5e6a05aeb68553bca1ctg\",\n        \"name\": \"TEST ACCOUNT\"\n    },\n    \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": {\n        \"stringValue\": \"\\\"5e5e93fc44cb610bf3a1315h\\\"\",\n        \"kind\": \"ObjectId\",\n        \"value\": \"5e5e93fc44cb610bf3a1315h\",\n        \"path\": \"_id\",\n        \"reason\": {},\n        \"message\": \"Cast to ObjectId failed for value \\\"5e5e93fc44cb610bf3a1315h\\\" at path \\\"_id\\\" for model \\\"user\\\"\",\n        \"name\": \"CastError\"\n    },\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/private/accounts",
    "title": "Create an Account",
    "name": "createOneAccount",
    "group": "Account",
    "version": "1.3.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed. ",
        "description": "<p>Require an authorization valid token in the request.</p>"
      }
    ],
    "description": "<p>Creates a new account using the account path inside request body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Account name that must be unique. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "profileType",
            "description": "<p>Account profile types, only supports &quot;customer&quot;, &quot;demoCustomer&quot;, &quot;partner&quot; and &quot;leadProvider&quot;. Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code of the entire account. Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Account availability. Optional. True by default.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example of a valid POST request:",
        "content": "{\n    account: {\n        \"name\": \"Account Test 1\",\n        \"countryCode\": \"AR\",\n        \"profileType\": \"customer\"\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "accountCreatedId",
            "description": "<p>Id generated for the new account.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (success).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    accountCreatedId: \"5e5c11a7561a66783510d837n\",\n    status: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "failedAccount",
            "description": "<p>Account attempted to be created</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": {\n        \"errors\": {\n            \"name\": {\n                \"message\": \"Error, expected `name` to be unique. Value: `TEST ACCOUNT 1`\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Error, expected `name` to be unique. Value: `TEST ACCOUNT 1`\",\n                    \"type\": \"unique\",\n                    \"path\": \"name\",\n                    \"value\": \"TEST ACCOUNT 1\"\n                },\n                \"kind\": \"unique\",\n                \"path\": \"name\",\n                \"value\": \"TEST ACCOUNT 1\"\n            }\n        },\n        \"_message\": \"account validation failed\",\n        \"message\": \"account validation failed: name: Error, expected `name` to be unique. Value: `TEST ACCOUNT 1`\",\n        \"name\": \"ValidationError\"\n    },\n    \"failedAccount\": {\n        \"enabled\": true,\n        \"_id\": \"5e656a74c980ba1b9f25f849\",\n        \"name\": \"TEST ACCOUNT 1\",\n        \"countryCode\": \"AR\",\n        \"profileType\": \"customer\"\n    },\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Account"
  },
  {
    "type": "put",
    "url": "/api/private/accounts/{id}",
    "title": "Modify an account",
    "name": "modifyOneAccount",
    "group": "Account",
    "version": "1.3.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed. ",
        "description": "<p>Require an authorization valid token in the request.</p>"
      }
    ],
    "description": "<p>Modify the account identified by the id parameter in the url using the account path inside request body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Account unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Account name that must be unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "profileType",
            "description": "<p>Account profile types, only supports &quot;customer&quot;, &quot;demoCustomer&quot;, &quot;partner&quot; and &quot;leadProvider&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code of the entire account.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Account availability.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example of a valid PUT request:",
        "content": "{\n    \"account\": {\n        \"countryCode\": \"AR\",\n        \"profileType\": \"customer\"\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (success).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    status: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "error",
            "description": "<p>Account not found. Id sent as a parameter does not correspond to any existing account.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": {\n        \"errors\": {\n            \"name\": {\n                \"message\": \"Cannot read property 'ownerDocument' of null\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Cannot read property 'ownerDocument' of null\",\n                    \"type\": \"unique\",\n                    \"path\": \"name\",\n                    \"value\": \"TEST ACCOUNT 1\",\n                    \"reason\": {}\n                },\n                \"kind\": \"unique\",\n                \"path\": \"name\",\n                \"value\": \"TEST ACCOUNT 1\",\n                \"reason\": {}\n            }\n        },\n        \"_message\": \"Validation failed\",\n        \"message\": \"Validation failed: name: Cannot read property 'ownerDocument' of null\",\n        \"name\": \"ValidationError\"\n    },\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Account"
  },
  {
    "type": "delete",
    "url": "/api/private/groups/{id}",
    "title": "Delete one Group",
    "name": "DeleteOneGroup",
    "group": "Group",
    "version": "1.3.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed. ",
        "description": "<p>Require an authorization valid token in the request.</p>"
      }
    ],
    "description": "<p>Delete the group that corresponds to the id sent as a parameter in the URL.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The group unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status (deleted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    status: \"deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "error",
            "description": "<p>Group not found. Id sent as a parameter does not correspond to any existing group.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself.</p>"
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": \"Group not found\",\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/api/groups",
    "title": "Get all groups",
    "name": "GetAllGroups",
    "group": "Group",
    "version": "1.3.0",
    "description": "<p>Returns a json that includes all the groups (groups path) as an array and a status of the request, success or failed (status path)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique Group ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Group)",
            "optional": false,
            "field": "parent",
            "description": "<p>Information about the parent group</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Account)",
            "optional": false,
            "field": "account",
            "description": "<p>Information about the account that the group belongs to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    \"groups\": [\n        {\n            \"parent\": null,\n            \"_id\": \"5e5c11a7561a66783510d35h\",\n            \"account\": {\n                \"_id\": \"5e5e6a05aeb68553bca1cbh46\",\n                \"name\": \"TEST ACCOUNT 1\"\n            },\n            \"name\": \"TEST GROUP FATHER 1\"\n        },\n        {\n            \"parent\": {\n                \"parent\": null,\n                \"_id\": \"5e5c11a7561a66783510d34j\",\n                \"account\": \"5e5e6a05aeb68553bca1cbh46\",\n                \"name\": \"TEST GROUP FATHER 1\"\n            },\n            \"_id\": \"5e5c1204561a66783510d36m\",\n            \"account\": {\n                \"_id\": \"5e5e6a05aeb68553bca1cbh46\",\n                \"name\": \"TEST ACCOUNT 1\"\n            },\n            \"name\": \"TEST GROUP CHILD 1\"\n        }\n    ],\n    \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>Internal Server Error</p>"
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ]
      }
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/api/groups/{id}",
    "title": "Get one group",
    "name": "GetOneGroup",
    "group": "Group",
    "version": "1.3.0",
    "description": "<p>Returns a json that includes the group identified by the id parameter (type path) and a status of the request (success or failed)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Group unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique Group ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Group)",
            "optional": false,
            "field": "parent",
            "description": "<p>Information about the parent group</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Account)",
            "optional": false,
            "field": "account",
            "description": "<p>Information about the account that the group belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status (success)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    \"group\": {\n        \"parent\": null,\n        \"_id\": \"5e5c11a7561a66783510d36v\",\n        \"account\": {\n            \"_id\": \"5e5e6a05aeb68553bca1ctg6\",\n            \"name\": \"TEST ACCOUNT 1\"\n        },\n        \"name\": \"TEST GROUP FATHER 1\"\n    },\n    \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": {\n        \"stringValue\": \"\\\"5e5c11a7561a66783510d37v\\\"\",\n        \"kind\": \"ObjectId\",\n        \"value\": \"5e5c11a7561a66783510d37v\",\n        \"path\": \"_id\",\n        \"reason\": {},\n        \"message\": \"Cast to ObjectId failed for value \\\"5e5c11a7561a66783510d37v\\\" at path \\\"_id\\\" for model \\\"group\\\"\",\n        \"name\": \"CastError\"\n    },\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/api/private/groups",
    "title": "Create a Group",
    "name": "createOneGroup",
    "group": "Group",
    "version": "1.3.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed. ",
        "description": "<p>Require an authorization valid token in the request.</p>"
      }
    ],
    "description": "<p>Creates a new group using the group path inside request body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "type",
            "description": "<p>Group's types, only supports oem, group, store, leadProvider. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>The group ID of the parent of this group. The group must exist. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>The account ID that the group belongs to. The account must exist. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Industry",
            "description": "<p>Group industries, only supports vehicle, insurance, savingPlan, realEstate, retail. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code of the entire group. Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Group availability. Optional. True by default.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Group's language. Only supports es, pt and en. Optional</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example of a valid POST request:",
        "content": "{\n    group: {\n        \"account\": \"5e5e6a05aeb68553bca1cti6\",\n        \"name\": \"Groups Test 1\",\n        \"countryCode\": \"AR\",\n        \"language\": \"es\",\n        \"type\": \"store\",\n        \"industry\": \"insurance\"\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "groupCreatedId",
            "description": "<p>Id generated for the new group.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (success).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    groupCreatedId: \"5e5c11a7561a66783510d837n\",\n    status: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "failedGroup",
            "description": "<p>Group attempted to be created</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": {\n        \"errors\": {\n            \"account\": {\n                \"message\": \"Path `account` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `account` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"account\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"account\"\n            }\n        },\n        \"_message\": \"group validation failed\",\n        \"message\": \"group validation failed: account: Path `account` is required.\",\n        \"name\": \"ValidationError\"\n    },\n    \"failedGroup\": {\n        \"parent\": null,\n        \"type\": [],\n        \"industry\": [\n            \"insurance\"\n        ],\n        \"enabled\": true,\n        \"_id\": \"5e65b0f88fd90236c9b170e8\",\n        \"name\": \"Groups Test 1\",\n        \"countryCode\": \"AR\",\n        \"language\": \"es\"\n    },\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Group"
  },
  {
    "type": "put",
    "url": "/api/private/groups/{id}",
    "title": "Modify a group",
    "name": "modifyOneGroup",
    "group": "Group",
    "version": "1.3.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed. ",
        "description": "<p>Require an authorization valid token in the request.</p>"
      }
    ],
    "description": "<p>Modify the group identified by the id parameter in the url using the group path inside request body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "type",
            "description": "<p>Group's types, only supports oem, group, store, leadProvider. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>The group ID of the parent of this group. The group must exist. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Industry",
            "description": "<p>Group industries, only supports vehicle, insurance, savingPlan, realEstate, retail. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code of the entire group. Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enable",
            "description": "<p>Group availability. Optional. True by default.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Group's language. Only supports es, pt and en. Optional</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example of a valid PUT request:",
        "content": "{\n    \"account\": {\n        \"countryCode\": \"AR\",\n        \"profileType\": \"customer\"\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (success).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    status: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "error",
            "description": "<p>Group not found. Id sent as a parameter does not correspond to any existing group.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": \"Group not found\",\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "Group"
  },
  {
    "type": "delete",
    "url": "/api/users/{id}",
    "title": "Delete one user",
    "name": "DeleteOneUser",
    "group": "User",
    "version": "1.3.0",
    "description": "<p>Delete the user that corresponds to the id sent as a parameter in the URL.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status (deleted)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    status: \"deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "error",
            "description": "<p>User not found. Id sent as a parameter does not correspond to any existing user.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": \"User not found\",\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get all users",
    "name": "GetAllUser",
    "group": "User",
    "version": "1.3.0",
    "description": "<p>Returns a json that includes all the users (users path) and a status of the request, success or failed (status path)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Group)",
            "optional": false,
            "field": "group",
            "description": "<p>Information about the group that the user belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Account)",
            "optional": false,
            "field": "account",
            "description": "<p>Information about the account that the user belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Unique userName that represents the user, in email format</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "roles",
            "description": "<p>User's roles, only supports owner, agent, admin</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "available",
            "description": "<p>User availability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status (success, failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    user: {\n            \"roles\": [\n                \"owner\"\n            ],\n            \"available\": true,\n            \"_id\": \"5e5e93fc44cb610bf3a1323s\",\n            \"userName\": \"usertest@test.com\",\n            \"group\": {\n                \"parent\": null,\n                \"_id\": \"5e5c11a7561a66783510d45t\",\n                \"account\": \"5e5e6a05aeb68553bca1c4gt\",\n                \"name\": \"TEST GROUP\"\n            },\n            \"account\": {\n                \"_id\": \"5e5e6a05aeb68553bca145tgh\",\n                \"name\": \"TEST ACCOUNT\"\n            },\n            \"firstName\": \"Admin1\",\n            \"lastName\": \"TEST\"\n    },\n    status: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      }
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/{id}",
    "title": "Get one user",
    "name": "GetOneUser",
    "group": "User",
    "version": "1.3.0",
    "description": "<p>Returns a json that includes the user identified by the id parameter (type path) and a status of the request (success or failed)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Group)",
            "optional": false,
            "field": "group",
            "description": "<p>Information about the group that the user belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Account)",
            "optional": false,
            "field": "account",
            "description": "<p>Information about the account that the user belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Unique userName that represents the user, in email format</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "roles",
            "description": "<p>User's roles, only supports owner, agent, admin</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "available",
            "description": "<p>User availability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nin",
            "description": "<p>User's National Identification Number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User's phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status (success, failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    user: {\n            \"roles\": [\n                \"owner\"\n            ],\n            \"available\": true,\n            \"_id\": \"5e5e93fc44cb610bf3a1323s\",\n            \"userName\": \"usertest@test.com\",\n            \"group\": {\n                \"parent\": null,\n                \"_id\": \"5e5c11a7561a66783510d45t\",\n                \"account\": \"5e5e6a05aeb68553bca1c4gt\",\n                \"name\": \"TEST GROUP\"\n            },\n            \"account\": {\n                \"_id\": \"5e5e6a05aeb68553bca145tgh\",\n                \"name\": \"TEST ACCOUNT\"\n            },\n            \"firstName\": \"Admin1\",\n            \"lastName\": \"TEST\",\n            \"nin\": \"99999999999\",\n            \"phone\": \"a valid phone number\"\n    },\n    status: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (success, failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": {\n        \"stringValue\": \"\\\"5e5e93fc44cb610bf3a1315h\\\"\",\n        \"kind\": \"ObjectId\",\n        \"value\": \"5e5e93fc44cb610bf3a1315h\",\n        \"path\": \"_id\",\n        \"reason\": {},\n        \"message\": \"Cast to ObjectId failed for value \\\"5e5e93fc44cb610bf3a1315h\\\" at path \\\"_id\\\" for model \\\"user\\\"\",\n        \"name\": \"CastError\"\n    },\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Post a user",
    "name": "createOneUser",
    "group": "User",
    "version": "1.3.0",
    "description": "<p>Creates a new user using the user path inside request body</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>User's username that must follow email format and be unique. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "roles",
            "description": "<p>User's roles, only supports owner, agent and admin. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The group ID that the user belongs to. The group must exist. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>The account ID that the user belongs to. The account must exist. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nin",
            "description": "<p>User's National Identification Number. Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name. Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name. Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User's phone number. Must match /^+(?:[0-9] ?){6,14}[0-9]$/. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password. Must have one uppercase, one lowercase, one number and 8 characters at least. Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "available",
            "description": "<p>User's availability. Default true. Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>User's defined language. Only supports en, es and pt. Optional.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example of a valid POST request:",
        "content": "{\n    user: {\n            \"roles\": [\n                \"owner\"\n            ],\n            \"userName\": \"usertest@test.com\",\n            \"group\": \"5e5c11a7561a66783510d45t\",\n            \"account\": \"5e5e6a05aeb68553bca145tgh\",\n            \"password\": \"PasswordTest123\",\n            \"firstName\": \"Admin1\",\n            \"lastName\": \"TEST\"\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "userCreatedId",
            "description": "<p>Id generated for the new user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed or success).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    userCreatedId: \"5e5c11a7561a66783510d836h\",\n    status: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "failedUser",
            "description": "<p>User attempted to be created</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (success, failed)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": {\n        \"errors\": {\n            \"password\": {\n                \"path\": \"password\",\n                \"kind\": \"invalid\",\n                \"message\": \"Invalid Password. Must have one upper, one lower, one number and 8 characters at least\",\n                \"value\": \"Admintss\"\n            }\n        }\n    },\n    \"failedUser\": {\n        \"roles\": [\n            \"owner\"\n        ],\n        \"active\": true,\n        \"softRemoved\": false,\n        \"unlisted\": false,\n        \"available\": true,\n        \"_id\": \"5e615492c3d8b80004e79389\",\n        \"userName\": \"use1@account1.test\",\n        \"nin\": \"999999999\",\n        \"firstName\": \"Admin1\",\n        \"lastName\": \"TEST\",\n        \"phone\": \"+541234567892\",\n        \"language\": \"es\"\n    },\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/{id}",
    "title": "Modify a user",
    "name": "modifyOneUser",
    "group": "User",
    "version": "1.3.0",
    "description": "<p>Modify the user identified by the id parameter in the url using the user path inside request body</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>User's username that must follow email format and be unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "roles",
            "description": "<p>User's roles, only supports owner, agent and admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The group ID that the user belongs to. The group must exist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nin",
            "description": "<p>User's National Identification Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User's phone number. Must match /^+(?:[0-9] ?){6,14}[0-9]$/.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password. Must have one uppercase, one lowercase, one number and 8 characters at least.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "available",
            "description": "<p>User's availability.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example of a valid PUT request:",
        "content": "{\n    user: {\n            \"roles\": [\n                \"owner\"\n            ],\n            \"group\": \"5e5c11a7561a66783510d45t\",\n            \"password\": \"PasswordTest123\",\n            \"firstName\": \"Admin1\",\n            \"lastName\": \"TEST\"\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (success).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of a Success-Response:",
          "content": "{\n    status: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "error",
            "description": "<p>A json representing the error itself</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request (failed)</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "error",
            "description": "<p>User not found. Id sent as a parameter does not correspond to any existing user.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "error",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of an Error-Response:",
          "content": "{\n    \"error\": {\n        \"errors\": {\n            \"password\": {\n                \"path\": \"password\",\n                \"kind\": \"invalid\",\n                \"message\": \"Invalid Password. Must have one upper, one lower, one number and 8 characters at least\",\n                \"value\": \"Admintss\"\n            }\n        }\n    },\n    \"status\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/apiDocumentation/apidocumentation.js",
    "groupTitle": "User"
  }
] });
