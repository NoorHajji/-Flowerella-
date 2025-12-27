import { Paper, Typography, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.contactSection}>
        <div style={styles.contactCard}>
          <Paper elevation={3} style={styles.paper}>
            <Typography variant="h6" style={{ ...styles.contactTitle, textAlign: 'center' }}>
              <LocationOnIcon style={{ fontSize: '30px' }} /> Address
            </Typography>
            <Typography variant="body1" style={{ ...styles.contactText, textAlign: 'center' }}>
              123 Flower St, Garden City, FL 12345
            </Typography>
          </Paper>
        </div>
      </div>

      <div style={styles.socialLinks}>
        <IconButton href="https://www.facebook.com" target="_blank" style={styles.iconButton}>
          <FacebookIcon style={{ fontSize: '35px' }} />
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" style={styles.iconButton}>
          <InstagramIcon style={{ fontSize: '35px' }} />
        </IconButton>
        <IconButton href="https://x.com" target="_blank" style={styles.iconButton}>
          <TwitterIcon style={{ fontSize: '35px' }} />
        </IconButton>
        
      </div>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '30px 0',
  },
  contactSection: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
  contactCard: {
    margin: '0 20px',
    maxWidth: '400px',
    textAlign: 'center',
  },
  paper: {
    padding: '30px', // Increased padding to make the square bigger
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  contactTitle: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#333',
    marginBottom: '15px', // Adjusted for balance
  },
  contactText: {
    fontSize: '18px',
    color: '#555',
    lineHeight: 1.5,
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  iconButton: {
    color: '#e84393',
    fontSize: '30px',
  },
};

export default Footer;
