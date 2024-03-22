import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { LoaderBlock } from "./styled";

export const Loader = () => {
	return (
		<LoaderBlock>
			<RotatingLines
				visible={true}
				width="25"
				strokeWidth="5"
				animationDuration="0.75"
				strokeColor="#0077b6"
				ariaLabel="rotating-lines-loading"
			/>
		</LoaderBlock>
	);
};
