import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#B4656F",
    "&:hover": {
        backgroundColor: "#8B9D83",
        color: "#000000"
    }
}));

export default function ButtonList() {
    return (
        <Stack direction="row" spacing={2}>
            <ColorButton variant="contained">Custom CSS</ColorButton>
            <Button variant="contained">Upload</Button>
            <Button variant="contained" >
                Export
            </Button>
        </Stack>
    );
}
