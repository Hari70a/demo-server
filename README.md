# demo-server

This is repository is used for creating a fakeDB using JSON-Server package

# Steps to run locally
 * Clone the repository using
    `git clone <repo-url>`
 * Install the required dependencies using 
    `npm install`
 * Create the json structure which you want to mock it.
    For example:
    `{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "title": "Demo title",
      "author": "Hariraj",
      "id": 2
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }`
}
 * Run the app using the command
    `json-server db.json`
 ###Note: You can also auto-generate the specific contents.Example See `generate.js`
