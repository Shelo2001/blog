import React from "react";
import { Grid } from "react-loader-spinner";

const Spinner = () => {
    return (
        <Grid
            height="80"
            width="80"
            color="#d4a373"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};

export default Spinner;
