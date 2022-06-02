import { useState } from "react";
import { Box, InputAdornment, TextField, Button, Paper } from "@mui/material";
import {es} from 'date-fns/locale';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
    AttachMoney,
    EmailOutlined,
    PublicOutlined,
    ArrowForwardOutlined,
} from "@mui/icons-material";

import { postNewType } from "../../actions/OP Manager/types";

export const NewExpenseField = ({ fetchData }) => {
    const [dateStart, setDateStart] = useState(
        new Date()
    );
    const [dateFinish, setDateFinish] = useState(
        new Date().toLocaleDateString("fr-FR")
    );

    //Variables para textfields
    const [record, setRecord] = useState({
        name: "",
        band: "",
        rate: "",
        country: "",
        date_to_start: "",
        date_to_finish: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        postNewType(record);
        fetchData();
    };

    return (
        <Paper>
            <Box
                sx={{
                    marginBottom: "1rem",
                    padding: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "1.5rem",
                    }}
                >
                    <TextField
                        sx={{ width: "18rem" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlined size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="Employee mail"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, name: e.target.value });
                        }}
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}
                    >
                        <DatePicker
                            label="Date"
                            inputFormat="dd/MM/yyyy"
                            renderInput={(params) => (
                                <TextField
                                    sx={{
                                        width: "18rem",
                                        border: "0",
                                    }}
                                    {...params}
                                />
                            )}
                            value={dateStart}
                            onChange={(newDate) => {
                                setDateStart(newDate);
                                setRecord({ ...record, dateStart: newDate });
                            }}
                        />
                    </LocalizationProvider>

                    <TextField
                        sx={{ width: "18rem" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoney size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="Cost"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, rate: e.target.value });
                        }}
                    />

                    <TextField
                        sx={{ width: "18rem" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PublicOutlined size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="Comment"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, country: e.target.value });
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        mb: "1rem",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        sx={{ width: "18rem" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlined size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="ICA"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, name: e.target.value });
                        }}
                    />

                    <TextField
                        sx={{ width: "18rem" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlined size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="TYPE"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, name: e.target.value });
                        }}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "none",
                            borderRadius: "0px",
                            width: "12rem",
                            height: "40px",
                            fontSize: "15px",
                            fontWeight: "400",
                            bgcolor: "#0062ff",
                            ":hover": {
                                bgcolor: "#0255DA",
                            },
                        }}
                        onClick={handleSubmit}
                    >
                        Submit <ArrowForwardOutlined />
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default NewExpenseField;
