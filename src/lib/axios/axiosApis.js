import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getSessionApi = async () => {
  const response = await axiosInstance.get("/auth/session");
  return response.data;
};

export const refreshSessionApi = async () => {
  const response = await axiosInstance.get("/auth/refresh");
  return response.data;
};

export const loginApi = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const registerApi = async (data) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};

export const registerVerificationApi = async (data) => {
  const response = await axiosInstance.post("/auth/register/verify", data);
  return response.data;
};

export const registerCompletionApi = async (data) => {
  const response = await axiosInstance.post("/auth/register/completion", data);
  return response.data;
};

// Notes api
export const createNoteApi = async (data) => {
  const response = await axiosInstance.post("/notes", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateNoteApi = async ({ noteId, data }) => {
  console.log("Received Data in API:", data);
  const response = await axiosInstance.put(`/notes/${noteId}`, data);
  return response.data;
};

export const getNotesApi = async (
  page = 1,
  limit = 6,
  category = "all",
  orderBy = "updatedAt",
  filterBy = "all"
) => {
  const response = await axiosInstance.get(
    `/notes?page=${page}&limit=${limit}&orderBy=${orderBy}&filterBy=${filterBy}&category=${category}`
  );
  return response.data;
};

export const toggleStarApi = async (noteId) => {
  const response = await axiosInstance.put(`/notes/starred/${noteId}`);
  return response.data;
};

export const deleteNoteApi = async (noteId) => {
  const response = await axiosInstance.delete(`/notes/${noteId}`);
  return response.data;
};

// categories api
export const createCategoryApi = async (data) => {
  const response = await axiosInstance.post("/notes/categories", data);
  return response.data;
};

export const getCategoriesApi = async () => {
  const response = await axiosInstance.get("/notes/categories");
  return response.data;
};

export const getNoteByIdApi = async (noteId) => {
  const response = await axiosInstance.get(`/notes/${noteId}`);
  return response.data;
};

export const searchNotesApi = async (query) => {
  const response = await axiosInstance.get(`/notes/search?q=${query}`);
  return response.data;
};

//chat bot
export const getAiResponse = async (message) => {
  const response = await axiosInstance.post("/ai", { message });
  return response.data;
};

// ai
export const generateQuestionAnswer = async ({ noteId, question }) => {
  const response = await axiosInstance.post("/qbai/pdf/answer", {
    noteId,
    question,
  });

  return response.data;
};

export const getWorkspacePDFChatBotResponse = async ({ noteId, question }) => {
  const response = await axiosInstance.post("/qbai/pdf/chat/" + noteId, {
    question,
  });
  return response.data;
};

export const getNoteChatsApi = async (noteId) => {
  const response = await axiosInstance.get(`/notes/chat/${noteId}`);
  return response.data;
};

export const saveNoteApi = async ({ noteId, content }) => {
  const response = await axiosInstance.put(`/notes/save/${noteId}`, {
    content: content,
  });
  return response.data;
};

export const getSummaryApi = async (noteId) => {
  const response = await axiosInstance.get(`/qbai/pdf/summary/${noteId}`);
  return response.data;
};
