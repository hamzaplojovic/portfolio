import { Text, Paper, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ProjectLanguages } from "./ItemSkills";
import { ItemInterface } from "./ItemType";
import { useStyles } from "./ProjectsItemStyles";
// IconScale

interface UserInfoActionProps {
    item: ItemInterface;
}

export const ProjectsItem = (props: UserInfoActionProps) => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const handleClick = (username: string) => {
        navigate(`/${username}`, { state: { item: props.item } });
    };
    return (
        <Paper withBorder className={classes.item}>
            <Text className={classes.name}>{props.item.name}</Text>
            <ProjectLanguages languages={props.item.languages} />
            <Button
                className={classes.button}
                onClick={() => {
                    handleClick(props.item.name);
                }}
            >
                View More
            </Button>
        </Paper>
    );
};
