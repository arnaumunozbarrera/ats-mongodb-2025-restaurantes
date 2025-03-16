sh.enableSharding("myDatabase");
sh.shardCollection("myDatabase.inspections", { date: 1 }); // Sharding por fecha de inspección
sh.shardCollection("myDatabase.restaurants", { postcode: "hashed" }); // Sharding por código postal del restaurante