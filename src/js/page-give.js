// Common modules
import './common'

// Page modules
var awesomplete = require('imports?this=>window!../../node_modules/awesomplete/awesomplete.js') // eslint-disable-line
import List from 'list.js'
// var ListFuzzySearch = require('imports?this=>window!../../node_modules/list.fuzzysearch.js/dist/list.fuzzysearch.js')
import Holder from 'holderjs'
import Bricks from 'bricks.js'

// Run Holder
Holder.run({})

// Example data
var data = [
  { type: 'people', organisation: 'Mad Dogs', description: 'We support young people to get into employment so they can support themselves and live independent lives. Help with getting a job would be invaluable.' },
  { type: 'time', organisation: 'Coffee4Craig', description: 'Test result.' },
  { type: 'time', organisation: 'Coffee4Craig', description: 'Another Test result.' },
  { type: 'people', organisation: 'Mad Dogs', description: 'We support young people to get into employment so they can support themselves and live independent lives. Help with getting a job would be invaluable.' },
  { type: 'time', organisation: 'Coffee4Craig', description: 'Test result.' },
  { type: 'time', organisation: 'Coffee4Craig', description: 'Another Test result.' },
  { type: 'people', organisation: 'Mad Dogs', description: 'We support young people to get into employment so they can support themselves and live independent lives. Help with getting a job would be invaluable.' },
  { type: 'time', organisation: 'Coffee4Craig', description: 'Test result.' },
  { type: 'time', organisation: 'Coffee4Craig', description: 'Another Test result.' }
]

// List.js
var options = {
  valueNames: [ 'type', 'organisation', 'description' ],
  item: '<li><a href="#"><h3 class="h3 type"></h3><p class="organisation"></p><p class="description"></p></a></li>',
  plugins: [
    // ListFuzzySearch()
  ]
}

var theList = new List('js-search', options, data)

// Bricks.js
const sizes = [
  { columns: 1, gutter: 20 }, // assumed to be mobile, because of the missing mq property
  { mq: '360px', columns: 1, gutter: 20 },
  { mq: '480px', columns: 2, gutter: 20 },
  { mq: '600px', columns: 2, gutter: 20 },
  { mq: '800px', columns: 3, gutter: 20 }
]

const instance = Bricks({
  container: '.list',
  packed: 'data-packed', // if not prefixed with 'data-', it will be added
  sizes: sizes
})

// start it up, when the DOM is ready
// note that if images are in the grid, you may need to wait for document.readyState === 'complete'
document.addEventListener('DOMContentLoaded', event => {
  instance
    .resize(true) // bind resize handler
    .pack() // pack initial items
})

// Triggers
theList.on('sortStart', () =>
  instance.pack()
)

theList.on('searchComplete', () =>
  // alert('searched')
  instance.pack()
)

// theList.fuzzySearch.search('craig')

// Example bricks.js api
/*
instance
  .on('pack', () => console.log('ALL grid items packed.'))
  .on('update', () => console.log('NEW grid items packed.'))
  .on('resize', size => console.log('The grid has be re-packed to accommodate a new BREAKPOINT.'))
*/

// Example filter code
/*
listObj.filter(function(item) {
   if (item.values().id > 1) {
       return true;
   } else {
       return false;
   }
}); // Only items with id > 1 are shown in list

listObj.filter(); // Remove all filters
*/

// Example need data
/*
{
"id": "56d9ba46a3b948fda0b49374",
"description": "Interview & job seeking skills",
"serviceProviderId": "lifeshare",
  "type": "People",
"reason": "We support young people to get into employment so they can support themselves and live independent lives. Help with getting a job would be invaluable.",
"moreInfoUrl": null,
"postcode": "M1 1EB",
"instructions": "No specific skills or qualifications required. Please contact us for more detail.",
"email": "viv@streetsupport.net",
"donationAmountInPounds": 0,
"donationUrl": null
},
*/
