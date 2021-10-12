import { Typography } from "@mui/material"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { makeStyles } from '@mui/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Radio } from "@mui/material";
import { createContext, useState } from "react";
import { FormLabel } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Stack } from "@mui/material";
import { useHistory } from "react-router";
import { useContext } from "react";
import { DataContext } from "../dataProvider/DataProvider";
const useStyles = makeStyles({
    btn: {
        width: 100,
        backgroundColor: "violet",
        '&:hover': {
            backgroundColor: blue
        }
    },
    mrgtp: {
        marginTop: '70px'
    }
})

export default function CreateNotes(params) {

    const history = useHistory();
    const [category, setCategory] = useState("todos");
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("")
    const classes = useStyles();
    const submitHandler = (e) => {
        e.preventDefault();
        if (title && details) {
            async function postData() {
                await fetch("http://localhost:8000/notes", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "title": title, "details": details, "category": category })
                });
            }
            postData();
            history.push("/")
        }

        console.log(title);
        console.log(details);
        console.log(category);
    }
    return <div className={classes.mrgtp}>
        <Typography variant="h4" color="textSecondary" gutterBottom>Create a new Note</Typography>

        <form noValidate autoComplete="off" onSubmit={submitHandler}>
            <Stack spacing={3}>
                <TextField

                    label="Notes Title"
                    fullWidth
                    value={title}
                    color="secondary"
                    onChange={e => setTitle(e.target.value)}
                />
                <TextField

                    label="Details"
                    multiline
                    value={details}
                    rows={4}
                    fullWidth
                    color="secondary"
                    onChange={e => setDetails(e.target.value)}
                />
                <FormControl fullWidth >
                    <FormLabel >Note Ctegory</FormLabel>
                    <RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
                        <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos" />
                        <FormControlLabel value="money" control={<Radio color="secondary" />} label="Money" />
                        <FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio color="secondary" />} label="Work" />
                    </RadioGroup>
                </FormControl>


                <Button className={classes.btn} variant="contained" color="secondary" type="submit" endIcon={<KeyboardArrowUpIcon />}>Submit</Button>
            </Stack>
        </form>
    </div>
}