import jsonServer from "json-server";
import auth from "json-server-auth";
import jwt_decode from "jwt-decode";


const port = 3000;

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const rules = auth.rewriter({
  '/api/users': '/users',
  '/api/posts': '/posts',
  '/api/bookmarks': '/bookmarks',
  '/api/postLikes': '/postLikes',
});

const writableMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];

function decodeJWTsID({ req }) {
  const token = req.header('Authorization')
    ? req.header('Authorization').replace('Bearer ', '')
    : null;

  if (token) {
    const decoded = jwt_decode(token);
    return Number(decoded.sub);
  }

  return 0;
}

function isAdminAuth({ req, res, next }) {
  const subUserId = decodeJWTsID({ req });

  if (subUserId !== 1) {
    return res
      .status(401)
      .jsonp({ message: 'Not A ADMIN!', success: false, status: 401 });
  }

  req.body.userId = subUserId || null;
  return next();
}

server.db = router.db;
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use('/api/posts', (req, res, next) => {
  if (writableMethods.includes(req.method)) {
    return isAdminAuth({ req, res, next });
  }
  next();
});

server.use('/api/*', (req, res, next) => {
  if (writableMethods.includes(req.method)) {
    const subUserId = decodeJWTsID({ req });
    req.body.userId = subUserId || null;
    req.body.timestamp = Date.now();
  }
  next();
});

server.use(rules);
server.use(auth);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server Listening on port ' + port);
});