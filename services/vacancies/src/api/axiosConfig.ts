import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export const instance = axios.create({
	baseURL: "http://127.0.0.1:8081/api/v1",
	withCredentials: true,
});

instance.interceptors.request.use(function (config) {
	const token = localStorage.getItem("accessToken");
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	return config;
});

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
