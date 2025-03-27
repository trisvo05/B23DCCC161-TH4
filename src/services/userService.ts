// services/userService.ts
import { LocalStorageService } from "../utils/localStorageService";

const USER_STORAGE_KEY = "users";

export const UserService = {
  getUsers: () => LocalStorageService.getAll(USER_STORAGE_KEY),

  getUserById: (id: string | number) => LocalStorageService.getById(USER_STORAGE_KEY, id),

  addUser: (user: { id: number; name: string; age: number }) => {
    LocalStorageService.add(USER_STORAGE_KEY, user);
  },

  updateUser: (user: { id: number; name: string; age: number }) => {
    LocalStorageService.update(USER_STORAGE_KEY, user);
  },

  deleteUser: (id: number | string) => {
    LocalStorageService.delete(USER_STORAGE_KEY, id);
  },

  clearUsers: () => {
    LocalStorageService.clear(USER_STORAGE_KEY);
  },
};
