import React, { useContext } from 'react';
import { Popover } from '@mui/material';
import { SketchPicker } from 'react-color';
import DataContext from '../Context/DataContext';

const ColorPicker = () => {
    const { setBgColor, colorPickerAnchor, setColorPickerAnchor } = useContext(DataContext);

    const handleColorChange = (color) => {
        setBgColor(color.hex);
        setColorPickerAnchor(null);
    };

    const handleClose = () => {
        setColorPickerAnchor(null);
    };

    return (
        <Popover
            open={Boolean(colorPickerAnchor)}
            anchorEl={colorPickerAnchor}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <SketchPicker color="#FFFFFF" onChange={handleColorChange} />
        </Popover>
    );
};

export default ColorPicker;
