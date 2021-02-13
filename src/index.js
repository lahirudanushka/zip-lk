const csvdb = require('csv-database');
const data = require ('./data.js');

const config = async () => {
    const fs = require('fs'); 
    const path = 'zips.csv'

    try {
        if (!fs.existsSync(path)) {
            const db = await csvdb("zips.csv", ["zip", "city", "province","district",'lon',"lat"], ',');
            await db.add(data);
        }
    } catch (err) {
        console.log(err);
    }

}

const get = async (searchQuery) => {
    const db = await csvdb("zips.csv", ["zip", "city", "province","district",'lon',"lat"], ',');
    let res = await (await db.get(eval(searchQuery))); 
    return res;
}

module.exports = { get ,config };