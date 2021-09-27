import React from "react";
import Grid from "./gridItem"
import "./grid.example.scss"

export default function () {
    return (
        <div>
            <div style={{ "marginBottom": 20 }}>
                <h2>default</h2>
                <Grid container>
                    <Grid xs={4}>
                        <div className={"item-box"} style={{ backgroundColor: "#C7E6E9" }}></div>
                    </Grid>
                    <Grid xs={8}>
                        <div className={"item-box"} style={{ backgroundColor: "#9BC5B7" }}></div>
                    </Grid>
                    <Grid xs={12}>
                        <div className={"item-box"} style={{ backgroundColor: "#C9EBCB" }}></div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ "marginBottom": 20 }}>
                <h2>Auto fill remaining width</h2>
                <Grid container>
                    <Grid xs>
                        <div className={"item-box"} style={{ backgroundColor: "#C7E6E9" }}></div>
                    </Grid>
                    <Grid xs={18}>
                        <div className={"item-box"} style={{ backgroundColor: "#9BC5B7" }}></div>
                    </Grid>
                    <Grid xs>
                        <div className={"item-box"} style={{ backgroundColor: "#C9EBCB" }}></div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ "marginBottom": 20 }}>
                <h2>Fluid Layout</h2>
                <Grid container gap={10}>
                    <Grid xs={24}>
                        <div className={"item-box"} style={{ backgroundColor: "#C7E6E9" }}></div>
                    </Grid>
                    <Grid xs={12}>
                        <div className={"item-box"} style={{ backgroundColor: "#9BC5B7" }}></div>
                    </Grid>
                    <Grid xs={12}>
                        <div className={"item-box"} style={{ backgroundColor: "#C9EBCB" }}></div>
                    </Grid>
                    <Grid xs={6}>
                        <div className={"item-box"} style={{ backgroundColor: "#C7E6E9" }}></div>
                    </Grid>
                    <Grid xs={6}>
                        <div className={"item-box"} style={{ backgroundColor: "#9BC5B7" }}></div>
                    </Grid>
                    <Grid xs={6}>
                        <div className={"item-box"} style={{ backgroundColor: "#C9EBCB" }}></div>
                    </Grid>
                    <Grid xs={6}>
                        <div className={"item-box"} style={{ backgroundColor: "#B3EEE3" }}></div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ "marginBottom": 20 }}>
                <h2>Responsible Layout</h2>
                <Grid container>
                    <Grid xs={24} md={8}>
                        <div className={"item-box"} style={{ backgroundColor: "#C7E6E9" }}></div>
                    </Grid>
                    <Grid xs={24} md={8}>
                        <div className={"item-box"} style={{ backgroundColor: "#9BC5B7" }}></div>
                    </Grid>
                    <Grid xs={24} md={8}>
                        <div className={"item-box"} style={{ backgroundColor: "#C9EBCB" }}></div>
                    </Grid>
                </Grid>
            </div >
        </div >)
}