//requiring path and fs modules
const path = require("path");
const fs = require("fs");

let currentId = 0;
let missingFolders = 1;

mapFoldersAndFiles("dependencies");

function mapFoldersAndFiles(name, parentId = currentId, files = {}) {
  const directoryPath = path.join(__dirname, `./../src/${name}`);
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, items) => {
      missingFolders -= 1;
      if (err) {
        return console.log(`Unable to scan directory: ${err}`);
      }

      items.forEach((item) => {
        currentId += 1;
        if (item.isDirectory()) missingFolders += 1;

        const newItem = {
          name: item.name,
          path: `${name}/${item.name}`,
          parentId,
          isDirectory: item.isDirectory(),
          children: [],
        };
        files[currentId] = newItem;

        if (parentId != 0) {
          files[parentId].children.push(currentId);
        }

        if (item.isDirectory()) {
          return mapFoldersAndFiles(`${name}/${item.name}`, currentId, files);
        }
      });

      if (missingFolders == 0) {
        writeFile(files);
      }
    });
  });
}

function writeFile(files) {
  fs.writeFile("./src/data/documents.json", JSON.stringify(files), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("data file generated succesfully");
  });
}
