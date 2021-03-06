const router = require('koa-router')();
const checkToken = require('../middleware/checkToken')
const checkSuperAdmin = require('../middleware/checkSuperAdmin')
const articleController = require('../controllers/article');

router.prefix('/article');

router.post('/findAllArticle',articleController.findAllArticle);
router.post('/findArticleByName',articleController.findArticleByName);
router.post('/addArticle',articleController.addArticle);
router.post('/updateArticle',articleController.updateArticle);

// router.post('/articleSpider', articleController.articleSpider);


router.post('/delArticle',checkSuperAdmin,articleController.delArticle);

// router.post('/login', articleController.Login)
// router.post('/register', articleController.Reg)

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a admin/bar response'
});

module.exports = router;
