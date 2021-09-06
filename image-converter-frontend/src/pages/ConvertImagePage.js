import React, { useState } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import ImageBox from '../components/ImageBox'

const ConvertImagePage = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [baseImgUrl, setBaseImgUrl] = useState("")
    const [grayImgUrl, setGrayImgUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const handleFilePicked = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleImgToGrayScale = () => {
        const data = new FormData()
        data.append('file', selectedFile)
        if (isFilePicked && selectedFile) {
            setIsLoading(true)
            axios.post('http://127.0.0.1:5000/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((res) => {
                    setBaseImgUrl(res.data.base)
                    setGrayImgUrl(res.data.gray)
                    setIsLoading(false)
                })
                .catch((error) =>
                    setIsLoading(false))
        }
    }

    return (
        <Grid container direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center">
            <Grid item>
                <Typography gutterBottom variant="h3" style={{}}>
                    Convert your image to grayscale
                </Typography>
            </Grid>
            <Grid item>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="file" name="file" onChange={handleFilePicked} />
                    <Button variant="contained" onClick={handleImgToGrayScale}>
                        Convert
                    </Button>
                </form>
            </Grid>
            <ImageBox baseImgUrl={baseImgUrl}
                grayImgUrl={grayImgUrl}
                isLoading={isLoading} />
        </Grid>
    )
}

export default ConvertImagePage