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
    },
  {$match: {
    business_name: "@ THAI RESTAURANT", result: "Pass"
  }}
]