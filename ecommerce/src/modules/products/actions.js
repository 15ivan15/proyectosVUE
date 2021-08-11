//actions es hacer peticiones
export async function fetchProducts({commit}){
    const data = [{"id": 1,
    "name": "Plasticspoonblack",
    "picture": "https://robohash.org/ututquis.png?size=100x100&set=set1",
    "price": 14652.43,
    "stock": 5},{"id": 1,
    "name": "Plasticspoonblack",
    "picture": "https://robohash.org/ututquis.png?size=100x100&set=set1",
    "price": 14652.43,
    "stock": 5}]
    //await fetch('/public/data/products');
    const products = await data;
    commit('setProducts', products);
}