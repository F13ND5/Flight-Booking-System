import { Box, Button, Paper, Stack } from "@mui/material";
import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export default function LandingPageView(props){

    return (
        <div>
            <Stack direction="column" justifyContent="center">

                <div>
                    <Paper elevation={8}>
                        <div className='inner-search-form'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="oneWay"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
                                    <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
                                </RadioGroup>
                            </FormControl>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        //onChange = {(event) => handleFirstNameChange(event.target.value)}
                                        id="standard-required"
                                        label="From"
                                        variant="standard"
                                        //helperText = {}
                                    />
                                    <TextField
                                        //onChange = {(event) => handleFirstNameChange(event.target.value)}
                                        id="standard-required"
                                        label="To"
                                        variant="standard"
                                        //helperText = {}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <TextField
                                        //onChange = {(event) => handleFirstNameChange(event.target.value)}
                                        id="standard-required"
                                        label="Date"
                                        type="date"
                                        variant="standard"
                                        //helperText = {}
                                    />
                                    <TextField
                                        //onChange = {(event) => handleFirstNameChange(event.target.value)}
                                        id="standard-required"
                                        label="Return date"
                                        type="date"
                                        variant="standard"
                                        //helperText = {}
                                    />
                                    <TextField
                                        //onChange = {(event) => handleFirstNameChange(event.target.value)}
                                        id="standard-required"
                                        label="# Travellers"
                                        type="number"
                                        variant="standard"
                                        //helperText = {}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <Button
                                        //onClick={searchButton}
                                        size="large"
                                        variant="contained" 
                                        color="success"
                                    >Search</Button>
                                </div>
                            </Box>
                        </div>
                    </Paper>
                </div>

                <div>Recomendations</div>
            </Stack>
        </div>
    )
}