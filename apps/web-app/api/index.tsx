import axios from "axios";
import { Video } from "../types";

const base = process.env.NEXT_PUBLIC_API_ENDPOINT;

const userBase = `${base}/api/users`;
const authBase = `${base}/api/auth`;
const videosBase = `${base}/api/videos`;

export const registerUser = (payload: {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
}) => {
  return axios.post(userBase, payload).then((res) => res.data);
};

export const login = (payload: { email: string; password: string }) => {
  return axios
    .post(authBase, payload, {
      withCredentials: true,
    })
    .then((res) => res.data);
};

export const getMe = () => {
  return axios
    .get(userBase, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch(() => {
      return null;
    });
};

export const uploadVideo = ({
  formData,
  config,
}: {
  formData: FormData;
  config: { onUploadProgress: (progressEvent: ProgressEvent) => void };
}) => {
  return axios
    .post(videosBase, formData, {
      withCredentials: true,
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};

export const updateVideo = ({
  videoId,
  ...payload
}: {
  videoId: string;
  title: string;
  description: string;
  published: boolean;
}) => {
  return axios.patch<Video>(`${videosBase}/${videoId}`, payload, {
    withCredentials: true,
  });
};

export const getVideos = () => {
  return axios.get(videosBase).then((res) => res.data);
};
