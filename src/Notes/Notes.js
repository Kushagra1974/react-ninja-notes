import { IconButton } from "@mui/material"
import { Card } from "@mui/material"
import { CardHeader } from "@mui/material"
import { Avatar } from "@mui/material"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { makeStyles } from "@mui/styles"
import { useEffect } from "react"
import { useState } from "react"
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
const useStyle = makeStyles({
    mrgtp: {
        marginTop: '80px'
    }
})

export default function Notes(params) {

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData(params) {
            try {
                const res = await fetch("http://localhost:8000/notes");
                const dt = await res.json();
                setData(dt);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchData();

    }, [])
    const classes = useStyle()

    const deleteHandler = (id) => {
        async function deleteData() {
            try {
                await fetch("http://localhost:8000/notes/" + id, {
                    method: "DELETE"
                })
            }
            catch (e) {
                console.log(e);
            }
        }
        deleteData();
        setData((d) => {
            return (d.filter(n => n.id !== id))
        });
    }

    return <div className={classes.mrgtp}>
        <Masonry columns={3} spacing={3}>
            {data.map((d, i) => {
                return (
                    <MasonryItem key={i}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar>{d.title[0]}</Avatar>
                                }
                                title={d.title}
                                subheader={d.category}
                                action={
                                    <IconButton onClick={() => deleteHandler(d.id)}>
                                        <DeleteForeverRoundedIcon></DeleteForeverRoundedIcon>
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <Typography>{d.details}</Typography>
                            </CardContent>
                        </Card>
                    </MasonryItem>
                )
            })}
        </Masonry>
    </div>
}