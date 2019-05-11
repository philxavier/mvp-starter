let _ = require('underscore')


let filterByClass = (listOfPosts, filterOfClass) => {
    return listOfPosts.filter((ele) => {
      return filterOfClass.includes(ele.class);
    })
  }

let filterByType = (listOfPosts, filterOfType) => {
  let result = [];
  for (let i = 0; i < listOfPosts.length; i++) {
    if (listOfPosts[i].type === 'cg' || listOfPosts[i].type === 'vc' || listOfPosts[i].type === 'c') {
      if (filterOfType.includes('c')) {
        result.push(listOfPosts[i]);
      }
    } else if (listOfPosts[i].type === 'e') {
      if (filterOfType.includes('e')) {
        result.push(listOfPosts[i]);
      }
    } else {
      if(filterOfType.includes('o')) {
        result.push(listOfPosts[i]);
      }
    }
  }
  return result;
}

let filterByRates = (listOfPosts, filterOfRates) => {
  return listOfPosts.filter((ele) => {
    return filterOfRates.includes(ele.boss[1]);
  })
}

function mergeArrays() {
  let args = Array.from(arguments);
  args = args.filter((ele) => {
    return ele.length > 0;
  })
  // console.log(args)
  return _.intersection(...args)
}


  module.exports = {
      filterByClass,
      filterByRates,
      filterByType,
      mergeArrays
  }