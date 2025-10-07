db = db.getSiblingDB("blogdev");

db.createUser({
    user: "blogUser",
    pwd: "pass",
    roles:[{role: "readWrite", db: "blogdev"}]
})