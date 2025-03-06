db.createCollection("restaurants", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["URL", "address", "name", "postcode", "rating", "type_of_food"],
      properties: {
        URL: {
          bsonType: "string",
          description: "Must be a String - Required."
        },
        address: {
          bsonType: "string",
          description: "Must be a String - Required."
        },
        "address line 2": {
          bsonType: "string",
          description: "Must be a String - Optional."
        },
        name: {
          bsonType: "string",
          description: "Must be a String - Required."
        },
        outcode: {
          bsonType: "string",
          description: "Must be a String - Optional."
        },
        postcode: {
          bsonType: "string",
          description: "Must be a String - Required."
        },
        rating: {
          bsonType: "mixed",
          description: "Must be a Mixed - Required."
        },
        type_of_food: {
          bsonType: "string",
          description: "Must be a String - Required."
        }
      }
    }
  }
})
