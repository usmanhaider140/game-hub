// import ApiClient from "./api-client";
import createService from "./HttpService";
export interface User {
  id: number;
  name: string;
}
// class UserService {
//   createUser(user: User) {
//     return ApiClient.post("users", user);
//   }
//   getAllUsers() {
//     const controller: AbortController = new AbortController();
//     const request = ApiClient.get<User[]>("users", {
//       signal: controller.signal,
//     });
//     return { request, cancel: () => controller.abort() };
//   }
//   deleteUser(id: number) {
//     return ApiClient.delete("users/" + id);
//   }
// }

export default createService("/users");
