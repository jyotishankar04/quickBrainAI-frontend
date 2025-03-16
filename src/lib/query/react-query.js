import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getSessionApi,
  loginApi,
  refreshSessionApi,
  registerApi,
  registerCompletionApi,
  registerVerificationApi,
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
  });
};

export const useRefreshSessionMutation = () => {
  return useMutation({
    mutationFn: () => refreshSessionApi(),
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
