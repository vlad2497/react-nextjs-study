import { serverHOST } from "./index";
import { IPost } from "./../interfaces/IPost";

export const getDetail = async (id): Promise<IPost> => {
  const response = await fetch(`${serverHOST}/posts/${id}`);
  const result: IPost = await response.json();
  return result;
};

export const getList = async (): Promise<IPost[]> => {
  const response = await fetch(`${serverHOST}/posts`);
  const result: IPost[] = await response.json();
  return result;
};
