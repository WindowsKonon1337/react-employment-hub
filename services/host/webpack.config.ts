import webpack from "webpack";
import path from "path";
import packageJson from "./package.json";

import { buildWebpack, BuildPaths, BuildMode, BuildPlatfrom } from "@packages/build-config";

interface EnvProps {
	mode?: BuildMode;
	port?: number;
	analyzer?: boolean;
	platform?: BuildPlatfrom;
	PROFILE_REMOTE_URL?: string;
	VACANCIES_REMOTE_URL?: string;
}

const webpackConfig = (env: EnvProps) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		output: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
		public: path.resolve(__dirname, "public"),
	};

	const PROFILE_REMOTE_URL = env.PROFILE_REMOTE_URL ?? "http://localhost:5001";
	const VACANCIES_REMOTE_URL = env.VACANCIES_REMOTE_URL ?? "http://localhost:5002";

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 5000,
		mode: env.mode ?? "development",
		paths: paths,
		platform: env.platform ?? "desktop",
		isAnalyzerOpen: env.analyzer,
	});

	config.plugins?.push(
		new webpack.container.ModuleFederationPlugin({
			name: "host",
			filename: "remoteEntry.js",
			remotes: {
				profile: `profile@${PROFILE_REMOTE_URL}/remoteEntry.js`,
				vacancies: `vacancies@${VACANCIES_REMOTE_URL}/remoteEntry.js`,
			},
			shared: {
				...packageJson.dependencies,
				react: {
					eager: true,
					requiredVersion: packageJson.dependencies["react"],
				},
				"react-router-dom": {
					eager: true,
					requiredVersion: packageJson.dependencies["react-router-dom"],
				},
				"react-dom": {
					eager: true,
					requiredVersion: packageJson.dependencies["react-dom"],
				},
				"styled-components": {
					eager: true,
					requiredVersion: packageJson.dependencies["styled-components"],
				},
			},
		}),
	);

	return config;
};

export default webpackConfig;
