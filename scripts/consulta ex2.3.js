db.getCollection('restaurants').aggregate(
  [{ $match: { rating: { $gt: 4 } } }],
  { maxTimeMS: 60000, allowDiskUse: true }
);


