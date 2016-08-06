# Node, Falcor, Rails
Proof of concept that connects Node, Falcor, and Rails (JSONAPI).

# Notes
## Plucking data
```javascript
var model = new falcor.Model({source: new falcor.HttpDataSource('/model.json') })
model
.get('data[0]["type", "attributes"]["name", "updated-at"]')
.then(response => {
  console.log(response)
})
```
## On ranges
There is no 'all' range syntax by design. 
https://github.com/Netflix/falcor/issues/493
