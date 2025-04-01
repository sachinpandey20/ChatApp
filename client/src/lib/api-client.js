//const { default: axios } = require("axios");
import { HOST } from "@/utils/constants";
import axios from "axios";

export const apiClient = axios.create({
    baseURL: HOST,
});

