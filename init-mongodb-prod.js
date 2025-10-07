db = db.getSiblingDB("blogprod");

db.createUser({
    user: "blogProd",
    pwd: "hawdou2006",
    roles:[{role: "readWrite", db: "blogprod"}]
})