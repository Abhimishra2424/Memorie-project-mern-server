# MEMORIES SERVER 


### CRUD API 
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);


### LIKE API
router.patch('/:id/likePost',likePost)

