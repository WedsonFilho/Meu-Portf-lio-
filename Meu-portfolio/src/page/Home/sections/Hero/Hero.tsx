
import styled from "@emotion/styled"
import foto from "../../../../assets/images/foto.jpg"
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
    const StyledHero = styled("div") (({ theme })=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
     }))
     const StyledImg = styled("img") (({theme})=> ({
        width: "80%",
        borderRadius: "50%",
        border: '1px solid ${theme.palette.primary.contrastText}',
     }))
    return (
      <>
        <StyledHero>
          <Container maxWidth="lg">
            
            <Grid container spacing={2}>
                    <Grid size ={5}>
                    <StyledImg src={foto} />
                    </Grid>
                    <Grid size ={7}>
                        <Typography color="primary.contrastText" variant= "h1" textAlign="Center">Wedson Filho</Typography>
                        <Typography color="primary.contrastText" variant= "h2" textAlign="Center">Desenvolvedor FullStack</Typography>
                        <Grid container display="flex" justifyContent="center" pt={3} >
                          <Grid size={4} display="flex" justifyContent="center">
                          <Button color="secondary" variant="outlined" onClick={() => console.log ("download")}  component= "a" href="/curriculo 2025.pdf"
                           dowload> <DownloadForOfflineIcon style={{ marginRight: "8px"}}/>
                              Download CV</Button>
                        
                        </Grid>
                        <Grid size={4} display="flex" justifyContent="center">
                          <Button color="secondary" variant="outlined" onClick={() => console.log("contato")}> <EmailIcon/>
                                    Contato</Button>
                        </Grid>
                        </Grid>
                        

                    </Grid>
           </Grid>
          </Container>
            
                    
                    
            

                
        </StyledHero>
      
      </>
    )
  }
  
  export default Hero
  