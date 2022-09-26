const url = 'https://search.outdoorsy.com/rentals?';

const limit = 10;
const offset = 8;

const getCampersService = async (keywords ) => {
    const requestUrl = `${url}filter[keywords]=${keywords}&page[limit]=${limit}&page[offset]=${offset}`;
    return fetch (requestUrl,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
};

export {
    getCampersService
}