import requests


apiKey = 'bfbc1ae0a7bb4d86b5603688244cb5ff'
apiUrl = 'https://api.diffbot.com/v3/analyze?url=https%3A%2F%2Fwww.reebok.in%2Fcategory%2Fcategory%2Fsale-9223%3Fsource%3Dmenu%26page%3D1%26orderway%3Ddesc%26orderby%3Dprice&token=bfbc1ae0a7bb4d86b5603688244cb5ff'

headers = {"accept": "application/json"}

response = requests.get(apiUrl, headers=headers)

print(response.text)


# const fs = require('fs');

# const fetchData = () => {
#     const apiKey = 'bfbc1ae0a7bb4d86b5603688244cb5ff';
#     const currentUrl = 'https://www.reebok.in/category/category/sale-9223?source=menu&page=3&orderway=desc&orderby=price';
#     fetch(`https://api.diffbot.com/v3/list?url=${encodeURIComponent(currentUrl)}&token=${apiKey}`)
#         .then(response => response.json())
#         .then(data => {
#             const jsonData = JSON.stringify(data, null, 2);
#             fs.writeFile('output.json', jsonData, (err) => {
#                 if (err) {
#                     console.error('Error writing to file:', err);
#                 } else {
#                     console.log('Data written to output.json file');
#                 }
#             });
#         })
#         .catch(error => {
#             console.error('Error fetching data:', error);
#         });
# };

# fetchData();