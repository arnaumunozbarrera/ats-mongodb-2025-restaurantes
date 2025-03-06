db.createCollection("inspections", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "certificate_number", "business_name", "date", "restaurant_id" ],
      properties: {
        certificate_number: {
          bsonType: "int",
          description: "Must be an Integer - Required."
        },
        business_name: {
          bsonType: "string",
          description: "Must be a String - Required."
        },
        date: {
          bsonType: "string",
          description: "Must be a String - Required."
        },
        result: {
          bsonType: "string",
          description: "Must be a String - Optional."
        },
        sector: {
          bsonType: "string",
          description: "Must be a String - Optional."
        },
        address: {
          bsonType: "object",
          description: "Must be an Object - Optional.",
          properties: {
            city: {
              bsonType: "string",
              description: "Must be a String - Optional."
            },
            zip: {
              bsonType: "string",
              description: "Must be a String - Optional."
            },
            street: {
              bsonType: "string",
              description: "Must be a String - Optional."
            },
            number: {
              bsonType: "string",
              description: "Must be a String - Optional."
            }
          }
        },
        restaurant_id: {
          bsonType: "string",
          description: "Must be a String - Required."
        }
      }
    }
  }
})
