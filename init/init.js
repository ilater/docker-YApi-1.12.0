db = db.getSiblingDB('yapi');
db.createUser({
  user: "yapi",
  pwd: "yapi",
  roles: [{ role: "readWrite", db: "yapi" }]
});
db.auth('yapi','yapi');