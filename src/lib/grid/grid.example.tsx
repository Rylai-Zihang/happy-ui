import React from "react";
import Grid from "./gridItem"

export default function () {
    return (<div>
        <Grid container>
            <Grid xs={4}>
                <div style={{ backgroundColor: "#C7E6E9" }}></div>
            </Grid>
            <Grid xs={8}>
                <div style={{ backgroundColor: "#9BC5B7" }}></div>
            </Grid>
            <Grid xs={12}>
                <div style={{ backgroundColor: "#C9EBCB" }}></div>
            </Grid>
        </Grid>
    </div>)
}