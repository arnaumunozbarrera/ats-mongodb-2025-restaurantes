db.getCollection('restaurants').aggregate(
  [{ $match: { type_of_food: 'Chinese' } }],
  { maxTimeMS: 60000, allowDiskUse: true }
);


