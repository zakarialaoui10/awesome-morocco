### Navigate to the api directory : 
```bash
  cd api 
```
### Install dependencies (marked and jsdom)
```
 npm install
```
### Converting Data from Markdown to JSON
*run* : 
```
 npm run write-data
```

### Next Steps :
 - Set up a GitHub Actions workflow that triggers the npm run write-data script when the README file is updated
 - Implement Public API using expressjs
