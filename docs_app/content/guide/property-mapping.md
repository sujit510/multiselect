# Property Mapping:

Multiselect options needs data in predefined format, its format looks like below.
```js	
{
  "id": 3,
  "name": "Test 3",
  "category": "Cat 2",
  "disabled": true
}
```
If  the data is not present in the exact format, you can use `propertyMap` which will be used to transform your current dataset to the expected object structure. For example, the data is
```js  	
{
  "empId": 3,
  "empName": "Test 3",
  "empCategory": "Cat 2",
  "empActive": true
}
```
The `propertyMap` should look like below
```js
propertyMap = {
  "empId" : "id",
  "empName" : "name",
  "empCategory" : "category",
  "empActive" : "disabled"
}
```

So, the multiselect converts the `propertyMap` to its understandable format as below 

```js
{
  "id": 3,
  "name": "Test 3",
  "category": "Cat 2",
  "disabled": true
}
```

## Demo

<ms-property-map></ms-property-map>

<code-tabs>
  <code-pane title="app/property-map.component.ts" path="property-map/src/app/property-map.component.ts"></code-pane>
  <code-pane title="app/property-map.component.html" path="property-map/src/app/property-map.component.html"></code-pane>
</code-tabs>

But sometimes it may happen you have data in exact format as shown below but only the key to access category is different, in that case passing the key string to `groupedProperty` input will also work fine.

Demo showing passing only grouped property to array of json of teams because teams will have `team` key which will act as category for the particular team.

### Demo- Pending above.