//https://github.com/linkedtales/scrapedin/wiki/Basic-Tutorial

const scrapedin = require('scrapedin');

async function getProfile() {
    
const profileScraper = await scrapedin({ email: 'rpucca@gmail.com', password: 'R1c4rd0L1nk3din@123' })
const profile = await profileScraper('https://www.linkedin.com/in/reedhastings/')
console.log(profile);
}

getProfile()