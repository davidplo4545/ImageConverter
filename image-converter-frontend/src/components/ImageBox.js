import React from 'react'
import { Grid, Typography, Box, CircularProgress } from '@material-ui/core'
const ImageBox = ({ baseImgUrl, grayImgUrl, isLoading }) => {
    return (
        <Grid item>
            {isLoading ?
                <CircularProgress /> :
                <React.Fragment>
                    {baseImgUrl ?
                        <Grid container
                            spacing={3}>
                            <Grid item>
                                <Typography gutterBottom variant="h4">
                                    Base Image
                                </Typography>
                                <img src={baseImgUrl} alt="base-img"
                                    style={{ maxWidth: 700 }} />
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="h4">
                                    Gray Image
                                </Typography>
                                <img src={grayImgUrl} alt="gray-img"
                                    style={{ maxWidth: 700 }} />

                            </Grid>
                        </Grid>
                        :
                        <Box />
                    }
                </React.Fragment>
            }
        </Grid>
    )
}

export default ImageBox