
export default function isUser(req, res, next) {
  if (req.body.user) {
    const userData = req.body.user
    req.user = userData
  }
  if (req.user) {
    next()
    return
  }
  res.send({ error: `User must be auth to delete data` });
}