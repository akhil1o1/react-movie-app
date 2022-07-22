import React from "react";
import {Box, Stack, Typography, Chip} from "@mui/material";

function Details() {
    return <Stack direction="row" width="100%" sx={{backgroundColor:"#fff"}}>
        <img className="movie-poster" src="https://image.tmdb.org/t/p/w300/6zUkjB5OtiFhN2DiqdT1IllNJTa.jpg" alt="movie-poster"/>
        <Stack p="50px" sx={{width:"60%"}}>
        <Typography variant="h2" fontWeight="700">
            Fast and Furious 6
        </Typography>
        <Box pt="30px" sx={{display:"flex", justifyContent:"space-between"}}>
        <Chip label={<Typography variant="h6" fontWeight="700">rating : 6.7/10</Typography>} />
        <Chip label={<Typography variant="h6" fontWeight="700">release year : 2013</Typography>} />
        </Box>
        <Typography variant="h6" pt="30px">
        Desde que Dom y Brian destruyeron el imperio de un mafioso y se hicieron con cien millones de dólares, se encuentran en paradero desconocido; no pueden regresar a casa porque la ley los persigue. Entretanto, Hobbs ha seguido la pista por una docena de países a una banda de letales conductores mercenarios, cuyo cerebro cuenta con la inestimable ayuda de la sexy Letty, un viejo amor de Dom que éste daba por muerta. La única forma de detenerlos es enfrentarse a ellos en las calles, así que Hobbs le pide a Dom que reúna a su equipo en Londres. ¿Qué obtendrán a cambio? Un indulto para que todos puedan volver a casa con sus familias..
        </Typography>
        <Box pt="30px" sx={{display:"flex", justifyContent:"space-between"}}>
        <Chip label={<Typography variant="h6" fontWeight="700">genre : accion</Typography>} />
        <Chip label={<Typography variant="h6" fontWeight="700">origin : USA</Typography>} />
        </Box>
    </Stack>
</Stack>
}

export default Details;