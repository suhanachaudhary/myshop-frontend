
import API from "./api";

export const signupUser = (data) =>
    API.post("/api/register", data);

export const loginUser = (data) =>
    API.post("/api/login", data);
