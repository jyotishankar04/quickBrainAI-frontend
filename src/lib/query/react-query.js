import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createCategoryApi,
  createNoteApi,
  deleteNoteApi,
  getCategoriesApi,
  getNoteByIdApi,
  getNotesApi,
  getSessionApi,
  loginApi,
  refreshSessionApi,
  registerApi,
  registerCompletionApi,
  registerVerificationApi,
  searchNotesApi,
  toggleStarApi,
  updateNoteApi,
} from "../axios/axiosApis";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginApi,
  });
};

export const useSessionQuery = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: () => getSessionApi(),
    retry: false,
  });
};

export const useRefreshSessionMutation = () => {
  return useMutation({
    mutationFn: () => refreshSessionApi(),
    retry: false,
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: registerApi,
  });
};

export const useRegisterVerificationMutation = () => {
  return useMutation({
    mutationFn: registerVerificationApi,
  });
};

export const useRegisterCompletionMutation = () => {
  return useMutation({
    mutationFn: registerCompletionApi,
  });
};

//notes
export const useCreateNoteMutation = () => {
  return useMutation({
    mutationFn: createNoteApi,
  });
};

export const useNotesQuery = (page, limit, category, filterBy, orderBy) => {
  return useQuery({
    queryKey: ["notes", { page, limit, category, filterBy, orderBy }],
    queryFn: () => getNotesApi(page, limit, category, orderBy, filterBy),
    enabled: !!page,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });
};
export const useNoteUpdateMutation = () => {
  return useMutation({
    mutationFn: updateNoteApi,
  });
};

export const useSearchNotesQuery = (query) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchNotesApi(query),
    enabled: !!query,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });
};

export const useNoteByIdQuery = (noteId) => {
  return useQuery({
    queryKey: ["note", noteId],
    queryFn: () => getNoteByIdApi(noteId),
  });
};

export const useToggleStarMutation = () => {
  return useMutation({
    mutationFn: toggleStarApi,
  });
};

export const useDeleteNoteMutation = () => {
  return useMutation({
    mutationFn: deleteNoteApi,
  });
};

// categories

export const useCreateCategoryMutation = () => {
  return useMutation({
    mutationFn: createCategoryApi,
  });
};

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategoriesApi(),
  });
};
