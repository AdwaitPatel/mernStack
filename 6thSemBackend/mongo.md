# MongoDB

## MongoDB Operators

### Comparison Operators

- $lt (less than)

```
db.users.find({age: {$lt: 24}})
```

- $gt (greater than)

```
db.users.find({age: {$gt: 24}})
```

- $lte (less than and equals)

```
db.users.find({age: {$lte: 24}})
```

- $gte (greater than and equals)

```
db.users.find({age: {$gte: 24}})
```

- $eq (equals)

```
db.users.find({age: {$eq: 24}})
```

### Logical Operators

- $and (performs logical AND among operations)

```
db.collection.find({
    $and: [
        {<expression>},
        {<expression>},
        ...
    ]
})
```

Implicit AND :

```
db.collection.find({<expression>, <expression>})
```

- $or (performs logical OR among operations)

```
db.collection.find({
    $or: [
        {<expression>},
        {<expression>},
        ...
    ]
})
```

### Insert(Create)

```
db.collection.insertOne({})
db.collection.insertMany([{}, {}, {}])
```

### Read(find) operators

```
db.collection.find(
    {<query>},
    {<projection>}
)
```

- $in (includes multiple values when filtering)

```
db.users.find({isActive: {$in: [true, false]}})
```

- $nin (not in excludes that values when filtering)

```
db.users.find({isActive: {$nin: [true]}})
```

### Update operators

```
db.collection.updateOne(
    <filter>,
    <update>,
    {options}
)
```

- $set (updates a key-value pair if don't exists it creates a new one)
- $push (appends a new value inside an array)

```
db.podcasts.updateOne(
    { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
    { $push: { hosts: "Nic Raboy" } }
)
```

- $addToSet (adds a new value to array but doesn't appends if it already exists inside the array)
- upsert (Insert a document with info if matching documents don't exist)

```
db.podcasts.updateOne(
    { title: "The Developer Hub" },
    { $set: { topics: ["databases", "MongoDB"] } },
    { upsert: true }
)
```

### Delete

```
db.collection.deleteOne({})
db.collection.deleteMany([{}, {}, {}])
```

### Searching inside an array

- $elemMatch (checks if any value matches inside an array)

### Cursor

- a pointer that lets MongoDB return query results one by one instead of all at once(kinda think of like pipe operator from linux).

1. cursor.sort()

```
cursor.sort({name: 1}) For Ascending order
cursor.sort({name: -1}) For Descending order
```

2. cursor.limit(<number>)

```
db.collection.find().limit(5)
```

### Projection

- include only necessary fields to view in output

```
db.users.find(
    {isActive: true},
    {name:1, address:1, _id:0}  // this is the projection(1 means include and 0 don't)
)
```

- There are two types of Projection Approaches :
- \_id is always included by default.

1. Inclusion approach : set the values to 1(only these fields will be shown)

```
db.collection.find(
    {<query>},
    {
        <field>: 1,
        <field>: 1
    }
)
```

2. Exclusion approach : set values to 0(other fields than these will be shown)

```
db.collection.find(
    {<query>},
    {
        <field>: 0,
        <field>: 0
    }
)
```

#### NOTE : Inclusion & Exclusion statements can't be combined in projections where \_id is an exception.


### Count documents
- counts total numbers of documents

```
db.collection.countDocuments(
    {<query>},
    {<options>}
)
```

