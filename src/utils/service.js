import api from "../api/apiService/apiService";

export const getPosts = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении постов: ", error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await api.post("/", post);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании поста: ", error);
    throw error;
  }
};

export const updatePost = async (id, post) => {
  try {
    const response = await api.put(`/${id}`, post);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при обновлении поста с ID=${id}: `, error);
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    await api.delete(`/${id}`);
  } catch (error) {
    console.error(`Ошибка при удалении поста с ID=${id}: `, error);
    throw error;
  }
};
