
import styled from "@emotion/styled"
import foto from "../../../../assets/images/foto.jpg"
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
    const StyledHero = styled("div") (()=> ({
        backgroundColor: "black",
        height: "100vh"
     }))
     const StyledImg = styled("img") (()=> ({
        width: "100%",
        borderRadius: "50%"
     }))
    return (
      <>
        <StyledHero>
          <Container maxWidth="lg">
            
            <Grid container spacing={2}>
                    <Grid size ={4}>
                    <StyledImg src={foto} />
                    </Grid>
                    <Grid size ={8}>
                        <Typography color="primary" variant= "h1" textAlign="Center">Wedson Filho</Typography>
                        <Typography color="primary" variant= "h2" textAlign="Center">Desenvolvedor FullStack</Typography>
                        <Grid container display="flex" justifyContent="center">
                          <Grid size={4} display="flex" justifyContent="center">
                          <Button> <DownloadForOfflineIcon/>
                         Download CV</Button>
                        
                        </Grid>
                        <Grid size={4} display="flex" justifyContent="center">
                          <Button> <EmailIcon/>
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
  