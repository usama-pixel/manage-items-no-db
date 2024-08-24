# manage-items-no-db

To run the code, run the following command in the root folder


## Setup
clone project with
```bash
  git clone <REPOSITORY_URL>
```
## Installation

Install packages with npm

```bash
  cd manage-items-no-db
  npm install
```

## Runing the project

```bash
  npm start
```


## API Reference

### Get all items

```http
  GET /api/items
```
#### Sample
##### Request
```http
GET http://localhost:3000/items
```
##### Response
```json
[
  {
    "id": 1,
    "name": "Item 1",
    "description": "Item 1 description",
    "price": 10
  },
  {
    "id": 2,
    "name": "Item 2",
    "description": "Item 2 description",
    "price": 20
  }
]
```

### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Sample
##### Request
```http
GET http://localhost:3000/items/1
```
##### Response
```json
{
  "id": 1,
  "name": "Item 1",
  "description": "Item 1 description",
  "price": 10
}
```

### Create item

```http
    POST /api/items
```


| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. A unique id |
| `name` | `string` | **Required**. Name of the item |
| `description` | `string` | **Required**. Description of the item |
| `price` | `float` | **Required**. Non-negative float |

#### Sample
##### Request
```request
POST http://localhost:3000/items/1
BODY {
  "id": 5,
  "name": "Lord of the rings",
  "description": "Novel",
  "price": 123.21
}
```
##### Response
```json
{
  "id": 5,
  "name": "Lord of the rings",
  "description": "Novel",
  "price": 123.21
}
```

### Update item

```http
    PUT /api/items
```


| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. A unique id |
| `name` | `string` | **Optional**. Name of the item |
| `description` | `string` | **Optional**. Description of the item |
| `price` | `float` | **Optional**. Non-negative float |

#### Sample
##### Request
```request
PUT http://localhost:3000/items
BODY {
  "id": 1,
  "price": 200
}
```
##### Response
```json
{
  "id": 1,
  "name": "Item 1",
  "description": "Item 1 description",
  "price": 200
}
```

### Delete item

```http
    DELETE /api/items/${id}
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. A unique id |
