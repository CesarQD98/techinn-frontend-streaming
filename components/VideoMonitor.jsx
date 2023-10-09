"use client";
import { useState } from "react";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";

export default function VideoMonitor(props) {
    const {title} = props

    const [isplaying, setIsplaying] = useState(false)

    return (
        <Card variant="outlined">
            <CardContent>
                <Container>
                    <Typography variant="h3">{title}</Typography>
                    <Box sx={{ width: '100%', height: '100%' }}>
                        Here goes the video player!
                    </Box>
                    
                    <Box sx={{display: "flex", justifyContent: "space-around"}}>
                        <Button variant="contained" disabled={!isplaying} onClick={() => { setIsplaying(!isplaying) }} color="success">Iniciar</Button>
                        <Button variant="contained" disabled={isplaying} onClick={() => { setIsplaying(!isplaying) }} color="error">Detener</Button>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "space-around"}}>
                        <Button variant="contained" color="primary">Configuración</Button>
                    </Box>
                </Container>
            </CardContent>
        </Card>
    )
}