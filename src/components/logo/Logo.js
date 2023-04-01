import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';
import logo_image from '../../assets/img/logo_only.png'


// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    // <Image src="../../assets/img/TheVet_LOGO.png" />
    <>
          <a href="/"><img src={logo_image} alt="" /></a>
    </>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <>
      <div className="container text-center d-flex justify-content-center">
          <a href="/"><img src={logo_image} height={"112px"} width={"119"} alt="" /></a>
      </div>
    </>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
