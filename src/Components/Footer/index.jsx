import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { LinkedIn, Facebook, Twitter } from "@mui/icons-material";

const styles = {
  container: {
    background: "#004c3d",
    color: "white",
    py: 4,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "16px",
  },
  icon: {
    background: "white",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#004c3d",
    transition: "background-color 0.3s",
    "&:hover": {
      background: "white",
      color: "#004c3d",
    },
  },
};

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <ul>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <ul>
              <li>
                <Link href="#">Product 1</Link>
              </li>
              <li>
                <Link href="#">Product 2</Link>
              </li>
              <li>
                <Link href="#">Product 3</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <ul>
              <li>
                <Link href="#">Service 1</Link>
              </li>
              <li>
                <Link href="#">Service 2</Link>
              </li>
              <li>
                <Link href="#">Service 3</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <ul>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box sx={styles.iconContainer}>
          <Box sx={styles.icon}>
            <LinkedIn />
          </Box>
          <Box sx={styles.icon}>
            <Facebook />
          </Box>
          <Box sx={styles.icon}>
            <Twitter />
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          mt={4}
        >
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
