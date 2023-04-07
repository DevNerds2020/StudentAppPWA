/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions } from '@mui/material';
import { useSelector } from 'react-redux';

import React from 'react';
import translation from '../../utils/translation';

function MapDialog(props) {
  const { open, closeDialog } = props;
  const localeLanguage = useSelector((state) => state.data.localeLanguage);

  return (
    <Dialog open={open}>
      {/* get image from google drive */}
      <img
        src="https://drive.google.com/u/0/uc?id=1anZfMWWP4LcMZff8whpWJBDUAmu4-DT3&export=download"
        alt="map"
        style={{ width: '100%' }}
      />
      <DialogActions>
        <Button variant="contained" onClick={closeDialog}>
          {translation[localeLanguage].ok}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default MapDialog;
