import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {
      const StyledTooBar = styled(Toolbar)(({theme}) => ({
            display:"flex",
            justifyContent:"space-evenly"
      }))
    return (
      <>
        <AppBar position="relative">
            <StyledTooBar>
            <MenuItem>Sobre Mim</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem> Projetos</MenuItem>
            </StyledTooBar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  