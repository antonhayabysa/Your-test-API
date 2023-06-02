export const getPosts = () => api.get("/");
export const createPost = (post) => api.post("/", post);
export const updatePost = (id, post) => api.put(`/${id}`, post);
export const deletePost = (id) => api.delete(`/${id}`);
