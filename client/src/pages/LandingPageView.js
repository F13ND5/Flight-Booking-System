import { Box, Button, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Container } from "@mui/material";

export default function LandingPageView(props){

    const [travelDate, setTravelDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    return (
        <div>
            <Stack direction="column" justifyContent="center">
                <Container maxWidth="sm">
                    <div>
                        <Paper elevation={8}>
                            <h3>Enter Search Criteria to find flights</h3>
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
                                        <Stack direction={"row"}>
                                            <TextField
                                                onChange = {(event) => setTravelDate(event.target.value)}
                                                id="standard-required"
                                                label="Date"
                                                type="date"
                                                variant="standard"
                                                value={travelDate}
                                                //helperText = {}
                                            />
                                            <TextField
                                                onChange = {(event) => setReturnDate(event.target.value)}
                                                id="standard-required"
                                                label="Return date"
                                                type="date"
                                                variant="standard"
                                                value={returnDate}
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
                                        </Stack>
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
                </Container>

                <div>
                    <Stack direction="column" justifyContent="center">
                        <Container maxWidth="xl">
                            <div>
                                <Paper elevation={8}>
                                    <h3>Recomendations</h3>
                                </Paper>
                            </div>
                        </Container>
                    </Stack>
                </div>
            </Stack>
        </div>
    )
}