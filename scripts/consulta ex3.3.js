db.getCollection('inspections').aggregate(
  [
    {
      $addFields: {
        restaurant_id_obj: {
          $toObjectId: '$restaurant_id'
        }
      }
    },
    {
      $lookup: {
        from: 'restaurants',
        localField: 'restaurant_id_obj',
        foreignField: '_id',
        as: 'Info'
      }
    }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

