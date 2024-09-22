import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export const instance = axios.create({
	baseURL: "http://host:8081/api/v1",
	withCredentials: true,
	headers: {
		// "Access-Control-Allow-Origin": "*",
		// "Content-type": "Application/json",
	},
});

instance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken");
		if (token) {
			config.headers.Authorization = token ? `Bearer ${token}` : "";
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);

const fetchNewToken = async () => {
	try {
		const refreshResult = await instance.get("auth/refresh", {
			withCredentials: true,
		});
		return refreshResult.data;
	} catch (error) {
		return null;
	}
};

const refreshAuth = async (failedRequest: any) => {
	const newToken = await fetchNewToken();

	if (newToken) {
		failedRequest.response.headers["Authorization"] = "Bearer " + newToken;
		localStorage.setItem("accessToken", newToken);
		instance.defaults.headers["Authorization"] = "Bearer " + newToken;

		return Promise.resolve(newToken);
	} else {
		Promise.reject();
	}
};

createAuthRefreshInterceptor(instance, refreshAuth, {
	statusCodes: [401],
	pauseInstanceWhileRefreshing: true,
});
