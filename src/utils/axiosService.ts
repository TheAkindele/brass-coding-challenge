/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosInstance,
} from "axios";
import { _getToken, showToast } from "utils";

let that: any;
export const baseURL = "https://api.example.com"

class ApiService {
	private service: AxiosInstance;

	constructor() {
		const service = axios.create({
			baseURL: `${baseURL}/`,
			withCredentials: false,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
		});

		service.interceptors.response.use(this.handleSuccess, this.handleError);
		service.interceptors.request.use((config: AxiosRequestConfig) => {
			const token = "FLWSECK_TEST-afdf91f1877be896563f4ddd9ce16058-X";
			if (!token) return config;

			config.headers["Authorization"] = `Bearer ${token}`;
			return config;
		});

		this.service = service;
		that = this;
	}

	handleSuccess(response: AxiosResponse) {
		if (response?.status === 401 || response?.status === 403) {
			window.location.href = "/";
		}

		return response;
	}

	handleError = (error: AxiosError) => {
		if (error.response === undefined)
			showToast("No internet connection", "error");
		else {
			const status = error?.response?.status;

			if (status && (status === 401 || status === 403)) {
				window.location.href = "/";
			}
		}

		return Promise.reject(error?.response?.data);
	};

	request(
		method:
			| "GET"
			| "get"
			| "delete"
			| "DELETE"
			| "head"
			| "HEAD"
			| "options"
			| "OPTIONS"
			| "post"
			| "POST"
			| "put"
			| "PUT"
			| "patch"
			| "PATCH"
			| "link"
			| "LINK"
			| "unlink"
			| "UNLINK"
			| undefined,
		path: string,
		callback: any,
		errorCallback: any,
		payload?: AxiosRequestConfig,
	) {
		if (method === "GET" || method === "get") {
			return this.service
				.request({
					method,
					url: path,
					responseType: "json",
				})
				.then(
					(response: { data: AxiosResponse }) => callback(response.data),
					errorCallback
				);
		} else {
			return this.service
				.request({
					method,
					url: path,
					responseType: "json",
					data: payload,
				})
				.then(
					(response: { data: AxiosResponse }) => callback(response?.data),
					errorCallback
				);
		}
	}
}

export default new ApiService();
