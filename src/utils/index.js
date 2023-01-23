const delay = ms => new Promise(res => setTimeout(res, ms));
const findItemByName = (search, title) => search.map((data)=> data).find((data)=>data.items.title === title)


module.exports = {
    delay,
    findItemByName,
  };
  